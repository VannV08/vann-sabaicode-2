function countVowels(inputString) {
    const vowels = "aeiouAEIOU"; // List of vowels
    let vowelCount = 0;

    for (const char of inputString) {
        if (vowels.includes(char)) {
            vowelCount++;
        }
    }

    return vowelCount;
}

// Example usage:
const myString = "Hi, My name is Vann.";
const result = countVowels(myString);
console.log(`Number of vowels: ${result}`);
