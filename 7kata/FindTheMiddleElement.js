function gimme (triplet) {
    const newArr = [...triplet]
    return triplet.indexOf(newArr.sort((a,b)=>a-b)[1])
}


console.log(gimme([-5,-10,-14])) //1
console.log(gimme([5, 10, 14])) //1