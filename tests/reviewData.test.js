const checkForReview = require('../lib/_computed/reviewData');
const { DateTime } = require('luxon')

describe('reviewData empty dataset tests', () => {

    it('should return empty object if no data supplied', () => {
        expect(checkForReview()).toEqual({});
    });

    const data = {};

    it('should return empty object if empty data object supplied', () => {
        expect(checkForReview(data)).toEqual({});
    });
});

describe('reviewData functional dataset tests', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    const data = {
        title: "Dummy playbook page data",
        review: { last_reviewed_date: DateTime.local().toISODate(), review_cycle: "ANNUAL" },
        issuesheet: { approval_date: DateTime.local().minus({ months: 2 }).toISODate() }
    };

    it('should not require review if last review date is this year', () => {
        const result = checkForReview(data);
        const logMessage = "Dummy playbook page data requires review = false";

        expect(consoleSpy).toHaveBeenCalledWith(logMessage);
        expect(result).toEqual({
            last_reviewed_date: DateTime.local().startOf('day'),
            next_review_date: result.last_reviewed_date.plus({ year: 1 }),
            requires_review: false
        });
    });

    it('should require review if last review date over a year old', () => {
        const pastLastReviewDate = DateTime.local().minus({ year: 1 }).toISODate();
        data.review.last_reviewed_date = pastLastReviewDate;
        const result = checkForReview(data);
        const logMessage = "Dummy playbook page data requires review = true";

        expect(consoleSpy).toHaveBeenCalledWith(logMessage);
        expect(result).toEqual({
            last_reviewed_date: DateTime.local().startOf('day').minus({ year: 1 }),
            next_review_date: result.last_reviewed_date.plus({ year: 1 }),
            requires_review: true
        });
    });

    it('should not require review if issue sheet approval date is this year', () => {
        data.review.last_reviewed_date = undefined;
        const result = checkForReview(data);
        expect(result).toEqual({
            last_reviewed_date: DateTime.local().startOf('day').minus({ months: 2 }),
            next_review_date: result.last_reviewed_date.plus({ year: 1 }),
            requires_review: false
        });
    });

    it('should require review if issue sheet approval date is over a year old', () => {
        const pastIssueApprovalDate = DateTime.local().minus({ year: 1, month: 1 }).toISODate();
        data.issuesheet.approval_date = pastIssueApprovalDate;
        const result = checkForReview(data);
        expect(result).toEqual({
            last_reviewed_date: DateTime.local().startOf('day').minus({ year: 1, month: 1 }),
            next_review_date: result.last_reviewed_date.plus({ year: 1 }),
            requires_review: true
        });
    });

    it('should return empty object when no review date or issue sheet approval date', () => {
        data.review.last_reviewed_date = undefined;
        data.issuesheet.approval_date = undefined;
        const result = checkForReview(data);
        expect(result).toEqual({});
    });

});