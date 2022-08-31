const student = {
    name: "Abu Hanif",
    age: 25,
    city: "Dhaka",
    income: 5000,
    information: function() {
        return `Name is: ${this.name}\nAge is: ${this.ag}\nCity Is: ${this.city}`
    },
    teat: function(amount) {
        return this.income - amount;
    },

    bonus: function(bill, amount) {
        return this.teat(bill) - amount;
    }

};

console.log(student.information());
console.log(student.teat(100));
console.log(student.bonus(200, 100));