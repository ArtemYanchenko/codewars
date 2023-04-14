// function nbYear(p0, percent, aug, p) {
//     let newP = p;
//     let newP0 = p0
//     for (let i = 0; i <= 1; i++) {
//         newP0 = newP0 + (newP0 * (5 / 100)) + 100;
//         if(newP0 >= newP){
//             break
//         }
//         console.log(newP0)
//     }
//
// }
//


function nbYear(p0, percent, aug, p) {
    let newP0 = p0;
    let countYear = 1;
    do {
        newP0 = newP0 * percent / 100 + aug + newP0;
        Math.floor(newP0)
        ++countYear;
        console.log(newP0)
    }  while (p >= newP0)
    return (countYear-1)
}


console.log(nbYear(1500, 5, 100, 5000))
console.log(nbYear(1500000, 2.5, 10000, 2000000))