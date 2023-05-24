var greet = function(name) {
    let newName = name.toLowerCase()
    return `Hello ${newName[0].toUpperCase() + newName.slice(1)}`
};


console.log(greet("riley"))

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"