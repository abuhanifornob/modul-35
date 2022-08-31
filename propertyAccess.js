const number = [12, 10, 20, 33, 20];
//console.log(number);
for (let num of number) {
    //console.log(num);
}

const student = {
    name: "Abu Hanif",
    age: 27,
    income: 5000,
    department: 'Computer Science'

}
for (let s in student) {
    // console.log(student[s]);
}

for (let s of Object.keys(student)) {
    //console.log(student[s]);
}

for (const [key, value] of Object.entries(student)) {
    console.log(key, value);
}