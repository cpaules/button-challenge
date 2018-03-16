// I assume the function is meant to perform operations on ints only, no string concatination or floats
function expressionEval(input) {
    const inputArr = input.toString().trim().split(" ");
    let arr = [];
    // for loop starts at the end of inputArr and works backwards, either populating arr with ints
    // or finding an operator and performing the operation
    for (let i = inputArr.length; i >= 0; i--) {
        if (parseInt(inputArr[i])) {
            arr.push(parseInt(inputArr[i]));
        }
        else if (inputArr[i] === "+") {
            let var1 = arr.pop();
            let var2 = arr.pop();
            arr.push(var1 + var2);
        }
        else if (inputArr[i] === "-") {
            let var1 = arr.pop();
            let var2 = arr.pop();
            arr.push(var1 - var2);
        }
    }
    return arr.pop()
}

console.log(expressionEval("+ 1 2") === 3)
console.log(expressionEval("+ 1 + 2 3") === 6)
console.log(expressionEval("+ + 1 2 3") === 6)
console.log(expressionEval("- 1 2") === -1 )
console.log(expressionEval("- - 1 2 3") === -4)
