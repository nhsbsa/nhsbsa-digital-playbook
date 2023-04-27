const getReleaseAdoptionSchedule = require('../../_computed/schedule');
const { DateTime } = require('luxon');

describe('releaseAdoptionSchedule empty dataset tests', () => {
  it('should return empty releaseAdoptionSchedule if data has no releaseAdoptionSchedule', () => {
    const data = { title: 'Release adoption strategy' };
    expect(getReleaseAdoptionSchedule(data)).toEqual({});
  });

  it('should return empty releaseAdoptionSchedule if data has empty releaseAdoptionSchedule', () => {
    const data = { releaseAdoptionSchedule: {} };
    expect(getReleaseAdoptionSchedule(data)).toEqual({});
  });
});

describe('technology phase tests - releaseAdoptionSchedule', () => {
  it('should return pending as default phase', () => {
    const data = {
      releaseAdoptionSchedule: {
        java: [
          {
            release: '',
            adopt: '',
            decommission: '',
          },
        ],
      },
    };
    const result = getReleaseAdoptionSchedule(data);
    expect(result.java).toStrictEqual([
      {
        adopt: '',
        decommission: '',
        phase: 'pending',
        release: '',
      },
    ]);
  });

  it('should return assess phase when java release date is in the past', () => {
    const releaseDate = DateTime.local().startOf('day').minus({ years: 1 });
    const data = {
      releaseAdoptionSchedule: {
        java: [{ release: releaseDate }],
      },
    };

    const result = getReleaseAdoptionSchedule(data);
    expect(result.java).toStrictEqual([
      {
        release: releaseDate,
        phase: 'assess',
      },
    ]);
  });

  it('should return adopt as phase when java adopt date today', () => {
    const today = DateTime.local().startOf('day');
    const releaseDate = today.minus({ months: 6 });
    const data = {
      releaseAdoptionSchedule: {
        java: [
          {
            release: releaseDate,
            adopt: today,
          },
        ],
      },
    };

    const result = getReleaseAdoptionSchedule(data);
    expect(result.java).toStrictEqual([
      {
        release: releaseDate,
        adopt: today,
        phase: 'adopt',
      },
    ]);
  });

  it('should return assess as phase when technology adopt date is in the future', () => {
    const today = DateTime.local().startOf('day');
    const releaseDate = today.minus({ months: 6 });
    const data = {
      releaseAdoptionSchedule: {
        java: [
          {
            release: releaseDate,
            adopt: today.plus({ days: 1 }),
          },
        ],
      },
    };

    const result = getReleaseAdoptionSchedule(data);
    expect(result.java).toStrictEqual([
      {
        release: releaseDate,
        adopt: today.plus({ days: 1 }),
        phase: 'assess',
      },
    ]);
  });
});

it('should be able to handle multiple technologies - settig default phase to pending', () => {
  const data = {
    releaseAdoptionSchedule: {
      java: [{ release: '' }],
      node: [{ release: '' }],
      patlang: [{ release: '' }],
    },
  };
  const result = getReleaseAdoptionSchedule(data);
  expect(result).toStrictEqual({
    java: [{ phase: 'pending', release: '' }],
    node: [{ phase: 'pending', release: '' }],
    patlang: [{ phase: 'pending', release: '' }],
  });
});

it('should be able to handle multiple technologies - with different values', () => {
  const nodeReleaseDate = DateTime.local().startOf('day').minus({ years: 1 });
  const patlangAdoptDate = DateTime.local().startOf('day').minus({ years: 1 });
  const data = {
    releaseAdoptionSchedule: {
      java: [{ release: '' }],
      node: [{ release: nodeReleaseDate }],
      patlang: [{ release: '', adopt: patlangAdoptDate }],
    },
  };
  const result = getReleaseAdoptionSchedule(data);
  expect(result).toStrictEqual({
    java: [{ phase: 'pending', release: '' }],
    node: [{ phase: 'assess', release: nodeReleaseDate }],
    patlang: [{ phase: 'pending', release: '', adopt: patlangAdoptDate }],
  });
});

describe('multiple versions test: same technology - releaseAdoptionSchedule', () => {
  it('should return correct phase cycles for multiple version fixture data', () => {
    // fixture for multiple versions of the same tech
    const today = DateTime.local().startOf('day');
    const initialReleaseDate = today.minus({ years: 10 });
    // fixture for testing purposes only
    const data = {
      releaseAdoptionSchedule: {
        java: [
          {
            version: 21,
            release: today,
            adopt: today.plus({ months: 6 }),
          },
          {
            version: 17.5,
            release: today.minus({ years: 2 }),
            adopt: today,
            decommission: today.plus({ years: 2 }),
          },
          {
            version: 17,
            release: today.minus({ years: 5 }),
            adopt: today.minus({ years: 3 }),
            decommission: today.plus({ years: 2 }),
          },
          {
            version: 8,
            release: initialReleaseDate,
            adopt: initialReleaseDate.plus({ years: 5 }),
            decommission: initialReleaseDate.plus({ years: 7 }),
          },
        ],
      },
    };
    const expectedResult = [
      {
        version: 21,
        release: today,
        adopt: today.plus({ months: 6 }),
        phase: 'assess',
      },
      {
        version: 17.5,
        release: today.minus({ years: 2 }),
        adopt: today,
        decommission: today.plus({ years: 2 }),
        phase: 'adopt',
      },
      {
        version: 17,
        release: today.minus({ years: 5 }),
        adopt: today.minus({ years: 3 }),
        decommission: today.plus({ years: 2 }),
        phase: 'deprecate',
      },
      {
        version: 8,
        release: initialReleaseDate,
        adopt: initialReleaseDate.plus({ years: 5 }),
        decommission: initialReleaseDate.plus({ years: 7 }),
        phase: 'decommission',
      },
    ];
    const result = getReleaseAdoptionSchedule(data);
    expect(result.java).toMatchObject({ ...expectedResult });
  });
});
