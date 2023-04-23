function sumFactorial(arr){
    let first = 0
    let second = 0
    for (let i = 0; i <= arr[0]; i++) {
        first *=i
    }
    for (let i = 0; i <= arr[1]; i++) {
        second *=i
    }
    return first+second
}


console.log(sumFactorial([4,6]))
// ([4,6]), 744);