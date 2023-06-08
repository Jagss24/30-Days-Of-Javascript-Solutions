//Exercise: level 3

const userIdGeneratedByUser = () => {
    let nofofchar = parseInt(prompt("Enter the number of character: "))

    let noofID = parseInt(prompt("enter the number of ID to be generated: "))
    let idlists = []
    for (let i = 0; i < noofID; i++) {
        let id = "";
        const char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxys1234567890";
        for (let i = 0; i < nofofchar; i++) {
            id += char[Math.floor(Math.random() * char.length)]
        }
        idlists.push(id)
    }
    return idlists.join(',')
}
// console.log(userIdGeneratedByUser())

//2,3,4,5,6 are easy give it a try we've done that  before

const generateColors = (type, num) => {
    let lists = []
    for (let i = 0; i < num; i++)
        if (type == 'hexa') {
            let hex = ""
            let color = "abcdef1234567890"
            while (hex.length < 6) {
                hex += color[Math.floor(Math.random() * color.length)]
            }
            console.log(hex)
            hexacol = `#${hex}`
            lists.push(hexacol)
        }
        else {
            const rgb = []
            while (rgb.length < 3) {
                rgb[0] = Math.floor(Math.random() * 255)
                rgb[1] = Math.floor(Math.random() * 255)
                rgb[2] = Math.floor(Math.random() * 255)
            }
            rgbcol = `rgb(${rgb[0]},${rgb[1]},${rgb[2]})`
            lists.push(rgbcol)
        }
    return lists
}
console.log(generateColors("rgb", 1))

function shuffleArray(arr) {
    return arr.sort(() => Math.random() - 0.3);
}
let array = [1, 2, 3, 4, 5, 6, 7]
console.log(shuffleArray(array))

const factorial = (num) => {
    let fact = 1
    for (let i = num; i > 0; i--) {
        fact *= i
    }
    return fact
}
console.log(factorial(5))

//10 & 11 are easy

const sumOfArrayItems = (arr) => {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        if (typeof (arr[i]) == 'number') {
            sum += arr[i]
        }
        else {
            console.log(arr[i] + " is not a number type ")
            continue;
        }
    }
    return sum
}
let array1 = [1, 'hi', 3, 4, 5, 6]
console.log(sumOfArrayItems(array1))

//13 is just like 12 give it a try

const modifyArray = (arr) => {
    if (arr.length > 5) {
        arr[4] = arr[4].toUpperCase()
        return arr
    }
    else {
        return "5th item is not there"
    }
}
let array3 = ['a', 'b', 'c', 'd', 'e', 'f']
console.log(modifyArray(array3))

function sevenRandomNumbers() {
    let arr = []
    while (arr.length < 7) {
        num = Math.floor(Math.random() * 10)
        if (!arr.includes(num)) {
            arr.push(num)
        }
    }
    return arr
}
console.log(sevenRandomNumbers())

//We've done 20 before so give it a try 