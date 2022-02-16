let person = {
    firstName: 'Asabeneh',
    lastName: 'Yetayeh',
    age: 250,
    country: 'Finland',
    city: 'Helsinki',
    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Node',
        'MongoDB',
        'Python',
        'D3.js'
      ],
    isMarried: true
}
console.log(person)
console.log(person.age)
console.log(person.firstName)
console.log(person.lastName)
console.log(person.skills)


let rectangle = {
    width: 20,
    length:30
}
console.log(rectangle)

let newPersonObj = Object.assign({}, person)
console.log(newPersonObj)
let keys = Object.keys(newPersonObj)
console.log(keys)

// EXERCISES 
let dog = {}
console.log(dog)
dog = {
    name:'barko',
    legs: 4,
    color: 'black',
    age: 12,
    bark: function() {
        return 'woof woof'
    }
}
console.log(dog)
console.log(dog.bark())
dog.breed = 'lab'
dog.getDogInfo = function() {
    return this.bark()
}
console.log(dog.breed)
console.log(dog.getDogInfo())

