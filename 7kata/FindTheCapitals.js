var capitals = function (word) {
    let arr = [];
    word.split('').map((el,index)=>{
        if(el === el.toUpperCase())
        {arr.push(index)}
    })
    return arr
};


console.log(capitals('CodEWaRs'))


// ('CodEWaRs'), [0,3,4,6]