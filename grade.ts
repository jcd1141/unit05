//Joshua Dalton
//IT 505

let grades: number[] = [];

let amount = Number(prompt("How many grades?"));

for (let i = 0; i < amount; i++) {
    let grade = Number(prompt("Enter grade:"));
    grades.push(grade);
}

console.log(grades);

let total = 0;

for (let grade of grades) {
    total = total + grade;
}

let average = total / grades.length;

console.log("Average:");
console.log(average);