//Exercise: level 2

console.log(countries1)

let text =
    'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let text1 = text.replace(/,/g, '')
const words = text1.split(' ')
console.log(words)
console.log(words.length)

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meat')
console.log(shoppingCart)
if (shoppingCart.indexOf('Sugar') == -1) {
    shoppingCart.push('Sugar')
}
else {
    console.log('Sugar has been added already')
}
console.log(shoppingCart)
let h = shoppingCart.indexOf('Honey')
shoppingCart.splice(h, 1)
console.log(shoppingCart)
let t = shoppingCart.indexOf('Tea')
shoppingCart[t] = 'Green Tea'
console.log(shoppingCart)

if (countries1.indexOf('Euthopia') == -1) {
    countries1.push('Euthopia')
    console.log('Added Euthopia')
}
else {
    console.log('Euthopra already exist')
}

if (webTechs.indexOf('Sass') == -1) {
    console.log('Sass is a CSS preprocess')
}
else {
    webTechs.push('Sass')
    console.log(webTechs)
}

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node', 'Express', 'MongoDB']
const fullStack = frontEnd.concat(backend)
console.log(fullStack)