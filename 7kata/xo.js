function XO(str) {
    const p = /[^o,x]+/g
    const newStr = str.toLowerCase().replace(p, '');
    const arrO = newStr.split('').filter(el => el === 'o');
    const arrX = newStr.split('').filter(el => el === 'x');
    if (arrO.length === arrX.length) {
        return true
    } else {
        return false
    }
}

console.log(XO('xo'))
console.log(XO('xxOo'))
console.log(XO('xxxm'))
console.log(XO('Oo'))
console.log(XO('ooom'))

