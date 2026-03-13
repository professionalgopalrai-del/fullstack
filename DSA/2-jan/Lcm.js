// function lcm(a, b) {
//     return (a * b) / (a, b);
// }

// console.log(lcm(4, 6));  // 12
// console.log(lcm(10, 15)); // 30


function lcm(a, b) {
    let max = Math.max(a, b);

    while (true) {
        if (max % a === 0 && max % b === 0) {
            return max;
        }
        max++;
    }
}

console.log(lcm(4, 6)); // 12
