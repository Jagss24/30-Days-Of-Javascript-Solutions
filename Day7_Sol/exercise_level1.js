//Exercise level 1
function fullName() {
    console.log("Jagannath Samantra")
}
fullName()

function FullName(firstName, lastName) {
    return `${firstName} ${lastName}`
}
console.log(FullName('Jagannath', 'Samantra'))

function addNumbers(n1, n2) {
    return n1 + n2
}
console.log(addNumbers(3, 4))

function areaOfRectangle(l, b) {
    return l * b
}
console.log(areaOfRectangle(3, 5))

function perimeterOfRectangle(l, b) {
    return 2 * (l + b)
}
console.log(perimeterOfRectangle(7, 4))

function volumeOfRectPrism(l, b, h) {
    return l * b * h
}
console.log(volumeOfRectPrism(2, 3, 4))

function areaofcircle(r) {
    return 3.14 * r ** 2
}
console.log(areaofcircle(4))

function circumofcircle(r) {
    return 2 * 3.14 * r
}
console.log(circumofcircle(4))

function density(m, v) {
    return m / v
}
console.log(density(50, 10))

function speed(distance, time) {
    return distance / time
}
console.log(speed(500, 10))

function weight(m, g) {
    return m * g
}
console.log(weight(50, 9.81))

function convertCelsiusToFahrenheit(celsius) {
    let fahrenheit = (celsius * (9 / 5)) + 32
    return fahrenheit
}
console.log(convertCelsiusToFahrenheit(100))

function bmi(w, h) {
    let bmi = w / (h ** 2)
    if (bmi < 18.5) {
        console.log('Underweight: BMI is less than 18.5')
    }
    else if (bmi => 18.5 && bmi <= 24.9) {
        console.log('Normal weight: BMI is 18.5 to 24.9')
    }
    else if (bmi >= 25 && bmi <= 29.9) {
        console.log('Overweight: BMI is 25 to 29.9')
    }
    else {
        console.log('Obese: BMI is 30 or more')
    }
}
bmi(50, 0.0158) //her height is is m^2

function checkSeason(month) {
    let monthlowercase = month.toLowerCase()
    const autumn = ['september', 'october', 'november']
    const winter = ['januaury', 'december', 'february']
    const spring = ['april', 'may', 'june']
    const summer = ['june', 'july', 'august']
    if (autumn.includes(monthlowercase) == true) { return 'Autumn' }
    else if (spring.includes(monthlowercase) == true) { return 'Spring' }
    else if (winter.includes(monthlowercase) == true) { return 'Winter' }
    else if (summer.includes(monthlowercase) == true) {
        return 'Summer'
    }
    else {
        return 'Your spelling can maybe worng please enter with right spelling'
    }
}
console.log(checkSeason('MAY'))

function findMax(n1, n2, n3) {
    if (n1 > n2) {
        if (n1 > n3) {
            return `${n1} is greatest`
        }
        else {
            return `${n3} is greatest`
        }
    }
    else if (n2 > n1) {
        if (n2 > n3) {
            return `${n2} is greatest`
        }
        else {
            return `${n3}  is greatest`
        }
    }
}
console.log(findMax(6, 4, 3))