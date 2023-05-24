function sumCubes(n){
    let newN = 0;
    for (let i = 1; i <= n; i++) {
        newN += i**3
    }
    return newN
}

console.log(sumCubes(3))


// 3 => 1**3+2**3+3**3 = 36