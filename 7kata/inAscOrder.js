function inAscOrder(arr) {
    let res = [];
    for (let i = 0; i < arr.length-1; i++) {
        arr[i] <= arr[i + 1] ? res.push(true): res.push(false)
    }
   return res.every(el=>el === true)
}

console.log(inAscOrder([1,2,3,6,5]))