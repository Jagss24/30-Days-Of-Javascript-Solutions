//Exercise level 3

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

ages.sort()
console.log(ages)

console.log("the min is " + ages[0] + " an the max is " + ages[ages.length - 1])
console.log(ages.length)

let evenorodd = parseInt(ages.length)
console.log(evenorodd)
console.log(typeof (evenorodd))
console.log(evenorodd / 2)
if ((evenorodd % 2) == 0) {
    let med = parseFloat((ages[parseInt((ages.length - 1) / 2)] + ages[parseInt((ages.length) / 2)]) / 2)
    console.log("the median is : " + med)
}
else {
    let med = parseInt((ages.length) / 2)
    console.log(med)
    console.log(ages[med])
}

let tot = 0;
for (let i = 0; i < ages.length; i++) {
    tot += ages[i]
}
console.log(tot / ages.length)



//Q2
let eoro = countries1.length
console.log(eoro)
if (eoro % 2 == 0) {
    let med = (countries1[parseInt((countries1.length - 1) / 2)] + " " + countries1[parseInt((countries1.length) / 2)])
    console.log(med)
}
else {
    let med = parseInt((countries.length) / 2)
    console.log(countries[med])
}


//Q3
let divide = parseInt((countries1.length) / 2)
console.log(countries1.length)
console.log(divide)
if (countries1.length % 2 == 0) {
    let c1 = countries1.splice(0, divide)
    console.log(c1)
    console.log(c1.length)

    let c2 = countries1.splice(0, divide)
    console.log(c2)
    console.log(c2.length)
}
else {
    let c1 = countries1.splice(0, divide + 1)
    console.log(c1)
    console.log(c1.length)

    let c2 = countries1.splice(0, divide)
    console.log(c2)
    console.log(c2.length)
}