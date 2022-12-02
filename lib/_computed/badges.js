const styleLookup = {
    DRAFT: "nhsuk-tag--grey",
    REVIEW: "nhsuk-tag--yellow"
};  

function requiresReview(data) {
    if (data.review && data.review.requires_review) {
        return "REVIEW";
    }
    if (data.status != "FINAL") {
        return data.status;
    }
};

const checkDataStatus = data => {
    if (versionStatus = requiresReview(data)) {
        return [{
            text: versionStatus,
            style: styleLookup[versionStatus]
        }];
    }
    return null;
};

module.exports = checkDataStatus;