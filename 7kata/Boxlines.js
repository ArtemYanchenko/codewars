function f(x,y,z){
    return x * (y + 1) * (z + 1) +
        y * (z + 1) * (x + 1) +
        z * (x + 1) * (y + 1);
}

console.log(f(2,1,1)) // 20