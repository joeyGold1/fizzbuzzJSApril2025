function fizzBuzz() {
    for (let number = 1; number <= 100; number++) {
        console.log(getOutputForNumber(number));
    }
}

function getOutputForNumber(number) {
    let output = '';
    output += getAdditionForNumber(number, 3, 'Fizz');
    output += getAdditionForNumber(number, 5, 'Buzz');
    output += getAdditionForNumber(number, 7, 'Bang');
    if (output.length > 0) {
        return output;
    }
    return number;
}

function getAdditionForNumber(number, divisor, word) {
    if (number % divisor === 0) {
        return word;
    }
    return '';
}

fizzBuzz();
