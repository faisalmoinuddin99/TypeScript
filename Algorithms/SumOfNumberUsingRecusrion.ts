function sum(inputNumber) {
    if (inputNumber <= 0) {
        return 0
    }
    return inputNumber + sum(inputNumber - 1)
}

const x = 4
console.log(sum(4));

