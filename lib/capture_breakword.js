module.exports = function (str) {
  // TODO
  return (str.match(/\bx=(\d+)\b/) || [])[1];
}