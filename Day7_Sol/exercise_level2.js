//Exercise level 2

function solveLinEquation(a, b, c) {

}

function solveQuadEquation(a, b, c) {
    x1 = (-b + (b ** 2 - 4 * a * c)) / (2 * a)
    x2 = (-b - (b ** 2 - 4 * a * c)) / (2 * a)
    return `${x1} and ${x2} are the two roots of quadractic eq`
}
console.log(solveQuadEquation(1, 4, 4))
console.log(solveQuadEquation(1, -1, -2))
console.log(solveQuadEquation(1, 7, 12))
console.log(solveQuadEquation(1, 0, -4))
console.log(solveQuadEquation(1, -1, 0))

let printArray = arr => {
    for (const element of arr) {
        console.log(element)
    }
}
const array = [1, 2, 3, 4, 5, 6]
printArray(array)

function showDateTime() {
    const now = new Date()
    console.log(`${now.getDate().toString().padStart(2, '0')}/${now.getMonth().toString().padStart(2, '0')}/${now.getFullYear().toString().padStart(2, '0')} ${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`)
}
showDateTime()

let swapValues = (x, y) => {
    let temp = x;
    x = y;
    y = temp;
    return `now x is ${x} and y is ${y}`
}
console.log(swapValues(4, 5))

let capitalizeArray = (arr) => {
    for (const element of arr) {
        arr[element] = element.toUpperCase()
    }
    return arr
}
const alphabets = ['a', 'b', 'c', 'd']
console.log(capitalizeArray(alphabets))

let additem = (item, arr) => {
    arr.push(item)
    return arr
}
const fruitsname = []
console.log(additem('Apple', fruitsname))
console.log(additem('Banana', fruitsname))
console.log(additem('Grapes', fruitsname))

let removeitem = (i, arr) => {
    arr.splice(i, 1)
    return arr
}
console.log(removeitem(1, fruitsname))

let sumOfNumbers = (num) => {
    let sum = 0
    for (i = 0; i <= num; i++) {
        sum += i
    }
    return sum
}
console.log(sumOfNumbers(4))

let sumOfOdds = (num) => {
    let sum = 0
    for (let i = 1; i <= num; i += 2) {
        sum += i
    }
    return sum
}
console.log(sumOfOdds(4))

let sumOfEvens = (num) => {
    let sum = 0
    for (let i = 0; i <= num; i += 2) {
        sum += i
    }
    return sum
}
console.log(sumOfEvens(4))

let evensAndOdds = (num) => {
    let counteven = 0, countodd = 0
    for (let i = 0; i <= num; i++) {
        if (i % 2 == 0) {
            counteven++
        }
        else {
            countodd++
        }
    }
    return `The number of even and odds in given range of ${num} is ${counteven} and ${countodd} respectively`
}
console.log(evensAndOdds(100))

//try 14,15,16,17,18 we've done it already