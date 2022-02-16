// destructuring allows us to ge the items of an array in a more concise way
const numbers = [1, 2, 3]
let [numOne, numTwo, numThree] = numbers
// here, we got each array item by only using one line of code
// each item on the variable array is a varibale that can be used
// we denote we are destructuring an array by using brackets
console.log(numOne, numTwo, numThree)


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
let { width: w, height: h, area: a, perimeter: p } = rectangle
console.log(w, h, a, p)
