// Run the file using ts-node <filename> command in terminal
// Refer below link before starting
// https://blogs.halodoc.io/functional-typescript/

const add = (a: number, b: number): number => {
    return a + b
  }

const subtract = (a: number, b: number): number => {
    return a - b;
}

const multiply = (a: number, b: number): number => {
    return a * b;
}

const divide = (a: number, b: number): number => {
    return b !== 0 ? a / b : 0;
}

const square = (a: number): number => {
    return a * a;
}

type Operator = (a: number, b: number) => number;

const operator = (operator: Operator, a: number, b: number) => {
    return operator(a, b);
}

console.log(operator(add, 1, 3));
console.log(operator(subtract, 4, 3));
console.log(operator(multiply, 4, 3));
console.log(operator(divide, 8, 4));


// applying the same logics in arrays

const arr = [1, 2, 3, 4];

console.log(arr.map(add));
console.log(arr.map(subtract));
console.log(arr.map(divide));
console.log(arr.map(multiply));
console.log(arr.map(square));
