// destructuring allows us to ge the items of an array in a more concise way
const numbers = [1, 2, 3]
let [numOne, numTwo, numThree] = numbers
// here, we got each array item by only using one line of code
// each item on the variable array is a varibale that can be used
// we denote we are destructuring an array by using brackets
console.log(numOne, numTwo, numThree)

// use the spread operator to assign the rest of vars in an array to a new array
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let [num1, num2, num3, ...rest] = nums

console.log(num1, num2, num3)
console.log(rest)


// we can also destructure objects
// destructured objects are denoted by the use of {}
// when destructuring an object, the name of the varible should 
// be exactly the same as its corresponding key in the object
const rectangle = {
    width: 20,
    height: 10,
    area: 200
  }

let { width, height, area, perimeter } = rectangle
// perimeter returns undefined becasue it doesnt exist in the object  
console.log(width, height, area, perimeter)

// you can rename during destructuring if you wish to use new var names 
let { width: w, height: h, area: a} = rectangle
console.log(w, h, a)


//using the spread operator with arrays 
let evens = [2, 4, 6, 8]
let odds = [1, 3, 5, 7]
let evenNums = [...evens] // copies the evens array into a new array
let oddNums = [...odds] // copies the odds into a new array

let allNums = [...evenNums, ...oddNums] // creaates a new array from two arrays
console.log(allNums)

// you can use the spread operator to copy an object as well
const user = {
    name:'Asabeneh',
    title:'Programmer',
    country:'Finland',
    city:'Helsinki'
  }
// you can modify a key at the same time your using spread
const copiedUser = {...user, title:'instructor'}
console.log(copiedUser)

// you can use the spread operator to define a function that takes an unlimited number of arguments
// using the spread operator as param defines this
const sumAllNums = (...args) => {
let sum = 0
for (const num of args){
    sum += num
}
return sum

}
// passing multiple arguments at the same time
console.log(sumAllNums(1, 2, 3,4,5))

// EXERCISES

// destructuring constants array
const constants = [2.72, 3.14, 9.81, 37, 100]
let [e, pi, gravity, humanTemp, boilingPoint] = constants
console.log(e, pi, gravity, humanTemp, boilingPoint)

// destructuring rect object
const rectangle2 = {
width: 20,
height: 10,
area: 200,
perimeter: 60
}
let {width: wi, height: he, area: ar, perimeter: per} = rectangle2
console.log(wi, he, ar, per)

//EXERCISES LEVEL 3

// working with this item
const users = [
    {
      name:'Brook',
      scores:75,
      skills:['HTM', 'CSS', 'JS'],
      age:16
    },
    {
      name:'Alex',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'David',
      scores:75,
      skills:['HTM', 'CSS'],
      age:22
    },
    {
      name:'John',
      scores:85,
      skills:['HTML'],
      age:25
    },
    {
      name:'Sara',
      scores:95,
      skills:['HTM', 'CSS', 'JS'],
      age: 26
    },
    {
      name:'Martha',
      scores:80,
      skills:['HTM', 'CSS', 'JS'],
      age:18
    },
    {
      name:'Thomas',
      scores:90,
      skills:['HTM', 'CSS', 'JS'],
      age:20
    }
]

for (let {name, scores, skills, age} of users) {
    if (skills.length < 2) {
        console.log(name)
    }
} 

const student = ['Dd', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
let [name, skills, jsScore, reactScore=100] = student
console.log(name, skills, jsScore, reactScore)

// array of student array info
const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]

// fucntion to convert an array to a structure object
let convertArrayToObject = (arr) => {
    let student = {}
    let studentsArr = [] 
    for ([name, skills, scores] of arr) {
        student['name'] = name
        student.skills = skills
        student.scores = scores
        studentsArr.push(student)
        if (skills.length < 10) {
            console.log(' lentht' + name)
        }
    }
    
    console.log(studentsArr)
}

convertArrayToObject(students)