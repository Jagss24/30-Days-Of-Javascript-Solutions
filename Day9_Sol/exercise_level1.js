const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]

//forEach
/* It iterates thorugh each element in the array and eecute the function on it*/

//map
/* The map method produces a new array by taking an callback function and modifying each element of the array*/

//filter
/* It also provides a new array through the callback function by filtering out some of the element from the array */

//redcue
/* this produces a single value from an array
provided it meets the callback function */

function callback() {

}

countries.forEach((country) => console.log(country))

names.forEach((name) => console.log(name))

numbers.forEach((number) => console.log(number))

countryUpperCase = countries.map((country) => country.toUpperCase())
console.log(countryUpperCase)

countrylength = countries.map((country) => country.length)
console.log(countrylength)

countrywithland = countries.filter((country) => country.includes('land'))
console.log(countrywithland)

countrywithsixcharacter = countries.filter((country) => country.length >= 6)
console.log(countrywithsixcharacter)

countrystartswithE = countries.filter((country) => country.startsWith('E'))
console.log(countrystartswithE)

pricesonlywithvalues = products.filter((product) => product.price > 0)
console.log(pricesonlywithvalues)

const getStringList = (arr) => {
    let str = arr.filter(element => {
        return typeof element === "string"
    })
    return str
}

console.log(getStringList([3, 4, "JAgs", 6, "sam", "henry"]))

sumallnumber = numbers.reduce((acc, cur) => acc + cur, 0)
console.log(sumallnumber)

concatenate = countries.reduce((acc, cur) => acc + ", " + cur)
console.log(concatenate + " are north european countries")

isnameswith7char = names.some(name => name.length > 7)
console.log(isnameswith7char)

iscountriesallwithland = countries.every(country => country.includes('land'))
console.log(iscountriesallwithland)

firstcountrywith6char = countries.find(country => country.length == 6)
console.log(firstcountrywith6char)

indexoffirstcountrywith6char = countries.findIndex(country => country.length == 6)
console.log(indexoffirstcountrywith6char)

norwaypostion = countries.findIndex(country => country.toLowerCase().includes('norway'))
console.log(norwaypostion)

russiapostion = countries.findIndex(country => country.toLowerCase().includes('russia'))
console.log(russiapostion)
