function minSum(arr) {
    let sortedArray = arr.sort((a,b)=>b-a);
    let resultArray = [];
    for (let i = 0; i < sortedArray.length; i = i + 2) {
       let res = sortedArray[i]*sortedArray[sortedArray.length - i - 1];
       resultArray.push(res)
    }
    return resultArray.reduce((el,acc)=>el+acc,0)
}


console.log(minSum([5,4,2,3]))

//minSum([5,4,2,3]) ==> return (22)
// minSum([12,6,10,26,3,24]) ==> return (342)