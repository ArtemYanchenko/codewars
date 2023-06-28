function evenNumbers(array, number) {
    let filteredArray = array.filter(el=>el%2===0)
    return filteredArray.slice(-(number))
}


console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9],3))


// [1, 2, 3, 4, 5, 6, 7, 8, 9], 3), [4, 6, 8]