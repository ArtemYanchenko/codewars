function lastDigit(n, d) {
    const nums = String(n).split('').map(Number);
    const len = nums.length;
    let index = 0;
    return nums.filter(el => index++ >= len - d);
}

console.log(lastDigit(10,3))