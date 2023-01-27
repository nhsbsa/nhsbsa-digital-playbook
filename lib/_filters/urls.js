const baseUrl = process.env.BASE_URL || "http://localhost:8080";

module.exports = (url) => {
    return new URL(url, baseUrl).href;
};
