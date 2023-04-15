const binaryArrayToNumber = arr => {
    let newSumm = 0;
    for (let i=0;i<arr.length;i++) {
        newSumm += arr[arr.length-i-1]*2**i;
    }
    return newSumm
};

console.log(binaryArrayToNumber([1,1,1,1])) // 15