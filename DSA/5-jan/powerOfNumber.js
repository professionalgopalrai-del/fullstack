function power(x, y) {
    let result = x;

    for(let i=1; i<y; i++)
        result *= x;
    return result;
}

console.log(power(2,3));
console.log(power(2,5));