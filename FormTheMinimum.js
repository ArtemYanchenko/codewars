function minValue(values) {
    const set = new Set(values.sort((a, b) => a - b))
    let newArr = [];
    set.forEach(el => newArr.push(el))
    return +newArr.join('')
}


console.log(minValue([6, 7, 8, 7, 6, 6]))


// ([6, 7, 8, 7, 6, 6]), 678);