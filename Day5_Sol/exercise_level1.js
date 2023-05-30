//Exercise level 1

const q1 = Array()

const q2 = Array(5)

console.log(q2.length)

const q4 = [1, 2, 3, 4, 5, 6, 7]
console.log(q4[0], q4[parseInt((q4.length) / 2)], q4[q4.length - 1])

const mixedDataTypes = ['Jagss', 20, true, { skills: ['HTML', 'CSS', 'JS'] }, undefined, NaN]
console.log(mixedDataTypes.length)

const Companies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

console.log(Companies)

console.log(Companies.length)

console.log(Companies[0], Companies[parseInt(((Companies.length) / 2))], Companies[Companies.length - 1])

for (let index = 0; index < Companies.length; index++) {
    const element = Companies[index];
    const Element = element.toUpperCase();
    console.log(Element)
}

console.log(Companies.join(', ') + " are big IT companies")

let i = Companies.indexOf('Facebook')
if (i != -1) {
    console.log("Facebook exist in list at " + i)
}
else {
    console.log("The element is not in the list")
}

console.log(Companies.sort())

console.log(Companies.reverse())

console.log(Companies.slice(0, 4))

console.log(Companies.slice(4, 7))

console.log(Companies.slice(Companies.length / 2))

console.log(Companies.shift())

console.log(Companies.pop())

console.log(Companies.splice(0))

console.log(Companies)