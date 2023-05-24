function reverseNumber(n) {
    const exspr = +n.toString().split('').reverse().filter(el=>el!=='-').join('')
    if(n<0){
        return Number(`-${exspr}`)
    }
    return exspr
}


console.log(reverseNumber(-123))

// 123 => 321
// -456 => -654