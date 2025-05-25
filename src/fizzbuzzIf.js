function fizzbuzzIf(num) {
    if (typeof num !== 'number') {
        return 'Input must be a number';
    }
    
    if (num % 3 === 0 && num % 5 === 0) {
        return 'FizzBuzz';
    } else if (num % 3 === 0) {
        return 'Fizz';
    } else if (num % 5 === 0) {
        return 'Buzz';
    } else {
        return num;
    }
}

module.exports = fizzbuzzIf;