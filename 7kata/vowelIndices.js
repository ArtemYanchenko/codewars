function vowelIndices(word) {
    let resArr = [];
    const vowelRegex = /[aeiouy]/i;
    let newArr = word.toLowerCase().split('');
    let a = newArr.map(el=> vowelRegex.test(el)).filter((el,i)=>el === true ? resArr.push(i+1) : el)
    return resArr
}

console.log(vowelIndices('orange'))
// assert.deepEqual(vowelIndices("orange"), [1,3,6]);