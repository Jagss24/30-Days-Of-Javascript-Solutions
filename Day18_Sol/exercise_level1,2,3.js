//Exercise : level 1
const countriesAPI = 'https://restcountries.com/v2/all'
fetch(countriesAPI).then(result => result.json()).then(
    data => {
        data.forEach(element => {
            console.log('Name : ' + element.name)
            console.log('Capital : ' + element.capital)
            console.log('Languages : ' + element.languages)
            console.log('Population : ' + element.population)
            console.log('Area : ' + element.area)
        });
    }).catch(err => console.log(err))

//Exercise : level 2

const catsAPI = 'https://api.thecatapi.com/v1/breeds'

fetch(catsAPI).then(result => result.json()).then(
    data => {
        data.forEach(element => {
            console.log('CatName : ' + element.name)
        })
    }).catch(err => console.log(err))


// Exercise :  level 3

const fetchCat = async () => {
    try {
        const reponse = await fetch(catsAPI)
        const result = await reponse.json()
        const weight = await result.map(cat => cat.weight)
        console.log(weight) // this is not necessary but'l understand to help you more
        const metrics = await weight.map(elem => elem.metric && parseFloat(elem.metric))
        console.log(metrics) //this too
        const tot = metrics.reduce((acc, cur) => acc + cur, 0)
        const avg = tot / metrics.length
        console.log('Average : ' + avg)
    }
    catch (err) {
        console.error(err)
    }
}
fetchCat()

const fetchCountry = async () => {
    try {
        const response = await fetch(countriesAPI)
        const result = await response.json()
        const population = result.map(elem => {
            return {
                name: elem.name,
                population: elem.population
            }
        })
        const sortpopulation = population.sort((a, b) => b.population - a.population)
        const top10mostpopualted = sortpopulation.slice(0, 10)
        console.log(top10mostpopualted)
    }
    catch (err) {
        console.log(err)
    }
}
fetchCountry() // I've sorted the countries by population you can do it by area also

const fetchCountryApi = async () => {
    const response = await fetch(countriesAPI)
    const result = await response.json()
    const officialLanguages = new Set();

    result.forEach(country => {
        if (country.languages && country.languages.length > 0) {
            country.languages.forEach(language => {

                officialLanguages.add(language.name)
            })
        }
    })
    console.log(officialLanguages)
    const totalLanguages = officialLanguages.size
    console.log(totalLanguages)
}
fetchCountryApi()