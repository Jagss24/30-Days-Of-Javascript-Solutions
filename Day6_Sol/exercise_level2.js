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