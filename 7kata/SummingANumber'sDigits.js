function sumDigits(number) {
    const arr = Math.abs(number).toString().split('');
    return arr.reduce((acc,el)=>acc+(+el),0)
}


console.log(sumDigits(-322342423))


// (99) => 18