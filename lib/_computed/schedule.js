const { DateTime } = require("luxon");
const today = DateTime.local();
/*
    release: 2023-04-18
    adopt: 2023-10-24
    decommission: 2026-04-30
*/
const phases = {
  PENDING: "pending",
  ASSESS: "assess",
  ADOPT: "adopt",
  DEPRECATE: "deprecate",
  DECOMMISSION: "decommission",
};

const getReleaseAdoptionSchedule = (data) => {
  const releaseAdoptionSchedule = data.releaseAdoptionSchedule ?? {};
  for (const tech in releaseAdoptionSchedule) {
    const techSchedule = releaseAdoptionSchedule[tech];
    let phase = phases.PENDING,
      adopted = false;
    for (const item of techSchedule) {
      if (phase == phases.PENDING && item.release && item.release <= today) {
        phase = phases.ASSESS;
      }
      if (phase == phases.ASSESS && item.adopt && item.adopt <= today) {
        phase = phases.ADOPT;
      }
      if (phase == phases.ADOPT) {
        if (adopted) {
          phase = phases.DEPRECATE;
        } else {
          adopted = true;
        }
      }
      if (
        phase == phases.DEPRECATE &&
        item.decommission &&
        item.decommission <= today
      ) {
        phase = phases.DECOMMISSION;
      }
      item.phase = phase;
    }
  }
  return releaseAdoptionSchedule;
};

module.exports = getReleaseAdoptionSchedule;
