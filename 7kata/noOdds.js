function noOdds( values ){
    // Return all non-odd values
    return values.filter(el=>el%2===0)
}

console.log(noOdds([0,1,2,3,4,5,6]))


//( noOdds( [0,1,2,3] ), [0,2] )