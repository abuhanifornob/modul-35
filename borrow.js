const student = {
    name: "Abu Hanif",
    age: 25,
    city: "Dhaka",
    income: 5000,
    information: function() {
        return `Name is: ${this.name}\nAge is: ${this.ag}\nCity Is: ${this.city}`
    },
    treat: function(amount) {
        return this.income - amount;
    },

    bonus: function(bill, amount) {
        return this.treat(bill) - amount;
    },

    information: function(name, income) {
        return `Name is: ${this.name + name}\nIncome : ${this.income-income}`
    }

};

const student2 = {
    name: 'Arnob',
    income: 6000,

}

const treatRamainder = student.treat.call(student2, 200);
console.log(treatRamainder);
const infor = student.information.apply(student2, ['Khan', 2000]);
console.log(infor);