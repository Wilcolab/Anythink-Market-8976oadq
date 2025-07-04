/**
 * Converts a given string to camelCase format.
 *
 * The function trims the input string, splits it by whitespace, and transforms
 * the first word to lowercase and subsequent words to capitalized form, then joins them together.
 *
 * @param {string} str - The input string to convert.
 * @returns {string} The camelCase formatted string. Returns an empty string if input is empty or whitespace.
 * @throws {TypeError} Throws if the input is not a string.
 *
 * @example
 * camelCase('hello world example'); // returns 'helloWorldExample'
 * camelCase('  JavaScript is awesome  '); // returns 'javaScriptIsAwesome'
 */
 
/**
 * Converts a given string to dot.case format.
 *
 * The function trims the input string, splits it by whitespace, converts all words to lowercase,
 * and joins them with dots.
 *
 * @param {string} str - The input string to convert.
 * @returns {string} The dot.case formatted string. Returns an empty string if input is empty or whitespace.
 * @throws {TypeError} Throws if the input is not a string.
 *
 * @example
 * dotCase('hello world example'); // returns 'hello.world.example'
 * dotCase('  JavaScript is awesome  '); // returns 'javascript.is.awesome'
 */
function camelCase(str) {
    if (typeof str !== 'string') {
        throw new TypeError('Input must be a string');
    }
    if (!str.trim()) {
        return '';
    }
    return str
        .trim()
        .split(/\s+/)
        .map((word, idx) => {
            if (idx === 0) {
                return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
}

function dotCase(str) {
    if (typeof str !== 'string') {
        throw new TypeError('Input must be a string');
    }
    if (!str.trim()) {
        return '';
    }
    return str
        .trim()
        .split(/\s+/)
        .map(word => word.toLowerCase())
        .join('.');
}

// Example usage:
// camelCase('hello world example') => 'helloWorldExample'
// dotCase('hello world example') => 'hello.world.example'

