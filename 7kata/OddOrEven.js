function oddOrEven(array) {
    if(array.length === 0 || array[0] === 0 && array.length === 1) { return 'even'}
    if(array.reduce((acc,el)=>acc+el)%2===0){
        return 'even'
    } else {
        return 'odd'
    }
}


console.log(oddOrEven([0, 1, 5])) //'even