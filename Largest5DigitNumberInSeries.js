function solution(digits){
    let newArr = digits.split('').map(el=>+el)
    // for (let i = 0; i < newArr.length; i++) {
    //     if(newArr[i]&& newArr[i+1]&&newArr[i+2]&&newArr[i+3]&&newArr[i+4] > newArr[i+1]&& newArr[i+2]&&newArr[i+3]&&newArr[i+4]&&newArr[i+5]){
    //         return (newArr[i+1]&& newArr[i+2]&&newArr[i+3]&&newArr[i+4]&&newArr[i+5])
    //     }
    // }
    return newArr;
}


console.log(solution('1234567898765')) //98765