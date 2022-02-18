class Person {
    // constructor initiliazes the object
    constructor(firstName, lastName, age, country, city) {
        console.log(this) // Check the output from here
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.country = country
        this.city = city
    }
    
    // methods for your class
    getFullName() {
        const fullName = this.firstName + ' ' + this.lastName
        return fullName
    }

    //getter and setter methods
    getAge() {
        return this.age 
    }
    setAge(newAge) {
        this.age = newAge
    }

    // static methods are call from the class itself i.e. Person.favoriteSkill()
    static favoriteSkill() {
        const skills = ['HTML', 'CSS', 'JS', 'React', 'Python', 'Node']
        const index = Math.floor(Math.random() * skills.length)
        return skills[index]
      }
      static showDateTime() {
        let now = new Date()
        let year = now.getFullYear()
        let month = now.getMonth() + 1
        let date = now.getDate()
        let hours = now.getHours()
        let minutes = now.getMinutes()
        if (hours < 10) {
          hours = '0' + hours
        }
        if (minutes < 10) {
          minutes = '0' + minutes
        }
    
        let dateMonthYear = date + '.' + month + '.' + year
        let time = hours + ':' + minutes
        let fullTime = dateMonthYear + ' ' + time
        return fullTime
      }

}

const person = new Person('uriel', 'galarza', 131, 'mesico', 'altamirano')
const person2 = new Person('chancla', 'loca', 131, 'mesico', 'altamirano')
const person3 = new Person('loca', 'chancla', 131, 'mesico', 'altamirano')
console.log(person.getAge())
person.setAge(24)
console.log(person.getAge())

console.log(person.getFullName())
console.log(person2)
console.log(person3)
console.log(Person.favoriteSkill())
console.log(Person.showDateTime())

class Student extends Person {
    saySomething() {
      console.log('I am a child of the person class')
    }
  }
  
  const s1 = new Student('Asabeneh', 'Yetayeh', 250, 'finlznd', 'Helsinki')
  console.log(s1)
  console.log(s1.saySomething())
  console.log(s1.getFullName())
