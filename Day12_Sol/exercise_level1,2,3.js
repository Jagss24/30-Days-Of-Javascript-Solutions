const text = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
const pattern = /\d+/g
const match = text.match(pattern)
let sum = 0
for (i = 0; i < match.length; i++) {
    sum += parseInt(match[i])
}
console.log(sum)

let text1 = 'The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction'
const pattern1 = /-?\d+/g
const match1 = text1.match(pattern1)
const sort = match1.map(elements => { return Number(elements) })
console.log(sort)
let distance = sort[sort.length - 1] - sort[0]
console.log(distance)


function is_Valid_Variable(variable) {
    const pattern = /^[a-zA-Z_$][a-zA-Z_$0-9$]*$/
    return pattern.test(variable)
}

console.log(is_Valid_Variable('first_name'))
console.log(is_Valid_Variable('1first_name'))
console.log(is_Valid_Variable('first_name1'))
console.log(is_Valid_Variable(('first-name')))

//Exercise _level 2

let paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`



function tenMostFrequentWords(paragraph, limit) {
    let pattern2 = /\b\w{1,}\b/g
    const match2 = paragraph.match(pattern2)
    const count = {}
    match2.forEach(elements => {
        if (count[elements]) {
            count[elements]++
        }
        else {
            count[elements] = 1
        }
    })

    const sortedwords = Object.entries(count).sort((a, b) => b[1] - a[1])

    const topwords = sortedwords.splice(0, limit)

    const result = topwords.map(word => {
        return { word: word[0], count: word[1] }
    })
    return result
}

console.log(tenMostFrequentWords(paragraph, 10))

//Exercise: level 3

let sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`

function cleanText(sentence) {
    let pattern = /[%$@&#;]/g
    let replace = sentence.replace(pattern, '')
    return replace
}
console.log(cleanText(sentence))

