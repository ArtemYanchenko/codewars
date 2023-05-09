function rowWeights(array){
    let oddArr = array.filter((el,index)=>index%2===0).reduce((el,acc)=>acc+el,0)
    let neOddArr = array.filter((el,index)=>index%2!==0).reduce((el,acc)=>acc+el,0)
    return [oddArr,neOddArr]
}

console.log(rowWeights([50,60,70,80])) // [120,140]

// assert.deepEqual(rowWeights([80]), [80,0]);
// assert.deepEqual(rowWeights([100,50]), [100,50]);
// assert.deepEqual(rowWeights([50,60,70,80]), [120,140]);
// assert.deepEqual(rowWeights([13,27,49]), [62,27]);
// assert.deepEqual(rowWeights([70,58,75,34,91]), [236,92]);
// assert.deepEqual(rowWeights([29,83,67,53,19,28,96]), [211,164]);
// assert.deepEqual(rowWeights([0]), [0,0]);
// assert.deepEqual(rowWeights([100,51,50,100]), [150,151]);
// assert.deepEqual(rowWeights([39,84,74,18,59,72,35,61]), [207,235]);
