const sortbyname = countries.sort((a, b) => a.name.localeCompare(b.name));
console.log(sortbyname)

const sortbypopulation = countries.sort((a, b) => a.population - b.population)
console.log(sortbypopulation)

const sortbycapital = countries.sort((a, b) => a.capital.localeCompare(b.capital))
console.log(sortbycapital)

function mostSpokenLanguages(countries, limit) {
    const languagecount = {}
    countries.forEach(country => country.languages.forEach(language => {
        if (languagecount[language]) {
            languagecount[language]++
        }
        else {
            languagecount[language] = 1
        }
    }))

    const sortedlanguage = Object.entries(languagecount).sort((a, b) => b[1] - a[1])

    const toplanguages = sortedlanguage.splice(0, limit)

    const result = toplanguages.map(language => {
        return { language: language[0], count: language[1] }
    })
    return result
}
console.log(mostSpokenLanguages(countries, 10))

function mostpopulated(countries, limit) {
    const sortpop = countries.sort((a, b) => b.population - a.population)

    const toppop = sortpop.splice(0, limit)

    const result = toppop.map(country => {
        return { country: country.name, population: country.population }
    })
    return result
}
console.log(mostpopulated(countries, 10))

