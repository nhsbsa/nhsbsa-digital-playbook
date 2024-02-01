const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const output = './_site/nhsbsa-digital-playbook'; // could be passed from GH action
// dynamic import required here
const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));

const playbookIssueUrl =
  'https://api.github.com/repos/nhsbsa/nhsbsa-digital-playbook/issues';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN ?? '';
const defaultRequestOptions = {
  method: 'GET',
  headers: {
    Authorization: `token ${GITHUB_TOKEN}`,
  },
};

/**
 * The `createGitHubIssue` function is an asynchronous function that creates a new GitHub issue using the GitHub API. It
 * takes a `title` and `body` as parameters, which represent the title and body of the issue respectively.
 *
 * @async
 * @function
 * @name createGitHubIssue
 * @kind function
 * @param {any} title
 * @param {any} body
 * @returns {Promise<void>}
 */
async function createGitHubIssue(title, body) {
  try {
    const response = await fetch(playbookIssueUrl, defaultRequestOptions);
    const issuesData = await response.json();
    const existingIssue = issuesData.find((issue) => issue.title === title);

    if (!existingIssue) {
      const postRequestOptions = {
        ...defaultRequestOptions,
        method: 'POST',
        'Content-Type': 'application/json',
        body: JSON.stringify({ title, body, labels: ['REVIEW'] }),
      };

      const issueResponse = await fetch(playbookIssueUrl, postRequestOptions);
      const issueData = await issueResponse.json();
      console.log('Issue creation successful: ', issueData.html_url);
    }
    // NOOP: do nothing as issue exists
  } catch (error) {
    console.error('Failed to publish new issue: ', error);
  }
}

/**
 * The `findFilesByExtension` function is a recursive function that searches for files with a specific file extension in a
 * given directory and its subdirectories.
 *
 * This could be replaced by libraries such as glob.
 *
 * @function
 * @name findFilesByExtension
 * @kind function
 * @param {any} dir
 * @param {any} fileExt
 * @param {any[]} fileList?
 * @returns {any[]}
 */
function findFilesByExtension(dir, fileExt, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach((file) => {
    if (fs.statSync(path.join(dir, file)).isDirectory()) {
      findFilesByExtension(path.join(dir, file), fileExt, fileList);
    } else if (file.endsWith('.' + fileExt)) {
      fileList.push(path.join(dir, file));
    }
  });

  return fileList;
}

/**
 * Format dates
 * Example output: Thu, 1 Feb 2024, 15:39
 */
function formatDate(date) {
  return date.toLocaleDateString('en-GB', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

/**
 * The `checkReviewDateForHtml` function is responsible for checking the review date of HTML files. It takes an array of
 * file paths as input and iterates over each file. We could also check for the surrounding time div element that wraps the correct <p> elements.
 *
 * @function
 * @name checkReviewDateForHtml
 * @kind function
 * @param {any} files
 * @returns {void}
 */
function checkReviewDateForHtml(files) {
  files.forEach((file) => {
    const content = fs.readFileSync(file, 'utf8');
    const reviewElement = cheerio.load(content)(
      'p:contains("Next review due:")',
    );

    if (reviewElement.length > 0) {
      const timeElement = reviewElement.find('time');

      // sanity check
      if (timeElement.length > 0) {
        // Get the datetime attribute of the <time> element
        const reviewDate = new Date(timeElement.attr('datetime'));

        // Get the last modified date of the file
        const lastModifiedDate = fs.statSync(file).mtime;
        if (lastModifiedDate > reviewDate) {
          console.log(`The file ${file} is overdue for review`);
          const pathParts = file.split('/');
          const shortFilePath =
            '/' +
            pathParts
              .slice(-3)
              .join('/')
              .replace('.html', '.md')
              .replace('/index.md', '/');
          const mdFilePath = file
            .replace(
              '_site/',
              'https://github.com/nhsbsa/nhsbsa-digital-playbook/blob/main/src/',
            )
            .replace('.html', '.md')
            .replace('/index.md', '/');
          // we could use promise.all for efficiency but a bit overkill for this
          createGitHubIssue(
            `Review required: ${shortFilePath}`,
            `The following page requires a review:<br>${mdFilePath}<br><br>*Review required since: ${formatDate(reviewDate)}*<br>*Issue raised: ${formatDate(new Date())}*`,
          );
        }
      }
    }
  });
}

// ---
// to run from a node call:
console.log('Checking pages for review');
if (!GITHUB_TOKEN) return console.error('No Github token set');
const htmlFiles = findFilesByExtension(output, 'html');
checkReviewDateForHtml(htmlFiles);
// ---

/**
 * The line `module.exports = (eleventyConfig, dir) => {` is exporting a function as the module's public interface. This
 * function takes two parameters: `eleventyConfig` and `dir`. The `eleventyConfig` parameter is an object that represents
 * the Eleventy configuration, and the `dir` parameter is the directory path.
 *
 * To run from .eleventy.js at build / post-build
 */
module.exports = async function (_eleventyConfig, dir) {
  if (!GITHUB_TOKEN) return console.error('No Github token set');
  const htmlFiles = findFilesByExtension(dir.output, 'html');
  checkReviewDateForHtml(htmlFiles);
};
