class Student {
  fullname: string;
  constructor(public firstName: string, public middleName: string, public lastName: string) {
    this.fullname = firstName + " " + middleName + " " + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return "Hello" + " " + person.firstName + " " + person.lastName;
}

var user = new Student("Jane", "M.", "Fonda");

document.body.innerHTML = greeter(user);