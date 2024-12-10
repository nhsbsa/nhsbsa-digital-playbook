let convert = require('color-convert');

function hexToRgb(hex) {
  return convert.hex.rgb(hex);
}
function hexToCmyk(hex) {
  return convert.hex.cmyk(hex);
}
function stringify(values) {
  return values ? values.join(',') : values;
}
let convertColor = (value, format) => {
  if (value) {
    if ('CMYK' === format) {
      return stringify(hexToCmyk(value));
    }
    if ('RGB' === format) {
      return stringify(hexToRgb(value));
    }
  }
  return value;
};

module.exports = convertColor;
