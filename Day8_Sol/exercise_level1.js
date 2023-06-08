//EXercise level 1
const dog = {}

console.log(dog)

dog.name = 'Tommy'
dog.legs = 4
dog.color = 'white'
dog.age = 8
dog.bark = function () {
    return 'woof woof'
}
console.log(dog)

let key = Object.keys(dog)
console.log(key)

dog.object = ['breed', 'getDogInfo']
console.log(dog)