function isSortedAndHow(array) {
    for (let i = 0; i < array.length-1; i++) {
        if(array[i]>=array[i+1] && array[i+1]<=array[i+2]){
            return  'no'
        }
        if (array[i]<array[i+1]){
            return 'yes, ascending'
        } else if (array[i]>array[i+1]){
            return 'yes, descending'
        }
    }
}

console.log(isSortedAndHow([4, 2, 30]))


// describe("isSortedAndHow", function() {
//
//     it("[1, 2]", function() {
//         Test.assertEquals(isSortedAndHow([1, 2]), 'yes, ascending');
//     });
//
//     it("[15, 7, 3, -8]", function() {
//         Test.assertEquals(isSortedAndHow([15, 7, 3, -8]), 'yes, descending');
//     });
//
//     it("[4, 2, 30]", function() {
//         Test.assertEquals(isSortedAndHow([4, 2, 30]), 'no');
//     });