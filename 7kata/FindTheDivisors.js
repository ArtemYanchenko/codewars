function divisors(integer) {
    let newArr = []
    for (let i = 2; i < integer; i++) {
        if (integer % i === 0) {
            newArr.push(i)
        }
    }
    if (newArr.length === 0) {
        return `${integer} is prime`
    }
    return newArr;
};


console.log(divisors(15))

// (divisors(15), [3, 5])