function getDivisorsCnt(n) {
    let newArr = []
    for (let i = 0; i <= n; i++) {
        if (n % i === 0) {
            newArr.push(i)
        }
    }
    return newArr.length
}


console.log(getDivisorsCnt(10)) //4