module.exports = function (str) {
  // TODO
  return (str.match(/x=(\d+)/) || [])[1];
}