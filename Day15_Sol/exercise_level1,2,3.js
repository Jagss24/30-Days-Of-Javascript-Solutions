//Exercise : level 1

class Animal {
    constructor(name, age, color, legs) {
        this.name = name
        this.age = age
        this.color = color
        this.legs = legs
    }
    getname() {
        return `The name of the animal is ${this.name}`
    }
    getage() {
        return `The age of the animal is ${this.age}`
    }
    getcolor() {
        return `The color of the animal is ${this.color}`
    }
}

const animal = new Animal('Tom', 12, 'White', 4)
console.log(animal)
console.log(animal.getname())
console.log(animal.getage())
console.log(animal.getcolor())

class Dog extends Animal {
    constructor(name, age, color, legs, action) {
        super(name, age, color, legs)
        this.action = action
    }
    getaction() {
        return `The dog ${this.action}`
    }
}
const dog = new Dog('Tom', 12, 'White', 4, 'Barks')
console.log(dog.getname())
console.log(dog.getaction())

class Cat extends Animal {
    constructor(name, age, color, legs, action) {
        super(name, age, color, legs)
        this.action = action
    }
    getaction() {
        return `The cat ${this.action}`
    }
}
const cat = new Cat('Tom', 12, 'White', 4, 'Meows')
console.log(cat.getname())
console.log(cat.getaction())


//Exercise: level 2

class AnimalInfo extends Animal {
    getname() {
        return `The full name of animal is ${this.name}`
    }
}
const animalinfo = new AnimalInfo('Tommy', 12, 'White', 4)
console.log(animalinfo.getname())

//Exercise: level 3

class Statistics {
    constructor(arr) {
        this.arr = arr
    }
    count() {
        return `Count : ${this.arr.length}`
    }
    sum() {
        return `Sum: ${this.arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
            }`
    }
    min() {
        return `Min: ${Math.min(...this.arr)}`
    }
}
ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26]
const statistics = new Statistics(ages)
console.log(statistics.count())
console.log(statistics.sum())
console.log(statistics.min())
// just like min do max
// Rest you can give it  a try