function sumFactorial(num) {

    // for (let i = 1; i <= num[0]; i++) {
    //     first *= i
    // }
    // for (let i = 1; i <= num[1]; i++) {
    //     second *= i
    // }

    num.map(n=>function factorial(n) {
        return (n != 1) ? n * factorial(n - 1) : 1;
    })
}


console.log(sumFactorial([4, 6]))
// ([4,6]), 744);