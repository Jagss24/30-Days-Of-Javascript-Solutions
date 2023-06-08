const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand', 'Fingland']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
    { product: 'banana', price: 3 },
    { product: 'mango', price: 6 },
    { product: 'potato', price: ' ' },
    { product: 'avocado', price: 8 },
    { product: 'coffee', price: 10 },
    { product: 'tea', price: '' },
]
let tot = 0
totalprice = products.map(product => {
    return product.price
}).filter(price => { return price > 0; }).reduce((acc, cur) => {
    return acc + cur
})
console.log(totalprice)

sumofproducts = products.reduce((acc, cur) => {
    if (products.price > 0) {
        return acc + cur.price
    }
})
console.log(sumofproducts)

const categorizeCountries = (countries) => {
    let coun = countries.filter(country => {
        return country.toLowerCase().includes('ia') || country.toLowerCase().includes('land')
    })
    return coun
}
console.log(categorizeCountries(countries))

countries.push('Ireland')
countries.push('Iran')
console.log(countries)

// const letterandnumoftimes = (arr) => {
//     let count =0
//     let xyz = { letter: "", numoftimes: '' }
//     xyz.letter = arr.filter(item => {
//         return item.toLowerCase().startsWith('f')
//     })
//     xyz.numoftimes = arr.filter(item => {
//         item.toLowerCase().startsWith('f')
//         count ++
//         return count
//     })
//     return 
// }

if (countries.includes('Finland')) {
    console.log('i')
}
function landnodisu() {
    const char = countries.map(country => { return country.slice(0, 1) })
    console.log(char)
    const finalarr = [];
    let length = 0
    while (length !== char.length) {
        const startsWith = char.filter(country => country.startsWith(char[length]))
        finalarr.push({ 'letter': char[length], 'count': startsWith.length })
        length++
    }
    return finalarr;
}
console.log(landnodisu())

countries.push('Israel')
countries.push('Iraq')
countries.push('India')
console.log(countries)// Ok sow now the countries length has become 11 we can perform the question

const getfirsttencountries = (arr) => {
    let firstencoun = []
    firstencoun = arr.slice(0, 10).map(item => { return item })
    return firstencoun
}
console.log(getfirsttencountries(countries))

const getlasttencountries = (arr) => {
    let reverse = arr.reverse()
    let lastencoun = []
    lastencoun = reverse.slice(0, 10).map(item => { return item })
    sortlastencoun = lastencoun.reverse()
    return sortlastencoun

}
console.log(getlasttencountries(countries))

//We can use also use splice but if the array is too long then we have always have to find its index so we'll first reverse it , slice it then will reverse it back so no worries for indexes


