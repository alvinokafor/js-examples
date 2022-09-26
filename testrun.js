// FUNCTIONS
function addNumber(a, b) {
  let sum = a + b;
  console.log(sum);
}
// addNumber(5, 5);



function userMsg () {
    let name = prompt('Enter your name')
    let age = prompt('Enter your age')
    let color = prompt('Enter favorite color')

    console.log(`Your name is ${name}, your age is ${age} and your
    favorite color is ${color}`)
}

// userMsg()


const cars = ['Audi', 'Mercedes', 'BMW', 'Lamboghini']

function displayCars (cars) {

   cars.push('Toyota')
   cars.shift()

   cars.forEach(function (car) {
    console.log(car)
   })

}

// displayCars(cars)





// const addNumber = (a, b) => {
//   let sum = a + b;
//   console.log(sum);
// };



const school = [
    {
        name: 'Alvin Okafor',
        score: 60
    },
    
    {
        name: 'Gabriel Ozioma',
        score: 80
    },

    {
        name: 'Daniel Akpan',
        score: 50
    }
]

function printStudents (school) {

    school.forEach(function (student) {
        console.log(`${student.name} has a score of ${student.score}`)
    })

}

function getAverage (school) {

    let total = 0
    let average

    school.forEach(function (student) {
        total += student.score
    })

    average = total / school.length
    console.log(`The students average is ${average}`)
}

getAverage(school)
printStudents(school)