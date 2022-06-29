const { DateTime } = require('luxon')


"nhsuk-tag--grey"
const styleLookup = {
    DRAFT: "nhsuk-tag--grey",
    REVIEW: "nhsuk-tag--yellow"
}
module.exports = function(data) {

    function requiresReview(review, title) {
        if (review &&
            review.requires_review) {
                return true;
            }
    }

    var status;
    if (requiresReview(data.review, data.title)) {
        status = "REVIEW";
    } else if ("FINAL" != data.status) {
        status = data.status;
    }
    if (status) {
        return [{
            text: status,
            style: styleLookup[status]
        }]
    }
};
