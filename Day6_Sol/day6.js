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

//Exercise level 2
let hex = ""
while (hex.length < 6) {
    const char = "abcdef0123456789"
    hex += char.charAt(Math.floor(Math.random() * char.length))
}
console.log("#" + hex)

const rgb = []
while (rgb.length < 3) {
    rgb[0] = Math.floor(Math.random() * 255)
    rgb[1] = Math.floor(Math.random() * 255)
    rgb[2] = Math.floor(Math.random() * 255)
    i++
}
console.log(`rgb(${rgb[0]},${rgb[1]},${rgb[2]})`)

console.log(countries)
for (let i = 0; i < countries.length; i++) {
    countries[i] = `"${countries[i]}"`
}
console.log(countries)

let counlen = []
for (let i = 0; i < countries.length; i++) {
    counlen[i] = countries[i].length
}
console.log(counlen)

let counarr = []
for (let i = 0; i < countries.length; i++) {
    counarr[i] = `[${countries[i]},${countries[i].slice(1, 4)},${countries[i].length}]`
}
console.log(counarr)

console.log(countries)
let land = [], flag = 0
for (let i = 0; i < countries.length; i++) {
    if (countries[i].includes("land") == true) {
        land.push(countries[i])
    }
    else {
        flag++
    }
}
console.log(land)
if (flag == countries.length) {
    console.log("All these countries are without land'")
}

let ia = [], flag1 = 0
for (i = 0; i < countries.length; i++) {
    if (countries[i].endsWith('ia"') == true) {
        ia.push(countries[i])
    }
    else {
        flag1++
    }
}
console.log(ia)
if (flag1 == countries.length) {
    console.log('These are countries ends without ia')
}

let bigchar = ""
for (let i = 0; i < countries.length; i++) {
    let bignum = countries[i].length
    for (let j = i + 1; j < countries.length; j++) {
        let bigNum = countries[j].length
        if (bigNum > bignum) {
            bigchar = countries[j]
        }
    }
}
console.log(bigchar)

const countwithfivechar = []
for (let i = 0; i < countries.length; i++) {
    if (countries[i].length == 7) //7 bcoz we have two double inverted commas also 
    {
        countwithfivechar.push(countries[i])
    }
}
console.log(countwithfivechar)

let bigwebTechchar = ""
for (let i = 0; i < webTechs.length; i++) {
    let bignum = webTechs[i].length
    for (let j = i + 1; j < webTechs.length; j++) {
        let bigNum = webTechs[j].length
        if (bigNum > bignum) {
            bigwebTechchar = webTechs[j]
        }
    }
}
console.log(bigwebTechchar)

const webtecharr = []
for (let i = 0; i < webTechs.length; i++) {
    webtecharr.push([webTechs[i], webTechs[i].length])
}
console.log(webtecharr)

const mern = ['MongoDB', 'Express', 'React', 'Node']
let MERN = ""
for (const stack of mern) {
    MERN += stack.slice(0, 1)
}
console.log(MERN)

for (const tech of webTechs) {
    console.log(tech)
}

const fruit = ['banana', 'orange', 'mango', 'lemon']
const fruitrev = []
for (let i = fruit.length - 1; i >= 0; i--) {
    fruitrev[fruit.length - 1 - i] = fruit[i]
}
console.log(fruitrev)

const fullStack = [
    ['HTML', 'CSS', 'JS', 'React'],
    ['Node', 'Express', 'MongoDB']
]
for (let i = 0; i < fullStack.length; i++) {
    for (let j = 0; j < fullStack[i].length; j++) {
        console.log(fullStack[i][j])
    }
}

//Exercise level 3

const copcountry = []
for (let i = 0; i < countries.length; i++) {
    copcountry[i] = countries[i]
}
console.log(copcountry)

//created a copied array now we'll sort it and stored it in a varibale
let sortedCountries = copcountry.sort()
console.log(sortedCountries)