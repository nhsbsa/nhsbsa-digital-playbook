const dateConverter = require('../_javascripts/dateConverter');
const { DateTime } = require('luxon');

const defaultReviewDuration = { years: 1 };
const reviewDurationLookup = {
  ANNUAL: defaultReviewDuration,
};

const checkForReview = (data) => {
  let reviewData = {};
  if (data.review) {
    let lastDate =
      data.review.last_reviewed_date || data.issuesheet.approval_date;
    if (lastDate) {
      lastDate = dateConverter(lastDate);
      const cycle = data.review.review_cycle;
      if (
        typeof cycle === 'string' &&
        !Object.prototype.hasOwnProperty.call(reviewDurationLookup, cycle)
      ) {
        throw new Error(
          'Unknown review cycle: ' +
            JSON.stringify(cycle) +
            ' on page: ' +
            data.title
        );
      }
      const duration =
        reviewDurationLookup[cycle] || cycle || defaultReviewDuration;
      const nextDate = lastDate.plus(duration);
      const requiresReview = nextDate <= DateTime.local();
      console.log(data.title + ' requires review = ' + requiresReview);
      reviewData = {
        last_reviewed_date: lastDate,
        next_review_date: nextDate,
        requires_review: requiresReview,
      };
    }
  }
  return reviewData;
};

module.exports = checkForReview;
