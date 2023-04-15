function minMax(arr){
    let newArr = arr.sort((a,b)=>a-b)
    return [newArr[0],newArr[newArr.length-1]]; // fix me!
}


console.log(minMax([4,3,2,6,3,23,643,2,2,2,3,4,5,92723,4]))