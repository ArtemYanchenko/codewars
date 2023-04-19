function chain(input, fs) {
// implement the "chain" function
    return fs.reduce((input,el)=>{return el(input) },input);
}


function add(x) {
    return x + 10;
}

function mult(x) {
    return x * 30;
}

console.log(chain(2,[add,mult]))

// chain(2, [add, mult]) // 360