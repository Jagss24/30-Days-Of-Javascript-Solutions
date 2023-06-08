//q2

const setofnumbers = new Set()
for (let i = 0; i < 11; i++) {
    setofnumbers.add(i)
}
console.log(setofnumbers)

setofnumbers.delete(10)
console.log(setofnumbers)

setofnumbers.clear()
console.log(setofnumbers)

const arr = ['a', 'e', 'i', 'o', 'u']
const setofstrings = new Set(arr)
console.log(setofstrings)

const Countries = [
    ['Finland', 7],
    ['India', 5],
    ['Russia', 6]
]
const map = new Map(Countries)
console.log(map)

//Exercise level 2
let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6, 7]
let c = [...a, ...b]

const A = new Set(a)
const B = new Set(b)
const C = new Set(c)
console.log(C)

let I = a.filter((num) => B.has(num))
console.log(I)

//Exerxise level 3

const setOfLanguages = new Set()
countries.forEach(country => country.languages.forEach(language => {
    setOfLanguages.add(language)
})
)
console.log(setOfLanguages.size)

function mostSpokenlanguages(countries, limit) {
    const languagecount = new Map()
    countries.forEach(country => {
        country.languages.forEach(language => {
            if (languagecount.has(language)) {
                languagecount.set(language, languagecount.get(language) + 1);
            }
            else {
                languagecount.set(language, 1)
            }
        })
    })
    console.log(languagecount)

    const sortlang = Array.from(languagecount.entries()).sort((a, b) => b[1] - a[1])

    console.log(sortlang)

    const toplimit = sortlang.slice(0, limit).map(entry => {
        return { language: entry[0], count: entry[1] }
    })
    return toplimit
}
console.log(mostSpokenlanguages(countries, 10))
console.log(mostSpokenlanguages(countries, 3))
