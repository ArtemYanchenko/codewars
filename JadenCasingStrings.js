String.prototype.toJadenCase = function (str) {
    return this.split(' ').map(el=>el[0].toUpperCase() + el.substring(1)).join(' ')
};

console.log(String.prototype.toJadenCase("How can mirrors be real if our eyes aren't real"))