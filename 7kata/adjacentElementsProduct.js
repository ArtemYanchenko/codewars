function adjacentElementsProduct(array) {
    let newArr = [];
    for (let i = 0; i < array.length-1; i++) {
        newArr.push(array[i]*array[i+1])
    }
    return newArr.sort((a,b)=>b-a)[0]
}


console.log(adjacentElementsProduct([1, 2, 3])) // -> 6

