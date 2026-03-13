function getDivisor(num) {
    let result = [];

    for(let i=1; i*i<=num; i++) {
        if(num % i == 0)
            result.push(i);
            result.push(num/i != i);
        }
        return result;
    }

    let divisibles = getDivisor(20);
    console.log(divisibles);

