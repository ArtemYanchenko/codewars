function dontGiveMeFive(start, end) {
    let newArr = []
    for (let i = start; i <= end; i++) {
        newArr.push(i)
    }
    return newArr.map(el=>el.toString()).filter(el=>!el.includes('5')).length
}

console.log(dontGiveMeFive(4,17))