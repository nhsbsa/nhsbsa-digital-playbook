const styleLookup = {
  DRAFT: 'nhsuk-tag--grey',
  REVIEW: 'nhsuk-tag--yellow',
};

const addStatusBadges = (data) => {
  const dataBadges = data.badges || [];
  const dataStatus = data.review?.requires_review ? 'REVIEW' : data.status;
  if (dataStatus && dataStatus != 'FINAL') {
    dataBadges.push({
      text: dataStatus,
      style: styleLookup[dataStatus],
    });
  }
  return dataBadges;
};

export default addStatusBadges;
