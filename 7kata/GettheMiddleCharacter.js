function getMiddle(s) {
    if (s.length % 2 === 0) {
        return (s[Math.floor(s.length/2)-1] + s[Math.ceil(s.length/2)])
    } else {
        return s[Math.floor(s.length/2)]
    }
}

console.log(getMiddle('test'))