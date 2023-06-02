//Exercise: level 1
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
]

console.log(countries[1])
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
]

const mernStack = ['MongoDB', 'Express', 'React', 'Node']

for (let i = 0; i < 10; i++) {
    console.log("Contries: " + countries[i])
    console.log("WebTechs : " + webTechs[i])
}

let str = "";
for (let i = 0; i < 7; i++) {
    for (let j = 0; j < i; j++) {
        str += "#"
    }
    str += "\n"
}
console.log(str)

for (let i = 0; i < 11; i++) {
    console.log(`${i} x ${i} = ${i * i}`)
}

console.log("i\ti^2\ti^3")
for (let i = 0; i < 11; i++) {
    console.log(`${i}\t${i ** 2}\t${i ** 3}`)
}

for (let i = 0; i < 101; i += 2) {
    console.log(`Even number : ${i}`)
}
for (let i = 1; i < 101; i += 2) {
    console.log(`Odd number : ${i}`)
}

let count = 0
let i, j
for (i = 2; i <= 100; i++) {
    for (j = 1; j <= i; j++) {
        if (i % j == 0)
            count++
    }
    if (count == 2)
        console.log(i)
    count = 0
}

let sum = 0
for (let i = 0; i <= 100; i++) {
    sum += i
}
console.log(sum)

let sum1 = 0, sum2 = 0
for (let i = 0; i <= 100; i += 2) {

    sum1 += i
}

for (let j = 1; j <= 100; j += 2) {
    sum2 += j
}
console.log(sum1)
console.log(sum2)

//Develop a small script which generate array of 5 random numbers

let char = ""
for (let i = 1; i <= 5; i++) {
    char += parseInt(Math.random() * 5)
}
console.log(char)
let chararr = char.split("")
console.log(chararr)

//Develop a small script which generate array of 5 random numbers and the numbers must be unique
let arr = []
while (arr.length < 5) {
    let r = parseInt(Math.random() * 9)
    if (arr.indexOf(r) == -1)
        arr.push(r)
}
console.log(arr)

let c = ""
while (c.length < 5) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    c += characters.charAt(Math.floor(Math.random() * characters.length))

}
console.log(c)