/**
 * Sort value by property in named 'order' key.
 * Return 'data.order.{key}' if exists.
 * Defaults to 'data.order'.
 *
 * @param {Array} array Array to sort
 * @param {String} order order property to sort by
 * @return {Array} Sorted array
 *
 */
 module.exports = function (values, order) {
    let vals = [...values];     // this *seems* to prevent collection mutation...
    function sortValue(data) {
        let value = data["order"];
        if (order && value) {
            value = value[order] || value;
        }
        return value;
    }
    return vals.sort((a, b) => Math.sign(sortValue(a.data) - sortValue(b.data)));
}


