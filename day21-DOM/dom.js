const allTitles = document.getElementsByTagName('h1') //returns HMTMlCollection obhect(array like)
console.log(allTitles) //HTMLCollection
console.log(allTitles.length)

for (let i = 0; i < allTitles.length; i++) {
    console.log(allTitles[i])
}

// returns the same HTMLCollection as byTagName()
const moreTitles = document.getElementsByClassName('title')
console.log(moreTitles)
console.log(moreTitles.length)

for (let i = 0; i < moreTitles.length; i++) {
    console.log(moreTitles[i])
}

// returns single element with given id
const firstElement = document.getElementById('first-title')
console.log(firstElement)

let firstTitle1 = document.querySelector('h1') // select the first available h1 element
let firstTitle2 = document.querySelector('#first-title') // select id with first-title
let firstTitle3 = document.querySelector('.title') // select the first available h1 element with class title

const allQueryTitles = document.querySelectorAll('h1')
console.log(allQueryTitles.length + " length")

for (let i = 0; i < allQueryTitles.length; i++) {
    console.log(allQueryTitles[i])
}

allQueryTitles.forEach(title => console.log(title))

// adding Id and class to fourth title
let addTitles = document.querySelectorAll('h1')
addTitles[3].class = 'title'
addTitles[3].id = 'fourth-title'
// or using the setAttribuite method
//let setTitles = document.querySelectorAll('h1')
//setTitles[3].setAttribute('class', 'title')
//setTitles[3].setAttribute('id', 'fourth-title')
addTitles[3].textContent = 'Fourth title'

//using innerHTML to update a list element 
const lists = `
    <li>30DaysOfPython Challenge Done</li>
            <li>30DaysOfJavaScript Challenge Ongoing</li>
            <li>30DaysOfReact Challenge Coming</li>
            <li>30DaysOfFullStack Challenge Coming</li>
            <li>30DaysOfDataAnalysis Challenge Coming</li>
            <li>30DaysOfReactNative Challenge Coming</li>
            <li>30DaysOfMachineLearning Challenge Coming</li>`
  const ul = document.querySelector('ul')
  ul.innerHTML = lists

  //adding color to the titles
  let theTitles = document.querySelectorAll('h1')
  theTitles.forEach((title, i) => {
    title.style.fontSize = '24px'
    if (i % 2 === 0) {
        title.style.color = 'green'
        title.style.backgroundColor = 'red'
    } else {
        title.style.color = 'red'
        title.style.backgroundColor = 'green'
    }
  })