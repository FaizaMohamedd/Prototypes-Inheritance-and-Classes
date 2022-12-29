/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. 
* 2. 
* 3. 
* 4. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

this.name = "hello world";
 console.log(this.name);
 
// Principle 2

// code example for Implicit Binding
const Obj = {
    name: "Sam",
    food: "Steak",
    speak: () => {
        console.log(`${this.name} loves ${this.food}.`);
    }
  }
  Obj.speak();

// Principle 3
// code example for New Binding
function Human(attributes){
    this.name = attributes.name;
    this.age = attributes.birthday;
  }
  const Sam = new Person ({
    name: "Faiza",
    birthday: "October 10th"
})

// Principle 4

// code example for Explicit Binding
newObj.speak.call(obj);