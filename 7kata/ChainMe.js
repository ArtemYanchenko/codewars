function chain(input, fs) {
// implement the "chain" function
    fs[0](fs[1](input))
}

console.log(chain(2,[add,mult]))

// chain(2, [add, mult]) // 360