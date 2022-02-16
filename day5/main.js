let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'

// i replace all of the chars using regular expression (regex)
let wordsString = text.replace(/[,.]/g, '')
// i then split all the words into an array at the white space
// i culd have used let wordsArr = wordsString.split(' ')
// since i know that theres only white spaces bw the words
let wordsArr = wordsString.split(/\s/g)

console.log(wordsArr)
console.log(wordsArr.length)

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meat') // adds to beginning 
console.log(shoppingCart)
shoppingCart.push('Sugar')
console.log(shoppingCart)
let honeyIndex = shoppingCart.indexOf('Honey')
shoppingCart.splice(honeyIndex, 1) // splice starts removing at given index for however many items given
console.log(shoppingCart)
let teaIndex = shoppingCart.indexOf('Tea')
shoppingCart[teaIndex] = 'Green Tea'
console.log(shoppingCart)

let ethBool = countries.includes('Ethiopia')
if (ethBool) {
    console.log('it esxists!')
} else {
    
    console.log(webTechs)
}
console.log(countries)

let sassBool = webTechs.includes('Sass')

if (sassBool) {
    console.log('sass is here!')
} else {
    webTechs.push('Sass')
    console.log(webTechs)
}
console.log(webTechs)

const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
let fullStack = frontEnd.concat(backEnd)
console.log(fullStack)

//numsArray.sort((a, b) => (a - b)) this sorts an array of numbers

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
ages.sort((a, b) => (a-b))
console.log(ages)
console.log('min age' + ages[0])
console.log('max age' + ages[ages.length - 1])
let ageSum = 0
for (let i = 0; i < ages.length; i++) {
    ageSum = ageSum + ages[i]
}
console.log('average' + ageSum/ages.length)

console.log(countries.slice(0, 10))
console.log(countries.length)

console.log(countries.length % 2 === 1)

let newEvenCountries = []
if (countries.length % 2 === 1) {
    console.log('middle country' + countries[Math.floor(countries.length/2)])
    newEvenCountries = countries
} else {
    console.log('first middle country' + countries[Math.floor(countries.length/2)])
    console.log('second middle country' + countries[Math.ceil(countries.length/2)])
    
}

newEvenCountries.push('Mexico')
let firstArr = newEvenCountries.splice(0, 6)
let secondArr = newEvenCountries.splice(0, 6)
console.log(firstArr)
console.log(secondArr)
