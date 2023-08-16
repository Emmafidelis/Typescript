class Persons {
  constructor(public firstName: string, public lastName: string) {}

  get fullName() {
    return this.firstName + " " + this.lastName;
  }

  wlak() {
    console.log("Wlaking");
  }
}

class Students extends Persons {
  constructor(public studentId: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }

  takeTest() {
    console.log("Taking a test");
  }
}

class Teacher extends Persons {
  override get fullName() {
    return "Professor " + super.fullName;
  }
}

let teacher = new Teacher("John", "Smith");
console.log(teacher.fullName);
