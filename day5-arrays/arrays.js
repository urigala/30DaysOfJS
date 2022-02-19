//let arr = [] //recommened way of creating an array
//console.log(arr)

// creates array and fills it with xs
let eightEmptyValues = new Array(8).fill('x')
console.log(eightEmptyValues)

//indexOf returns -1 if item does not exist in an array
// lastIndexOf returns the last index of an occuring num, -1 otherwise 

// EXERCISES LEVEL 1
let arr = []
console.log(arr)
let newArr = [1, 2, 3, 4, 5, 6, 7]
console.log(newArr.length)
console.log(newArr[0])
console.log(newArr[Math.floor(newArr.length/2)])
console.log(newArr[newArr.length - 1])


let itCompanies = ['facebook', 'google', 'microsoft', 'apple', 'IBM', 'Oracle', 'amazon']
console.log(itCompanies)
console.log(itCompanies.length)
console.log(itCompanies[0])
console.log(itCompanies[Math.floor(itCompanies.length/2)])
console.log(itCompanies[itCompanies.length - 1])

itCompanies.forEach((company) => {
    console.log(company.toUpperCase())
})

console.log(`${itCompanies[0]}, ${itCompanies[1]}, ${itCompanies[2]}, ${itCompanies[3]} are nbiy companei`)

let checkCompany = (company) => {
    if (itCompanies.includes(company)) {
        console.log(company)
    } else {
        console.log('company not found')
    }
}
checkCompany('salesforce')

itCompanies.forEach(company => {
    let firstIndex = company.indexOf('o')
    if (company.indexOf('o') !== company.lastIndexOf('o') && firstIndex !== -1) {
        console.log(company)
    }
})

// console.log(itCompanies.sort())
// console.log(itCompanies.reverse())
// console.log(itCompanies.slice(3))
// console.log(itCompanies.slice(0, 4))

let remItComs = itCompanies
//console.log(remItComs.splice(0,1))
console.log(remItComs.splice(3, 1))
console.log(remItComs)
console.log(remItComs.splice(remItComs.length - 1, 1))
console.log(remItComs)
console.log(remItComs.splice())
console.log(remItComs)


