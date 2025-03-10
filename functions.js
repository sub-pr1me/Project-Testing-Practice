function capFirst(str) {
    return str[0].toUpperCase() + str.slice(1, str.length);
}

function reversed(str) {
    return str.split('').reverse().join('');
}

const calculator = {
    add: (a,b) => (a+b),
    subtract: (a,b) => (a-b),
    multiply: (a,b) => (a*b),
    divide: (a,b) => (a/b)
}

function caesar(str, key) {
    if (!key) return str;
    let result = [];
    const abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
               'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const upperCodes = [5, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77,
                       78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90];
    
    let ciphered = abc.toSpliced();    
    for (let i=0; i<key; i++) {
        let char = ciphered.shift();
        ciphered.push(char);
    };

    let arr = str.split('');
    for (let i=0; i<arr.length; i++) {
        let character = arr[i].toLowerCase();
        if (abc.includes(character)) {
            let index = abc.indexOf(character);
            if (upperCodes.includes(arr[i].charCodeAt(0))) {
                result.push(ciphered[index].toUpperCase())
            } else {
                result.push(ciphered[index]);
            };
        } else {
            result.push(arr[i])
        };
    };
    return result.join('');
}

function analyzeArray(arr) {
    let sum = arr.reduce((acc, curr) => {
        return acc+curr;
    }, 0);    
    return {
        average: sum/arr.length,
        min: Math.min(...arr),
        max: Math.max(...arr),
        length: arr.length
    };
}

export { capFirst, reversed, calculator, caesar, analyzeArray };