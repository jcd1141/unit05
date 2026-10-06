//Joshua Dalton
//IT 505

let grades: number[] = []; //store grades

let amount = Number(prompt("How many grades?"));

for (let i = 0; i < amount; i++) {
    let grade = Number(prompt("Enter grade:")); 
    grades.push(grade); //push each grade
}

console.log(grades);

let total = 0; //adds all grades

for (let grade of grades) {
    total = total + grade;
}

let average = total / grades.length; //finds average

console.log("Average:");
console.log(average);

grades.sort((a, b) => a - b); //sorts grades from highest to lowest

console.log("Sorted Grades:");
console.log(grades);

console.log("Lowest:");
console.log(grades[0]);

console.log("Highest:");
console.log(grades[grades.length - 1]);