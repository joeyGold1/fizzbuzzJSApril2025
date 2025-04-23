function fizzBuzz() {
    for (let number = 1; number <= 256; number++) {
        console.log(getOutputForNumber(number));
    }
}

function getOutputForNumber(number) {
    let output = [];
    output = applySimpleRule(output, number, 3, "Fizz");
    output = applySimpleRule(output, number, 13, "Fezz");
    output = applySimpleRule(output, number, 5, "Buzz");
    output = applySimpleRule(output, number, 7, "Bang");
    output = bongRule(output, number);
    output = reverseRule(output, number);
    if (output.length > 0) {
        return output.join("");
    }
    return number;
}

function applySimpleRule(currentOutput, number, divisor, word) {
    if (number % divisor === 0) {
        currentOutput.push(word);
        return currentOutput;
    }
    return currentOutput;
}

function bongRule(currentOutput, number) {
    if (number % 11 === 0) {
        currentOutput.filter(word => word === "Fezz").push("Bong");
        return currentOutput;
    }
    return currentOutput;
}

function reverseRule(currentOutput, number) {
    if (number % 17 === 0) {
        return currentOutput.reverse();
    }
    return currentOutput;
}

fizzBuzz();
