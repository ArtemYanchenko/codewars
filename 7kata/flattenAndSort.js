function flattenAndSort(array) {
    const resArray = [];
    array.forEach(el=>resArray.push(...el))
    return resArray.sort((a,b)=>a-b)
}


console.log(flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]]))