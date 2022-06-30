const dateConverter = require('../_javascripts/dateConverter')
const { DateTime } = require('luxon')

const reviewThreshold = DateTime.local()
const defaultReviewDuration = { years: 1}
const today = DateTime.local()
const reviewDurationLookup = {
    ANNUAL: defaultReviewDuration
}
module.exports = function(data) {
    if (data.review) {
        let lastDate = data.review.last_reviewed_date || data.issuesheet.approval_date
        if (lastDate) {
            lastDate = dateConverter(lastDate)
            let cycle = data.review.review_cycle
            let duration = reviewDurationLookup[cycle] || cycle || defaultReviewDuration;
            let nextDate = lastDate.plus(duration);
            let requiresReview = nextDate <= reviewThreshold
            console.log(data.title + " requires review = " + requiresReview);
            return {
                last_reviewed_date: lastDate,
                next_review_date: nextDate,
                requires_review: requiresReview
            }
        }
    }
};
