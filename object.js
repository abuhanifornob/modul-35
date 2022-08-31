const person = {};
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";
person.printInfo = function() {
    console.log("Object Function Information ")
};

// console.log(person)

// person.printInfo();


//2. Object Create Object Constructor

// const person = new Object();
// console.log(person);
// person.fname = 'Abu Hanif';
// person.lname = 'Arnob';
// console.log(person);


//3. Object create Metod


const newPerson = Object.create(person);
//console.log(newPerson.firstName);


// Object Create of Class

class Student {
    name = 'Abu Hanif';
    age = 26;
    address = `Chandrapue , Kalijong Lalmonir Hat `;
    constructor(goalYera) {
        this.goalYera = goalYera;
    }

}

const student1 = new Student(2030);
// console.log(student1.goalYera);
// console.log(student1.address);


// Object Create Function use

function newStudent(name, age) {
    this.name = name;
    this.age = age;
}

const student2 = new newStudent('Abu Hanif', 27);
console.log(student2.age);