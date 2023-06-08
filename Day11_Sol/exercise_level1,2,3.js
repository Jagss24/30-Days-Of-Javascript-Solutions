const constants = [2.72, 3.14, 9.81, 37, 100]
const countries1 = ['Finland', 'Estonia', 'Sweden', 'Denmark', 'Norway']
const rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60
}
const users = [
    {
        name: 'Brook',
        scores: 75,
        skills: ['HTM', 'CSS', 'JS'],
        age: 16
    },
    {
        name: 'Alex',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18
    },
    {
        name: 'David',
        scores: 75,
        skills: ['HTM', 'CSS'],
        age: 22
    },
    {
        name: 'John',
        scores: 85,
        skills: ['HTML'],
        age: 25
    },
    {
        name: 'Sara',
        scores: 95,
        skills: ['HTM', 'CSS', 'JS'],
        age: 26
    },
    {
        name: 'Martha',
        scores: 80,
        skills: ['HTM', 'CSS', 'JS'],
        age: 18
    },
    {
        name: 'Thomas',
        scores: 90,
        skills: ['HTM', 'CSS', 'JS'],
        age: 20
    }
]

//Exercise level 1
let [e, pi, gravity, humaBodyTemp, waterBoilingTemp] = constants
console.log(e, pi, gravity, humaBodyTemp, waterBoilingTemp)

let [fin, est, sw, den, nor] = countries1
console.log(fin, est, sw, den, nor)

let { width: w, height: h, area: a, perimeter: p } = rectangle
console.log(w, h, a, p)

//Exercise level 2

for (const { name, scores, skills, age } of users) {
    console.log(`${name} score is ${scores} and his skills are ${skills.join(',')} and his age is ${age}`)
}

for (const { name, skills } of users) {
    if (skills.length < 2) {
        console.log(`${name} has less than two skills`)
    }
}

//Exercise level 3

for (const { name, capital, population, languages } of countries) {
    console.log(`${name} capital is ${capital}. There population is ${population} and the languages they speak are ${languages.join(',')}`)
}

const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]

// let [name, skills, scores, jsScore = scores[2], reactScore = scores[3]] = student
// console.log(name, skills, jsScore, reactScore)

const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]],
    ['Jagss', ['HTML', 'CSS', 'JS', 'React'], [90, 90, 90, 95]]
]

function convertArrayToObject(obj) {
    let object = []
    console.log(object.length)
    console.log(obj.length)
    for (const [name, skills, scores] of obj) {
        object.push({ name, skills, scores })
    }
    console.log(object)
}
console.log(convertArrayToObject(students))

//Q4
const Student = {
    name: 'David',
    age: 25,
    skills: {
        frontEnd: [
            { skill: 'HTML', level: 10 },
            { skill: 'CSS', level: 8 },
            { skill: 'JS', level: 8 },
            { skill: 'React', level: 9 }
        ],
        backEnd: [
            { skill: 'Node', level: 7 },
            { skill: 'GraphQL', level: 8 },
        ],
        dataBase: [
            { skill: 'MongoDB', level: 7.5 },
        ],
        dataScience: ['Python', 'R', 'D3.js']
    }
}

const newStudent = { ...Student }
console.log(newStudent)

let { skills } = newStudent
console.log(skills)
skills.frontEnd.push({ skill: 'Bootstrap', level: 8 })
skills.backEnd.push({ skill: 'Express', level: 9 })
skills.dataBase.push({ skill: 'SQL', level: 8 })
skills.dataScience.push('SQL')

console.log(newStudent)

