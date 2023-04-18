function findNextSquare(sq) {
    const value = Math.sqrt(sq)
   if(value%1===0){
       return Math.pow(value+1,2)
   }
    return -1;
}

console.log(findNextSquare(121))