import readline from 'readline';
async function interactiveFizzBuzz() {
    while (true) {
        const number = await getUserInputForNumber();
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
        const newOutput = currentOutput.filter(word => word === "Fezz")
        newOutput.push("Bong");
        return newOutput;
    }
    return currentOutput;
}

function reverseRule(currentOutput, number) {
    if (number % 17 === 0) {
        return currentOutput.reverse();
    }
    return currentOutput;
}

async function getUserInputForNumber() {
    return new Promise((resolve) => { 
        const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        });
        rl.question('Enter a number: ', (number) => {
            rl.close();
            resolve(parseInt(number));
        });
    });
}

await interactiveFizzBuzz();
