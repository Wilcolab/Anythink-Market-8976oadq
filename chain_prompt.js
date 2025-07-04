function toKebabCase(input) {
    if (typeof input !== 'string') {
        throw new TypeError('Input must be a string');
    }
    try {
        // Trim whitespace, convert to lowercase, replace spaces with hyphens
        return input
            .trim()
            .toLowerCase()
            .replace(/\s+/g, '-');
    } catch (error) {
        throw new Error('Failed to convert to kebab case: ' + error.message);
    }
}

// Example usage:
// console.log(toKebabCase('RaceCar')); // Output: racecar
// console.log(toKebabCase('Hello World Example')); // Output: hello-world-example