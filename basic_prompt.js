function toCamelCase(str) {
    return str
        .split(/[\s_-]+/)
        .map((word, index) => {
            if (index === 0) return word.toLowerCase();
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join('');
}

// Example usage:
console.log(toCamelCase('racecar')); // racecar
console.log(toCamelCase('race_car')); // raceCar
console.log(toCamelCase('race-car')); // raceCar
console.log(toCamelCase('race car')); // raceCar