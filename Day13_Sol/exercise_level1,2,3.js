//Exercise: level 1

const countries1 = [
    ['Finland', 'Helsinki'],
    ['Sweden', 'Stockholm'],
    ['Norway', 'Oslo']
]
console.table(countries1)

console.table(countries) //I've imported thi countires data from countries.js

console.group('Countries')
console.log(countries1)
console.groupEnd()

//Exercise: level 2

console.assert(10 > 2 * 10, 'It is a error')

console.warn('you are warned')

console.error('this is an error')

console.time('While loop')
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let len = 0
while (len < arr.length) {
    console.log(arr)
    len++
}
console.timeEnd('While loop')

console.time('For loop')
for (i = 0; i < arr.length; i++) {
    console.log(arr[i])
}
console.timeEnd('For loop')

console.time('For of loop')
for (const elem of arr) {
    console.log(elem)
}
console.timeEnd('For of loop')

console.time('for in loop')
for (const elem in arr) {
    console.log(elem)
}
console.timeEnd('for in loop')