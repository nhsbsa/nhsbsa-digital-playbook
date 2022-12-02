const checkDataStatus = require('../lib/_computed/badges');

describe('badge status unit tests', () => {
    // Mock data
    const data = {
        status: "DRAFT",
        review: {requires_review: false}
    };

    it('should return grey and DRAFT when data has DRAFT status and no review', () => {
        expect(checkDataStatus(data)).toEqual([{
            text: "DRAFT",
            style: "nhsuk-tag--grey"
        }]);
    });
    
    it('should return yellow and REVIEW when data has review and DRAFT status', () => {
        data.review.requires_review = true;
        expect(checkDataStatus(data)).toEqual([{
            text: "REVIEW",
            style: "nhsuk-tag--yellow"
        }]);
    });

    it('should return yellow and REVIEW when data has review and FINAL status', () => {
        data.status = "FINAL";
        expect(checkDataStatus(data)).toEqual([{
            text: "REVIEW",
            style: "nhsuk-tag--yellow"
        }]);
    });

    it('will return null if FINAL status and no review', () => {
        data.status = "FINAL";
        data.review.requires_review = false;
        expect(checkDataStatus(data)).toEqual(null);
    });
});

