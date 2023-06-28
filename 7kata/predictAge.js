function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
   const newArr = [age1,age2,age3,age4,age5,age6,age7,age8].map(el=>Math.pow(el,2))
    let res = newArr.reduce((el, acc) => el + acc, 0)
    return Math.floor(Math.sqrt(res)/2)
}

console.log(predictAge(65,60,75,55,60,63,64,45))