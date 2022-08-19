var ensureString = function ensureString(string) {
    return string ? "".concat(string) : '';
  };

var ensureNumeric = function ensureNumeric(string) {
  return Number(ensureString(string).replace(/[^0-9.]/gi, ''));
};

var ensureArray = function ensureArray() {
  var array = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return !array ? [] : Array.isArray(array) ? array : [array];
};

var ensureObject = function ensureObject(object) {
  return object || {};
};

export {
    ensureString,
    ensureNumeric,
    ensureArray,
    ensureObject,
}