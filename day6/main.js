let string = 'letters'
console.log(string.length)

let arr = ['banana', 'orange', 'mango', 'lemon']
let revArr = []
for (let i = arr.length - 1; i >= 0; i--) {
    revArr.push(arr[i])
}
console.log(revArr)


//exercise 3
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]

  let sortedCountries = countries.sort()
  console.log(sortedCountries)

  let countriesWithLand = []
  for (let i = 0; i < sortedCountries.length; i++) {
      if (sortedCountries[i].includes('land')) {
          countriesWithLand.push(sortedCountries[i])
      }
  }
  console.log(countriesWithLand)

  let maxChars = 0
  let maxCharsCountry
  for (let i = 0; i < sortedCountries.length; i++) {
    if (sortedCountries[i].length > maxChars) {
        maxChars = sortedCountries[i].length
        maxCharsCountry = sortedCountries[i]
    }
}
console.log(maxCharsCountry)
console.log(maxChars)

let fourCharsOnly = []
for (let i = 0; i < sortedCountries.length; i++) {
    if (sortedCountries[i].length === 5) {
        fourCharsOnly.push(sortedCountries[i])
    }
}
console.log(fourCharsOnly)

let capRevArr = []
for (let i = sortedCountries.length - 1; i >= 0; i--) {
    capRevArr.push(sortedCountries[i].toUpperCase())
}
console.log(capRevArr)

let person = prompt('enter name')