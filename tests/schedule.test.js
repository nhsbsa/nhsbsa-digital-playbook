const getReleaseAdoptionSchedule = require('../lib/_computed/schedule');
const { DateTime } = require('luxon');

describe('releaseAdoptionSchedule empty dataset tests', () => {
    let data = {
        title: "Release adoption strategy"
    };
    it('should return empty releaseAdoptionSchedule if data has no releaseAdoptionSchedule', () => {
        expect(getReleaseAdoptionSchedule(data)).toEqual({});
    });

    data = {
        releaseAdoptionSchedule: {}
    };
    it('should return empty releaseAdoptionSchedule if data has empty releaseAdoptionSchedule', () => {
        expect(getReleaseAdoptionSchedule(data)).toEqual({});
    });
});

describe('multiple technologies with single versions releaseAdoptionSchedule', () => {
    const data = {
        releaseAdoptionSchedule: {
            "node.js": [{
                release: "",
                adopt: "",
                decommission: ""
            }],
            "java": [{
                release: "",
                adopt: "",
                decommission: ""
            }]
        }
    };

    // releaseAdoptionSchedule array of data returned 
    const defaultExpectedResult = {
        "node.js": [{
            release: "",
            adopt: "",
            decommission: "",
            phase: "pending"
        }],
        "java": [{
            release: "",
            adopt: "",
            decommission: "",
            phase: "pending"
        }]
    };

    it('should return pending as default phase', () => {
        const result = getReleaseAdoptionSchedule(data);
        expect(result).toEqual(defaultExpectedResult);
    });

    const releaseDate = DateTime.local().startOf('day').minus({ years: 1 });
    it('should return assess phase when java release date is in the past', () => {
        data.releaseAdoptionSchedule.java = [{
            release: releaseDate
        }];
        
        const result = getReleaseAdoptionSchedule(data);
        expect(result.java).toEqual([{
            release: releaseDate,
            phase: "assess"
        }]);
    });

    const adoptDate = DateTime.local().startOf('day').minus({ months: 6 });
    it('should return adopt as phase when java adopt date is in the past', () => {
        data.releaseAdoptionSchedule.java = [{
            release: releaseDate,
            adopt: adoptDate
        }];
        
        const result = getReleaseAdoptionSchedule(data);

        expect(result.java).toEqual([{
            release: releaseDate,
            adopt: adoptDate,
            phase: "adopt"
        }]);
    });

});

describe('multiple versions test: same technology releaseAdoptionSchedule', () => {
    // fixture for multiple versions of the same tech
    const today = DateTime.local().startOf('day');
    const initialReleaseDate = today.minus({ years: 10 });
    // fixture for testing purposes only
    const data = {
        releaseAdoptionSchedule: {
            "java": [{
                version: 21,
                release: today,
                adopt: today.plus({ months: 6 })
            },
            {
                version: 17.5,
                release: today.minus({ years: 2 }),
                adopt: today,
                decommission: today.plus({ years: 2 })
            },
            {
                version: 17,
                release: today.minus({ years: 5 }),
                adopt: today.minus({ years: 3 }),
                decommission: today.plus({ years: 2 })
            },
            {
                version: 8,
                release: initialReleaseDate,
                adopt: initialReleaseDate.plus({ years: 5 }),
                decommission: initialReleaseDate.plus({ years: 7 })
            }]
        }
    };

    const expectedResult = [{
        version: 21,
        release: today,
        adopt: today.plus({ months: 6 }),
        phase: "assess"
    },
    {
        version: 17.5,
        release: today.minus({ years: 2 }),
        adopt: today,
        decommission: today.plus({ years: 2 }),
        phase: "adopt"
    },
    {
        version: 17,
        release: today.minus({ years: 5 }),
        adopt: today.minus({ years: 3 }),
        decommission: today.plus({ years: 2 }),
        phase: "deprecate"
    },
    {
        version: 8,
        release: initialReleaseDate,
        adopt: initialReleaseDate.plus({ years: 5 }),
        decommission: initialReleaseDate.plus({ years: 7 }),
        phase: "decommission"
    }];

    it('should return correct phase cycles for multiple version fixture data', () => {
        const result = getReleaseAdoptionSchedule(data);
        expect(result.java).toEqual(expectedResult);
    });
});