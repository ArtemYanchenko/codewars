function longest(s1, s2) {
    return Array.from(new Set(s1.concat(s2).split('').sort())).join('')
}

console.log(longest("aretheyhere", "yestheyarehere")) // "aehrsty"