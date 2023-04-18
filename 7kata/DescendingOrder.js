function descendingOrder(n) {
    return +(JSON.stringify(n).split('').sort((a,b)=>b-a).join(''))
}

console.log(descendingOrder(123456789))