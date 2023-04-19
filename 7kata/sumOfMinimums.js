function sumOfMinimums(arr) {
    return arr.reduce((acc, el) => acc + el.sort((a, b) => a - b)[0], 0)
}


console.log(sumOfMinimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]))


// [[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]), 9