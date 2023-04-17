function solve(s) {
    const lc = s.split('').filter(el => el === el.toLowerCase());
    const uc = s.split('').filter(el => el === el.toUpperCase());
    if (lc.length < uc.length) {
        return s.toUpperCase()
    } else {
        return s.toLowerCase();
    }
}


console.log(solve('coDe'))


// Test.assertEquals(solve("code"),"code");
// Test.assertEquals(solve("CODe"),"CODE");