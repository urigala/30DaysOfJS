// set can only have unique elements 
const companies = new Set()
console.log(companies)

// creating a set from an array
const languages = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
]
// this will only return English, Finnish, French, and Spanish only once each  
const setOfLangauges = new Set(languages)
console.log(setOfLangauges)

for (let lang of setOfLangauges) {
    console.log(lang)
}

setOfLangauges.add('Greek')
setOfLangauges.add('Korean')
console.log(setOfLangauges.size)
for (let lang of setOfLangauges) {
    console.log(lang)
}

const languages2 = [
    'English',
    'Finnish',
    'English',
    'French',
    'Spanish',
    'English',
    'French',
]

let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]

let A = new Set(a)
let B = new Set(b)

// filter returns the element that passes the test, creates an array
let c = a.filter((num) => B.has(num))
let C = new Set(c) // use that return array to create a set, removes duplicates if any

console.log(C)

// EXERCISES 
const aa = [4, 5, 8, 9]
const bb = [3, 4, 5, 7]
const nordics = ['Finland', 'Sweden', 'Norway']

// let aSet = {} this is an object
let fullSet = new Set()
for (let i = 0; i < 11; i++)  {
    fullSet.add(i)
}
console.log(fullSet)
fullSet.delete(0)
console.log(fullSet)
fullSet.clear
let strings = ['one', 'two', 'three']
let aSet = new Set(strings) // creates a new set from a passed array
console.log(aSet)

let countryMap = new Map()
for (let i = 0; i < languages.length; i++) {
    countryMap.set(languages[i], languages[i].length)
}
console.log(countryMap)


