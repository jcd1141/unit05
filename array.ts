//Joshua Dalton
//IT 505

let numbers: number[] = [10, 20, 30, 40];

console.log("Starting Array");
console.log(numbers);

numbers.push(50);
console.log("After push");
console.log(numbers);

numbers.pop();
console.log("After pop");
console.log(numbers);

numbers.unshift(5);
console.log("After unshift");
console.log(numbers);

numbers.shift();
console.log("After shift");
console.log(numbers);

let sliced = numbers.slice(1, 3);

console.log("Slice");
console.log(sliced);

console.log("Original");
console.log(numbers);

numbers.splice(1, 1);

console.log("After splice");
console.log(numbers);

numbers.fill(100, 1, 2);

console.log("After fill");
console.log(numbers);

let numbers2: number[] = [50, 60];

let combined = numbers.concat(numbers2);

console.log("Concat");
console.log(combined);

let combined2 = [...numbers, ...numbers2];

console.log("Spread");
console.log(combined2);