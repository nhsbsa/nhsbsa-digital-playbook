const baseUrl = process.env.BASE_URL || 'http://localhost:8080';

export default (url) => {
  return new URL(url, baseUrl).href;
};
