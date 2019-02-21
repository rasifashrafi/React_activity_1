class Person {
    constructor(firstName,lastName) {
      this.firstName = firstName;
      this.lastName = lastName;  
     }
     getName(){
      return this.firstName + " " +this.lastName;
     }
  }

  var person1 = new Person ('RASIF', 'ASHRAFI');

  console.log(person1.getName()); 
      
  class JavaScriptDeveloper extends Person{
    getJob(){
        return 'JavaScript Developer';
    }
}

var person1 = new JavaScriptDeveloper('JEME', 'RAHMAN');

console.log(person1.getName());
console.log(person1.getJob()); 


const GetGreeting = () => {
  return 'Welcome to React Dev';
}

console.log(GetGreeting());

