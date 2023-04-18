// return the two oldest/oldest ages within the array of ages passed in.
function twoOldestAges(ages) {
    const newArr = ages.sort((a,b)=>a-b)
    return [newArr[newArr.length-2],newArr[newArr.length-1]]
}


console.log(twoOldestAges([1, 5, 87, 45, 8, 8])) // [45,87]