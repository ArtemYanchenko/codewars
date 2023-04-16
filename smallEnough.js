function smallEnough(a, limit) {
    return (a.filter(el => el <= limit).length === a.length)
}


console.log(smallEnough([66, 101], 102))
console.log(smallEnough([78, 117, 110, 99, 104, 117, 107, 115], 100))
console.log(smallEnough([9,0,9,1,7,8,7,9,5,4,1,6,1,8,4,6,9], 9))
