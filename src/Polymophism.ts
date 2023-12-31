class People {
  constructor(public firstName: string, public lastName: string) {}

  get fullName() {
    return this.firstName + " " + this.lastName;
  }

  wlak() {
    console.log("Wlaking");
  }
}

class Studen extends People {
  constructor(public studentId: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }

  takeTest() {
    console.log("Taking a test");
  }
}

class Teachers extends People {
  override get fullName() {
    return "Professor " + super.fullName;
  }
}

class Principal extends Person {
  override get fullName() {
    return "Principal " + super.fullName;
  }
}

printNames([
  new Student(1, "John", "Smith"),
  new Teacher("Mosh", "Hamedani"),
  new Principal("Mary", "Smith"),
]);

function printNames(people: Person[]) {
  for (let person of people) console.log(person.fullName);
}
