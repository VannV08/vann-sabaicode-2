// Exercise 3

const calculateAverage = (numbers) => {
    if (numbers.length === 0) {
        return "Array is empty. Cannot calculate average.";
    }

    const sum = numbers.reduce((acc, num) => acc + num, 0);
    const average = sum / numbers.length;
    const roundedAverage = Math.floor(average); // Remove decimal points

    return roundedAverage;
};

const myNumbers = calculateAverage([10, 20, 50, 40, 30]);
console.log(myNumbers);