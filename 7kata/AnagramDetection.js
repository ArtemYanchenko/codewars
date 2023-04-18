var isAnagram = function(test, original) {
    return test.toLowerCase().split('').sort().join('') === original.toLowerCase().split('').sort().join('')
};


console.log(isAnagram('foefet', 'toffewe' ))



// "foefet" is an anagram of "toffee"
//
// "Buckethead" is an anagram of "DeathCubeK"