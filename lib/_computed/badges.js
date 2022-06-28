

"nhsuk-tag--grey"
const styleLookup = {
    DRAFT: "nhsuk-tag--grey",
    REVIEW: "nhsuk-tag--yellow"
}

module.exports = function(data) {
    result = []
    if (data.status) {
        let style = styleLookup[data.status];
        result.push({
            text: data.status,
            style: style
        })
    }
    return result
};
