function calculateMedian(numbers) {
    // Ensure input is an array
    if (!Array.isArray(numbers)) {
        throw new Error('Input must be an array of numbers.');
    }

    // Sort the array in ascending order
    const sortedNumbers = numbers.slice().sort((a, b) => a - b);

    const middleIndex = Math.floor(sortedNumbers.length / 2);

    if (sortedNumbers.length % 2 === 0) {
        // If the array has an even number of elements, average the middle two values
        const median = (sortedNumbers[middleIndex - 1] + sortedNumbers[middleIndex]) / 2;
        return median;
    } else {
        // If the array has an odd number of elements, return the middle value
        return sortedNumbers[middleIndex];
    }
}

// Example usage:
const inputArray = [5, 6, 9, 1, 7, 8];
const medianValue = calculateMedian(inputArray);
console.log('Median value:', medianValue);
