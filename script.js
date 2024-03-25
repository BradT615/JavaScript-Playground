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


const header = document.getElementById('header');
const scrolledClasses = ['w-full', 'shadow-2xl', 'm-0', 'rounded-none', 'bg-opacity-60'];
const defaultClasses = ['w-11/12', 'shadow-md'];

window.addEventListener('scroll', function() {
  if (window.scrollY > 20) {
    defaultClasses.forEach(className => header.classList.remove(className));
    scrolledClasses.forEach(className => header.classList.add(className));
  } else {
    scrolledClasses.forEach(className => header.classList.remove(className));
    defaultClasses.forEach(className => header.classList.add(className));
  }
});

});