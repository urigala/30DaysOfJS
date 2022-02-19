// // higher order functions are functions that take function as a param or return a function
// // ------ the function passed as a param is called a callback--------

// function sayHello() {
//     console.log('Hello')
// }
// setInterval(sayHello, 100000) // it prints hello in every second, 1000ms is 1s
// setInterval(() => {
//     console.log('this works')
// }, 300000)

// //setInterval(() => console.log('this works'), 3000)

// // FUNCTIONAL PROGRAMMING
// let sum = 0;
// let numbers = [1, 2, 3, 4, 5, 6]
// numbers.forEach(num => sum+=num)
// console.log(sum)
// // forEach() doesnt return anything, just loops through array
// const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
// countries.forEach((element) => console.log(element.toUpperCase()))

// // map
// /*Arrow function and explicit return
// const modifiedArray = arr.map((element,index) => element);
// */
// //Example
// const mapNumbers = [1, 2, 3, 4, 5]
// const numbersSquare = mapNumbers.map(num => num * num)
// console.log(numbersSquare)
// // map returns a modified array
// const countries2 = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya',
// ]
// let modedCountries = countries2.map(country => country.slice(0, 3))
// console.log(modedCountries)

// //filter will filter items meeting the filtering conditions and put them in new array
// let countryWithLand = countries2.filter(country => country.includes('land'))
// console.log(countryWithLand)

// let countryEndsIa = countries2.filter(country => country.endsWith('ia'))
// console.log(countryEndsIa)

// const scores = [
//     { name: 'Asabeneh', score: 95 },
//      { name: 'Lidiya', score: 98 },
//     { name: 'Mathias', score: 80 },
//     { name: 'Elias', score: 50 },
//     { name: 'Martha', score: 85 },
//     { name: 'John', score: 100 },
// ]
// let goodScores = scores.filter(score => score.score > 80)
// console.log(goodScores)


// // not sure exactly how reduce works,  returns one number
// const numbers2 = [1, 2, 3, 4, 5]
// const sum2 = numbers2.reduce((acc, cur) => acc + cur, 0)
// console.log(sum2)
  
// // every checks if all elements meet the condition, returns boolean
// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// const arrAllStr = names.every((name) => typeof name === 'string') // Are all strings?
// console.log(arrAllStr)

// // find will return the first element that satisfies the condtion
// const ages = [24, 22, 25, 32, 35, 18]
// const age = ages.find((age) => age < 20)
// console.log(age)


// //sort() sorts strings as default, not numbers, to sort numbers we must pass a callback function to sort()
// const numbers3 = [9.81, 3.14, 100, 37]
// // Using sort method to sort number items provide a wrong result. see below
// console.log(numbers3.sort()) //[100, 3.14, 37, 9.81]
// numbers3.sort(function (a, b) {
//   return a - b
// })

// console.log(numbers3) // [3.14, 9.81, 37, 100]

// // sorts the numbers in descending order
// numbers3.sort(function (a, b) {
//   return b - a
// })
// console.log(numbers3) //[100, 37, 9.81, 3.14]

//EXERCISES
// forEach loops throguh the elements one by one and modifies orignal array
// map applies a callback function to each element and returns a new array 
// filter applies a callback function with a filtering condotiion, returns array of elements that match the condtion
// reduce not sure

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: '' },
  { product: 'potato', price: 7 },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

console.log(countries.forEach(elem => console.log(elem)))
console.log(countries.length)
console.log(names.forEach(elem => console.log(elem)))
console.log(numbers.forEach(elem => console.log(elem)))

let upperCountries = countries.map(country => country.toUpperCase())
console.log(upperCountries)
let lengthCountries = countries.map(country => country.length)
console.log(lengthCountries)
let squaredNums = numbers.map(num => num*num)
console.log(squaredNums)
let upperNames = names.map(name => name.toUpperCase())
console.log(upperNames)

let filterCountries = countries.filter(country => country.includes('land') || country.includes('Land'))
console.log(filterCountries)
let countryE = countries.filter(country => country.startsWith('E'))
console.log(countryE)
let valuedPrice = products.filter(product => product.price > 0)
console.log(typeof products[2].price)
console.log(valuedPrice)

function getStringLists(array) {
    return array.filter(elem => typeof elem === string)
} 

let numSum = numbers.reduce((previous, current) => previous + current, 0)
console.log(numSum)

let countryConcat = countries.reduce((prev, curr) => prev.concat(curr))
console.log(countryConcat)

let totalPrice = products.map(obj => obj.price).filter(price => price > 0).reduce((accumu, curr) => accumu + curr, 0)
console.log(totalPrice)