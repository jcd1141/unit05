//Joshua Dalton
//IT 505

let grades: number[] = [];

let amount = Number(prompt("How many grades?"));

for (let i = 0; i < amount; i++) {
    let grade = Number(prompt("Enter grade:"));
    grades.push(grade);
}

console.log(grades);