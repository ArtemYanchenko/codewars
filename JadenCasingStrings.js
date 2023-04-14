String.prototype.toJadenCase = function (str) {
    str = this.split(' ').map(el=>el[0].toUpperCase() + el.substring(1)).join(' ')
    return str
};

console.log(String.prototype.toJadenCase("How can mirrors be real if our eyes aren't real"))