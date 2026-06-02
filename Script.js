// Task 1 - Variables and Data Types

let firstName = "Omolara";
let lastName = "Orodunsin";
let age = 25;
const studentId = "STU-00123";
const gpa = 4.5;
let isEnrolled = true;
let graduationDate = null;

console.log(firstName, lastName, age, studentId, gpa, isEnrolled, graduationDate);

firstName = "Lara";
console.log("Nickname:", firstName);


// Task 2 - Operators

let totalScore = 0;

totalScore += 45;
console.log(totalScore);

totalScore += 30;
console.log(totalScore);

totalScore -= 5;
console.log(totalScore);

totalScore *= 2;
console.log(totalScore);

totalScore++;
console.log(totalScore);

console.log(totalScore % 7);


// Task 3 - Type Conversion

let studentAge = "19";
let examScore = "74.5";
let passMark = "50";
let studentName = 101;

studentAge = parseInt(studentAge);
examScore = parseFloat(examScore);
passMark = Number(passMark);
studentName = String(studentName);

console.log(studentAge, typeof studentAge);
console.log(examScore, typeof examScore);
console.log(passMark, typeof passMark);
console.log(studentName, typeof studentName);

console.log(examScore > passMark);


// Task 4 - Conditionals

let score = 73;

if (score >= 70) {
    console.log("Score: 73 | Grade: A — Distinction");
} else if (score >= 60) {
    console.log("Score: 73 | Grade: B — Merit");
} else if (score >= 50) {
    console.log("Score: 73 | Grade: C — Pass");
} else if (score >= 40) {
    console.log("Score: 73 | Grade: D — Near Pass");
} else {
    console.log("Score: 73 | Grade: F — Fail");
}


// Switch Statement

let month = 3;

switch(month) {
    case 1: console.log("January"); break;
    case 2: console.log("February"); break;
    case 3: console.log("March"); break;
    case 4: console.log("April"); break;
    case 5: console.log("May"); break;
    case 6: console.log("June"); break;
    case 7: console.log("July"); break;
    case 8: console.log("August"); break;
    case 9: console.log("September"); break;
    case 10: console.log("October"); break;
    case 11: console.log("November"); break;
    case 12: console.log("December"); break;
    default: console.log("Invalid month");
}
