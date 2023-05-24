function findLongest(array){
        return +array.map(el=>el.toString()).sort((a,b)=>b.length-a.length)[0]
}

console.log(findLongest([1, 10, 100]))

// Test.assertEquals(findLongest([1, 10, 100]) => 100
// Test.assertEquals(findLongest([9000, 8, 800]) => 9000
// Test.assertEquals(findLongest([8, 900, 500]) => 900