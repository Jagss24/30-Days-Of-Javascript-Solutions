// Exercise 1
let challenge = "30 Days Of JavaScript"
console.log(challenge)

console.log(challenge.length)

console.log(challenge.toUpperCase())

console.log(challenge.toLowerCase())

console.log(challenge.substr(0, 2))
console.log(challenge.substring(0, 3))

console.log(challenge.substring(3))

console.log(challenge.includes("Script"))

console.log(challenge.split())

console.log(challenge.split(" "))

let mncs = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(mncs.split(','))

console.log(challenge.replace('JavaScript', 'Python'))

console.log(challenge.charAt(15))

console.log(challenge.charCodeAt(11))

console.log(challenge.indexOf('a'))

console.log(challenge.lastIndexOf('a'))

let sen1 = "You cannot end a sentence with because because because is a conjunction"
console.log(sen1.indexOf('because'))

console.log(sen1.lastIndexOf('because'))

console.log(sen1.search('because'))

console.log(challenge.trim())

console.log(challenge.startsWith(30))

console.log(challenge.endsWith('t'))

console.log(challenge.match(/a/g))

let line1 = "30 Days of"
let line2 = " JavaScript"
console.log(line1.concat(line2))

console.log(challenge.repeat(2))

// Exercise 2
let t = 10
console.log(t)
console.log(10 === t)

let s = '9.8'
let f = Math.ceil(parseFloat(s))
console.log(10 == f)

let line3 = "I hope this course is not full of jargon."
console.log(line3.includes("jargon"))

console.log(Math.random() * 101)

console.log(Math.random() * 51 + 50)

console.log(Math.random() * 256)

let str = "Javascript"
console.log(str[Math.floor(Math.random() * 9)])

console.log("1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125")

console.log(sen1.substr(31, 23))

//Exercise3
let line4 = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log(line4.match(/love/gi))

console.log(sen1.match(/because/gi))

const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
console.log(sentence)
let sym = sentence.match(/%/g)
sen2 = sentence.replace(/%/g, '')
sen3 = sen2.replace(/@/g, '')
sen4 = sen3.replace(/#/g, '')
sen5 = sen4.replace(/&/g, '')
sen6 = sen5.replace(/\$/g, '')
sen7 = sen6.replace(/;/g, '')
console.log(sen7)

let income = "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month."
let amt = income.match(/\d+/g)
let tot = parseInt(amt[0]) + parseInt(amt[1]) + parseInt(amt[2]);
console.log(tot)
