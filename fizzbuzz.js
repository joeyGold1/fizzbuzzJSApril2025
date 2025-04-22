function fizzBuzz() {
    for (let number =1; number <= 100; number++) {
        console.log(getOutputForNumber(number));
    }
}

function getOutputForNumber(number) {
    let output = '';
    if (number % 3 === 0) {
        output += 'Fizz';
    }
    if (number % 5 === 0) {
        output += 'Buzz';
    }
    if (output.length > 0) {
        return output;
    }
    return number;
}

fizzBuzz();
