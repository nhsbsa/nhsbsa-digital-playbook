const addStatusBadges = require('../../_computed/badges');

describe('badge status', () => {
  // default fixture
  const data = {
    status: 'DRAFT',
    review: { requires_review: false },
  };

  it('should return grey and DRAFT when data has DRAFT status and no review', () => {
    expect(addStatusBadges(data)).toEqual([
      {
        text: 'DRAFT',
        style: 'nhsuk-tag--grey',
      },
    ]);
  });

  it('should return yellow and REVIEW when data has review and DRAFT status', () => {
    data.review.requires_review = true;
    expect(addStatusBadges(data)).toEqual([
      {
        text: 'REVIEW',
        style: 'nhsuk-tag--yellow',
      },
    ]);
  });

  it('should return yellow and REVIEW when data has review and FINAL status', () => {
    data.status = 'FINAL';
    expect(addStatusBadges(data)).toEqual([
      {
        text: 'REVIEW',
        style: 'nhsuk-tag--yellow',
      },
    ]);
  });

  it('will return empty if FINAL status and no review', () => {
    data.status = 'FINAL';
    data.review.requires_review = false;
    expect(addStatusBadges(data)).toEqual([]);
  });

  it('will retain user-defined badges', () => {
    const userBadges = [{ text: 'my-badge' }];
    data.badges = userBadges;
    expect(addStatusBadges(data)).toEqual(userBadges);
  });
});
