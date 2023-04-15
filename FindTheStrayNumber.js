function stray(numbers) {
    let newArr = numbers.sort((a,b)=>a-b);
    if (newArr[0] !== newArr[1]) {
        return newArr[0]
    }
    return newArr[newArr.length-1]
}


console.log(stray([7,7,7,2,7,7])) //2
console.log(stray([1,2,1])) //2