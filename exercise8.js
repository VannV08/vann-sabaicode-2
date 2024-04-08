function sortNumbersAscending(numbers) {
    // Ensure input is an array
    if (!Array.isArray(numbers)) {
        throw new Error('Input must be an array of numbers.');
    }

    // Sort the array in ascending order
    const sortedNumbers = numbers.slice().sort((a, b) => a - b);

    return sortedNumbers;
}

// Example usage:
const unsortedArray = [5, 2, 9, 1, 7];
const sortedArray = sortNumbersAscending(unsortedArray);
console.log('Sorted array:', sortedArray);
