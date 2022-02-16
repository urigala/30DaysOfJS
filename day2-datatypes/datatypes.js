console.log(`the sum of 2 and 3 is 5`)
let a = 2
let b = 3
console.log(`the sum of ${a} and ${b} is ${a + b}`)

let firstName = 'asebeneh'
let lastName = 'yetayeh'
let country = 'finland'
let city = 'helsinki'

let fullName = firstName + ' ' + lastName

let personalInfo = `i am ${fullName} from ${city}, ${country}`
console.log(personalInfo)

let c = 2
let d = 3
console.log(`${d} is greater than ${c}: ${d > c}`)

let js = 'javascript'
console.log(js.length)
console.log(firstName.length)
//acessing the last index of a string
let lastIndex = js.length - 1
console.log(lastIndex)
console.log(js.toUpperCase())

// the substr metod is depreacted, it included the stopping index in the return
console.log(js.substr(2,8))
console.log(js.substr(2,9))
console.log(js.substr(2,7))

// the substring method doesnt include the character at the stopping index
// just up to the one before
console.log(js.substring(0,5))
console.log(js.substring(1,4))

// the split method returns an array
//using only the split method with not params will return and array with one 
// object, using a param to separate the string will return an array with an 
// object at each separation
let longString = '30 days of javascript'
// returns an array with one value
let stringArray = longString.split()
console.log(stringArray)
console.log(stringArray.length) // 1
// will return an array with  a value denoted at the split
let sepStringArray = longString.split(' ')
console.log(sepStringArray)

let aName = 'Asabeneh'

console.log(aName.split())    // Change to an array - > ["Asabeneh"]
console.log(aName.split(''))  // Split to an array at each letter ->  ["A", "s", "a", "b", "e", "n", "e", "h"]

let countries = 'Finland, Sweden, Norway, Denmark, and Iceland'

// becareful when using split, check the array returns as you expect
// and there arent any weird chars such as spaces
console.log(countries.split(','))  // split to any array at comma -> ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]
console.log(countries.split(', ')) //  ["Finland", "Sweden", "Norway", "Denmark", "and Iceland"]

// checks if a substring is present, case sensitive 
console.log(longString.includes('days')) // true
console.log(longString.includes('Days')) // false

// takes old string and replaces it with new string
// its case sensitive, will return old string if no match found
let newString = longString.replace('30', 'thirty')
console.log(newString)
let newNewString = longString.replace('JAVA', 'python')
console.log(newNewString)

// charat returns the char at the string index
let chartAtString = 'charat practive string'
console.log(chartAtString.charAt(16))

// indexOf returns the first occurance of the provided string
let indexOfString = longString.indexOf('days')
console.log(indexOfString) // 3
console.log(longString.indexOf('d')) // 3
console.log(longString.indexOf('Days')) // -1, returns this if provided string doesnt exist

// lastIndexOf returns the last occurance of the proived string
console.log(longString.lastIndexOf('java'))

// concat joins many string into one
// no space between strings
let concatString = 'first'
console.log(concatString.concat(longString, newNewString))

// other methods
// startsWith() checks if the string starts with given string
// endsWith() checks if the string ends with the given string
// search() returns the index of the first occurrance of the passed string
// search can take a regilar expresiion, i.e, flags (ignore case and so forth)

//match() returns the first match
// using match with a regular expression will return an array of all the occurances 
let loveString = 'I love javascript. if you do not love javascript what else can you love'
console.log(loveString.match('love'))
let pattern = /love/gi // regular expression, g: search global, i: case insensitive
console.log(loveString.match(pattern))
console.log(loveString.match(/you/gi))

//regular expressions, searching for all the numbers 
let txt = 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge'
let regEx = /\d+/ //regular expression
console.log(txt.match(regEx)) //returns first match
console.log(txt.match(/\d+/g)) //returns all matches as an array, becase of g flag

//repeat() - returns string repeated as many times as num passed as param
console.log('DAY 2 EXERCISES:')
// DAY 2 EXERCISES
let challenge = '30 Days of JavaScript'
console.log(challenge)
console.log(challenge.length)
console.log(challenge.toUpperCase())
console.log(challenge.toLowerCase())
console.log(challenge.substring(0,1))
console.log(challenge.substring(3, challenge.length))
console.log(challenge.includes('Script'))
console.log(challenge.split())
console.log(challenge.split(' ')) // should return an array with multiple values
let companiesString = 'facebook, google, microsoft, apple, iBM, Oracle, Amazon'
console.log(companiesString.split(', '))
console.log(challenge.replace('JavaScript', 'Python'))
console.log(challenge.charAt(15))
console.log(challenge.charCodeAt(11))
console.log(challenge.indexOf('a'))
console.log(challenge.lastIndexOf('a'))
let sampleString = 'You cannot end a sentence with because because because is a conjunction'
console.log(sampleString.indexOf('because'))
console.log(sampleString.lastIndexOf('because'))
console.log(sampleString.search('because'))
console.log(challenge.startsWith('30'))
console.log(challenge.endsWith('Script'))
console.log(challenge.match(/a/gi))
console.log(challenge.concat(sampleString))
console.log(challenge.repeat(5))

// level 2 pf exercises
console.log('The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.')
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.")
console.log(typeof '10')
console.log(Math.ceil(parseFloat('9.8')) === 10)
let pyString = 'python'
let jarString = 'jargon'
console.log(pyString.includes('on') && jarString.includes('on'))
let sentence = 'I hope this course is not full of jargon'
console.log(sentence.includes('jargon'))
console.log(Math.floor(Math.random() * 100))
console.log(Math.floor(Math.random() * 255))
console.log(Math.floor(Math.random() * 50) + 50)
function randomNumber (min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
}
console.log(randomNumber(25, 50))
let thisString = 'JavaScript'
console.log(thisString.charAt(Math.floor(Math.random() * 10)))

// level 3 excersises 
let loveSentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log(loveSentence.match(/love/gi))
console.log(sampleString.match(/because/gi))

const weirdSentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
let cleanSentence = weirdSentence.replace(/[@#$%&;.!?]/g, '')
console.log(cleanSentence)

// find the most repeated word in the cleaned sentence 
let cleanedArray = cleanSentence.split(/\s/g);
console.log(cleanedArray)

let mostCommon = (anArray) => {
    let words = anArray
    let occurances = {}

    for (let word of words) {
        if (occurances[word]) {
            occurances[word]++
        } else {
            occurances[word] = 1
        }
    }
    console.log(occurances)
    let max = 0
    let mostRepeatedWord = ''

    for (let word of words) {
        if (occurances[word] > max) {
            max = occurances[word];
            mostRepeatedWord = word
        }
    }
    console.log(mostRepeatedWord)
}

mostCommon(cleanedArray)


let annualText = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let annualArray = annualText.match(/\d+/g)
console.log(annualArray)
let annualIncome = +annualArray[0] + +annualArray[1] + +annualArray[2]
console.log(annualIncome)







