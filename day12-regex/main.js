// --a regex pattern is formed by a pattern b/w 2 forward slashes and
//   an optional flag after the second slash
// --you can also use regex with the RegExp constructor

// m is a flag to search multiline

//// using the constructor
let pattern = 'love'
let regEx = new RegExp(pattern) // no flag
let regexF = new RegExp(pattern, 'gi') // global and insensitive flags


/// without the regex constructor
let newRegex = /love/gi // will any occorance of word regardless of case

// methods that can be used with regex
// match(pattern) returns an array of all the matches if global specified
// replace(pattern, replacer) returns a substring with the first match replaced, replaces all if global flag added

const aPattern = /[Aa]pple|[Bb]anana/g // this square bracket mean either A or a
const txt = 'Apple and banana are fruits. An old cliche says an apple a day a doctor way has been replaced by a banana a day keeps the doctor far far away. '
const matches = txt.match(aPattern)

console.log(matches)  

const numPattern = /\d+/g  // d is a special character which means digits, plus sign means more than one digit
const numtxt = 'This regular expression example was made in January 12,  2020.'
const numMatches = numtxt. match(numPattern)

console.log(numMatches)  // ["12", "2020"], this is not what we want

// EXERCISE LEVEL 1
let incomeString = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
let incomeArr = incomeString.match(/\d+/g)
console.log(incomeArr)
let income = 0
incomeArr.forEach((num) => {
    income = income + +num
})
console.log(income)

// checks if a given string is a valid javascript variable name 
const isValid = (string) => {
    let pattern = /-/
    let numPatern = /^[0-9]/
    console.log(pattern.test(string))
    if (pattern.test(string) === true || string.match(numPatern) !== null) {
        return false
    } else {
        return true
    }
}

let bool = isValid('9tesest')
console.log(bool)

// function that returns ten most frequent words in a string
const mostFrequent = (string) => {
    let cleanedString = string.toLowerCase().replace(/[.]/g, '')
    console.log('cleaned' + cleanedString)
    let words = cleanedString.split(/\s/)
    console.log(words)
    let wordCounts = {}
    let topTen = []
    let maxCount = 0

    for (const word of words) {
        wordCounts[word] = (wordCounts[word] || 0) + 1
        if (wordCounts[word] >= maxCount) {
            maxCount = wordCounts[word]
            topTen.unshift(maxCount)
        }
    }

    console.log(topTen.splice(0, 10))
    return wordCounts    
}

paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
console.log(mostFrequent(paragraph))