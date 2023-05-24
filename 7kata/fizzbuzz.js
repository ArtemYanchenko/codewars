function fizzbuzz(n) {
    let newArr = [];
    for (let i = 1; i <= n; i++) {
        if ((i % 3 === 0) && (i % 5 === 0)) {
            newArr.push('FizzBuzz')
        } else if (i % 5 === 0) {
            newArr.push('Buzz')
        } else if (i % 3 === 0) {
            newArr.push('Fizz')
        } else {
            newArr.push(i)
        }

    }
    return newArr
}

console.log(fizzbuzz(10))

// If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead


// fizzbuzz(3) -->  [1, 2, "Fizz"]
