function fizzBuzz() {
    for (let number = 1; number <= 250; number++) {
        console.log(getOutputForNumber(number));
    }
}

function getOutputForNumber(number) {
    let output = '';
    
    output = applySimpleRule(output, number, 3, 'Fizz');
    output = applySimpleRule(output, number, 13, 'Fezz');
    output = applySimpleRule(output, number, 5, 'Buzz');
    output = applySimpleRule(output, number, 7, 'Bang');
    output = bongRule(output, number);
    if (output.length > 0) {
        return output;
    }
    return number;
}

function applySimpleRule(currentOutput, number, divisor, word) {
    if (number % divisor === 0) {
        return currentOutput + word;
    }
    return currentOutput;
}

function bongRule(currentOutput, number) {
    if (number % 11 === 0) {
        return number % 13 === 0 ? "FezzBong" : "Bong";
    }
    return currentOutput;
}

fizzBuzz();
