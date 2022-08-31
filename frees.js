const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};
// all Key Return..............
const allKeys = Object.keys(person);

// all Value Return............
const allVaues = Object.values(person);
console.log(allKeys);
console.log(allVaues);

// Key and  Vale Arry
const keyValue = Object.entries(person);
console.log(keyValue);

const { firstName, ...rest } = person;
console.log(rest);
// property Delete .......
delete person.age;
console.log(person);

//Object.seal(person); // We ditnot add or Rmove any propery only we can Modify.

person.firstName = "Abu Hanif"; // afete seal modify first name property.
console.log(person);

//  object Frees.........

Object.freeze(person);
person.lastName = 'Arnob'; //  afete Freeze try to chane the last name Property , 
console.log(person);