function factorial(n) {
    if (n < 0) {
        throw new Error('Input must be a non-negative number.');
    }

    if (n === 0 || n === 1) {
        return 1;
    }

    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }

    return result;
}

// Example usage:
const inputNumber = 5;
const result = factorial(inputNumber);
console.log(`Factorial of ${inputNumber} is ${result}`);
