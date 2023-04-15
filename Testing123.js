var number=function(array){
    return array.map((el,index)=>`${index+1}: ${el}`);
}


console.log(number(["a", "b", "c"]))


// number(["a", "b", "c"]), ["1: a", "2: b", "3: c"]