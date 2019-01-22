// Let's get some practice writing a few objects for a new group of interns at a small business.

// ==== Challenge 1: Writing Objects ==== 
// HR needs some information on the new interns put into a database.  Given an id, email, first name, and gender. Create an object for each person in the company list:

// 1,mmelloy0@psu.edu,Mitzi,F
// 2,kdiben1@tinypic.com,Kennan,M
// 3,kmummery2@wikimedia.org,Keven,M
// 4,gmartinson3@illinois.edu,Gannie,M
// 5,adaine5@samsung.com,Antonietta,F

// Example format of an intern object: 1,examples@you.edu,Example,F
const example = {
  "id": 0,
  "name": "Example",
  "email": "examples@you.edu",
  "gender": "F"
}

// Write your intern objects here:

// I'm too lazy to type all that out
const rawData = `1,mmelloy0@psu.edu,Mitzi,F
2,kdiben1@tinypic.com,Kennan,M
3,kmummery2@wikimedia.org,Keven,M
4,gmartinson3@illinois.edu,Gannie,M
5,adaine5@samsung.com,Antonietta,F`

const interns = {};

rawData.split('\n').forEach(line => {
  const intern = line.split(',')
  const name = intern[2].toLowerCase();
  interns[name] = {
    id: intern[0],
    name: intern[2],
    email: intern[1],
    gender: intern[3]
  }
})

// ==== Challenge 2: Reading Object Data ==== 
// Once your objects are created, log out the following requests from HR into the console:

// Mitzi's name
console.log("Mitzi's name:", interns.mitzi.name);

// Kennan's ID
console.log("Kennan's ID:", interns.kennan.id);

// Keven's email
console.log("Keven's email:", interns.keven.email);

// Gannie's name
console.log("Gannie's name:", interns.gannie.name);

// Antonietta's Gender
console.log("Antonietta's gender:", interns.antonietta.gender);

// ==== Challenge 3: Object Methods ==== 
// Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log provided as a hint.
// console.log(kennan.speak());

interns.kennan.speak = function () {
  return `Hello, my name is ${this.name}!`
}
console.log('Kennan speaks:', interns.kennan.speak());

// Antonietta loves math, give her the ability to multiply two numbers together and return the product. Use the console.log provided as a hint.
//console.log(antonietta.multiplyNums(3,4));

interns.antonietta.multiplyNums = function (a, b) {
  return a * b
}
console.log('Antonietta multiplies:', interns.antonietta.multiplyNums(3, 4));

// === Great work! === Head over to the the arrays.js file or take a look at the stretch challenge

// ==== Stretch Challenge: Nested Objects and the this keyword ==== 

// 1. Create a parent object with properties for name and age.  Make the name Susan and the age 70.
// 2. Nest a child object in the parent object with name and age as well.  The name will be George and the age will be 50.
// 3. Nest a grandchild object in the child object with properties for name and age.  The name will be Sam and the age will be 30
// 4. Give each of the objects the ability to speak their names using the this keyword.

const parent = {
  name: 'Susan',
  age: 70,
  speakName: function () {
    return `My name is ${this.name}.`
  },
  child: {
    name: 'George',
    age: 50,
    speakName: function () {
      return `My name is ${this.name}.`
    },
    grandchild: {
      name: 'Sam',
      age: 30,
      speakName: function () {
        return `My name is ${this.name}.`
      }
    }
  }
}

// Log the parent object's name
console.log("Parent's name:", parent.name);

// Log the child's age
console.log("Child's age:", parent.child.age);

// Log the name and age of the grandchild
console.log(`Grandchild's name and age: ${parent.child.grandchild.name}, ${parent.child.grandchild.age}`);

// Have the parent speak
console.log('Parent speaks:', parent.speakName());

// Have the child speak
console.log('Child speaks:', parent.child.speakName());

// Have the grandchild speak
console.log('Grandchild speaks:', parent.child.grandchild.speakName());
