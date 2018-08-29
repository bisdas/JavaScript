const {
    sum
} = require('./sum')

//exports={}
//return exports
exports.add = function (a, b) {
    return sum(a, b);
}
exports.substract = function (a, b) {
    return a - b;
}
exports.multiple = function (a, b) {
    return a * b;
}