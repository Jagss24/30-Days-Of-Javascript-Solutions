
//Execise level 1

let fname = "Jagss", lname = "sam", country = "India", city = "diva", age = 19, isMarried = false, year = 2004
console.log(typeof (fname))
console.log(typeof (lname))
console.log(typeof (country))
console.log(typeof (city))
console.log(typeof (age))
console.log(typeof (isMarried))
console.log(typeof (year))

console.log(typeof (10) == 10)
console.log(parseInt('9.8') == 10)
console.log(4 > 3)
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 === 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 === '4')
console.log(4 == '4')
let p = "python", j = "jargon"
console.log(p[1] === j[1])
console.log(4 > 3 && 10 < 12)
console.log(4 > 3 && 10 > 12)
console.log(4 > 3 || 10 < 12)
console.log(4 > 3 || 10 > 12)
console.log(!(4 > 3))
console.log(!(4 < 3))
console.log(!(false))
console.log(!(4 > 3 && 10 < 12))
console.log(!(4 > 3 && 10 > 12))
console.log(!(4 === '4'))
let d = "dragon"
console.log(!(p.search("on") && d.search("on")))

const now = new Date()
console.log(now.getFullYear())
console.log(now.getMonth())
console.log(now.getDate())
console.log(now.getDay())
console.log(now.getHours())
console.log(now.getMinutes())
let d1 = new Date(1970 - 01 - 01)
let d2 = new Date();
//by dividing the time from 1000 we will get the time from millisecond to seconds
console.log((d2 - d1) / 1000)
//to get this millisecond in days we will divide by 1000 seconds , 24hrs, 60 minutes, 60 seconds
console.log((d2 - d1) / (1000 * 24 * 60 * 60))


//Exercise 2

let base = prompt("Enter base : ")
let height = prompt("Enter height : ")
let area = base * height * 0.5
confirm("The area of traingle is : " + area)

let a = prompt("Enter side a :")
let b = prompt("Enter side b  : ")
let c = prompt("Enter side c : ")
confirm("The perimeter of a traingle is " + (parseInt(a) + parseInt(b) + parseInt(c)))

let r = parseInt(prompt("Enter raidus : "))
confirm("area of circle : " + (3.14 * r ** 2))
confirm("perimeter of circle : " + (2 * 3.14 * r))

//q4- q10 area easy should give it a try

let firstName = 'Asabeneh'
let lastName = 'Yetayeh'
if (firstName.length > lastName.length) {
    console.log("Your first name, Asabeneh is longer than your family name, Yetayeh")
}
//q12 try it out yourself 

let year1 = prompt("Enter birth year : ")
if (year1 => 18) {
    console.log(`You are ${year1}. You are good enough to drive`)
}
else {
    console.log(`You are ${year1}. You will be allowed to drive after ${18 - year1} years`)
}

let year2 = prompt("Enter number of years you lived : ")
console.log(`You lived ${year2 * 365 * 24 * 60 * 60100}`)

//i
const now1 = new Date()
console.log(`${now1.getFullYear()}-${now1.getMonth()}-${now1.getDate()} ${now1.getHours()}:${now1.getMinutes()}`)
//ii
console.log(`${now1.getDate()}-${now1.getMonth()}-${now1.getFullYear()} ${now1.getHours()}:${now1.getMinutes()}`)
//iii
console.log(`${now1.getDate()}/${now1.getMonth()}/${now1.getFullYear()} ${now1.getHours()}:${now1.getMinutes()}`)

//Exercise level 3

const now2 = new Date()
console.log(`${now2.getFullYear()}-${now2.getMonth().toString().padStart(2, '0')}-${now2.getDate().toString().padEnd(2, '0')} ${now2.getHours().toString().padStart(2, '0')}:${now2.getMinutes().toString().padStart(2, '0')}`)