//Exercise level 1
let age = parseInt(prompt("Enter your age: "))
if (age >= 18) {
    console.log('You are old enough to drive')
}
else {
    console.log(`You are left with ${18 - age} years left to drive`)
}

let myage = 19, yourage = 30
if (yourage > myage) {
    console.log(`You are ${yourage - myage} years older than me`)
}
else {
    console.log(`I am ${myage - yourage} years older than you`)
}

let a = 4, b = 5
a > b ? console.log(`a is greater than b`) : console.log(`b is greater than a`)

//q4 give it a try

//Exercise level 2

let score = prompt("Enter your score :")
if ((90 <= score) && (score < 100)) {
    console.log("Grade A")
}
else if ((70 <= score) && (score <= 89)) {
    console.log("Grade B")
}
else if ((60 <= score) && (score <= 69)) {
    console.log("Grade C")
}
else if ((50 <= score) && (score <= 59)) {
    console.log("Grade D")
}
else {
    console.log("Grade F You are FAIL")
}

let monthname = prompt("Enter your month name : ")
let month = monthname.toLowerCase()
switch (month) {
    case 'september':
        console.log('Season is autumn')
        break;
    case 'october':
        console.log('Season is autumn')
        break;
    case 'november':
        console.log('Season is autumn')
        break;
    case 'january':
        console.log('Season is Winter')
        break;
    case 'december':
        console.log('Season is Winter')
        break;
    case 'february':
        console.log('Season is Winter')
        break;
    case 'april':
        console.log('Season is Spring')
        break;
    case 'march':
        console.log('Season is Spring')
        break;
    case 'may':
        console.log('Season is Spring')
        break;
    case 'june':
        console.log('Season is Summer')
        break;
    case 'july':
        console.log('Season is Summer')
        break;
    case 'august':
        console.log('Season is Summer')
        break;
}

let dayname = prompt("Enter day : ")
let day = dayname.toLowerCase();
switch (day) {
    case 'saturday':
        console.log("Weekend")
    case 'sunday':
        console.log('Weekend')
    default:
        console.log('Working day')
}

//Exercise level 3

let monthname1 = prompt("Enter your month name : ")
let month1 = monthname1.toLowerCase()
switch (month1) {
    case 'september':
        console.log('September has 30 days')
        break;
    case 'october':
        console.log('OCtober has 31 days')
        break;
    case 'november':
        console.log('November has 30 days ')
        break;
    case 'january':
        console.log('January has 31 days')
        break;
    case 'december':
        console.log('DEcember has 31 days')
        break;
    case 'february':
        console.log('Feb has 28 days')
        break;
    case 'april':
        console.log('April has 30 days')
        break;
    case 'march':
        console.log('March has 31 days')
        break;
    case 'may':
        console.log('May has 31 days')
        break;
    case 'june':
        console.log('June has 30 days')
        break;
    case 'july':
        console.log('July has 31 days')
        break;
    case 'august':
        console.log('August has 31 days')
        break;
}