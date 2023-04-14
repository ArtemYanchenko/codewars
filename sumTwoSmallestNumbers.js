function sumTwoSmallestNumbers(numbers) {
    const newArr = numbers.sort((a,b)=>a-b)
    return newArr[0] + newArr[1]
}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]))