function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    // return (enteredCode === correctCode && new Date(currentDate) < new Date(expirationDate))
    return (enteredCode === correctCode && (new Date(currentDate)).getTime() <= (new Date(expirationDate)).getTime())
// return (new Date(expirationDate)).getTime()
}


console.log(checkCoupon('123a','123','September 5, 2014','October 1, 2014'))



// assert.strictEqual(checkCoupon('123','123','September 5, 2014','October 1, 2014'), true);
// assert.strictEqual(checkCoupon('123a','123','September 5, 2014','October 1, 2014'), false);
// });