document.addEventListener('DOMContentLoaded', function() {

// Testing Section

// Object 
let person = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

console.log(person.fullName());




});