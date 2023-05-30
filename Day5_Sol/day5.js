//This file was just for practice so dont go through these


//Empty array
const arr = []
console.log(arr)
const numbers = [0, 3.14, 9.81, 37, 98.6, 100] // array of numbers
const fruits = ['banana', 'orange', 'mango', 'lemon'] // array of strings, fruits
const vegetables = ['Tomato', 'Potato', 'Cabbage', 'Onion', 'Carrot'] // array of strings, vegetables
const animalProducts = ['milk', 'meat', 'butter', 'yoghurt'] // array of strings, products
const webTechs = ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Node', 'MongDB'] // array of web technologies
const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland'] // array of strings, countries

// Print the array and its length

console.log('Numbers:', numbers)
console.log('Number of numbers:', numbers.length)

console.log('Fruits:', fruits)
console.log('Number of fruits:', fruits.length)

console.log('Vegetables:', vegetables)
console.log('Number of vegetables:', vegetables.length)

console.log('Animal products:', animalProducts)
console.log('Number of animal products:', animalProducts.length)

console.log('Web technologies:', webTechs)
console.log('Number of web technologies:', webTechs.length)

console.log('Countries:', countries)
console.log('Number of countries:', countries.length)

//Array can  have different type of datatypes in JS
const arr1 = [
    'Jagss',
    19,
    true,
    {
        country: 'India', city: 'Mumbai'
    },
    {
        skills: ['HTML', 'CSS', 'JS']
    }
]
console.log(arr1[3].country)
//Create Array using split
let js = 'Javascript'
const charsInJavascript = js.split('')
console.log(charsInJavascript)

let companiesString = 'Facebook, Google, Whatsapp, Instagram, Microsoft'
const compaines = companiesString.split(', ')
console.log(compaines)

//Array Constructor
const arr2 = Array() //creates an empty array
console.log(arr2)
const arr3 = Array(8) //crates an array with 8 emptyvalues
console.log(arr3)

//Creating static values with fill
const arr4 = Array(9).fill('JAGS')
console.log(arr4)

//Concatenating array using concat
const firstlist = [1, 2, 3]
const secondlist = [4, 5, 6]
const thirdlist = firstlist.concat(secondlist)
console.log(thirdlist)

//Getting index of an element using indexof
console.log(thirdlist.indexOf(4)) // -> index of 4 is 3
//If the element is not in the array the indexof will return -1.

//Check item is there or not
let index = compaines.indexOf('Twitter')
if (index == -1) {
    console.log("the company is not in the list")
}
else {
    console.log("It is in the list at " + index)
}

// Getting last index of an element in array
//If there are duplicate elements in the list and you want to know  the last element index 

const numbers1 = [1, 2, 3, 23, 2, 2, 2, 3, 4, 5, 3, 5]
console.log(numbers1.lastIndexOf(3))
//If the lement is not there it'll return -1

//includes:To check if an item exist in an array. If it exist it returns the true else it returns false.
console.log(numbers1.includes(2))
//Array.isArray:To check if the data type is an array
console.log(Array.isArray(numbers))

//Convert array into string
const names = compaines.toString()
//console.log(companiesString)
console.log(names)

//join: is used to join a specific argument to all the elements of the array and returns as a string. Bydeafult it joins with a comma
const names1 = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
console.log(names1)
names2 = names1.join() // Asabeneh,Mathias,Elias,Brook
console.log(Array.isArray(names2)) //false: coz After using join it returns as string
console.log(names1.join('')) //AsabenehMathiasEliasBrook
console.log(names1.join(' ')) //Asabeneh Mathias Elias Brook
console.log(names1.join(', ')) //Asabeneh, Mathias, Elias, Brook
console.log(names1.join(' # '))

const num = [1, 2, 3, 4, 5]

console.log(num.slice()) // -> it copies all  item
console.log(num.slice(0)) // -> it copies all  item
console.log(num.slice(0, num.length)) // it copies all  item
console.log(num.slice(1, 4)) // -> [2,3,4] // it doesn't include the ending position


//Splice is used to remove an add elements
//It take two or three parameter; we use three parameter if we want to add elements;
//The 1st parameter is starting position the 2nd  parameter is number of items from the starting position of be removed
//After the 2nd the nuber of parameters there are to be added in the array
const num0 = [1, 2, 3, 4, 5]
console.log(num0.splice(0, 1))
console.log(num0)
const num1 = [1, 2, 3, 4, 5, 6]
num1.splice(3, 3, 7, 8, 9)
console.log(num1.splice(3, 3, 7, 8, 9, 10, 11, 12, 13))  // -> [1, 2, 3, 7, 8, 9] //it removes three item and replace three items
console.log(num1)

//push: add the items in the end
const arr5 = ['item1', 'item2', 'item3']
arr5.push('new item')
console.log(arr5)

//pop: Removing item in the end.
arr5.pop()
console.log(arr5)

//shift:Removing an element in the beginning of the array
arr5.shift()
console.log(arr5)

//unshift: Adding an element in the beginning of the array
arr5.unshift('item1')
console.log(arr5)
//Reverse an array
num1.reverse()
console.log(num1)

//Sorting an array
console.log(compaines)
compaines.sort()
console.log(compaines)

//Array of arrays

const frontend = ['HTML', 'CSS', 'JS', 'Bootstrap', 'React']
const backend = ['Node', 'Express', 'MongoDB']
const fullstack = [frontend, backend]
console.log(fullstack.length)
console.log(fullstack[0])
console.log(fullstack[0][1])

