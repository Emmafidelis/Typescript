class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName() {
    return this.firstName + " " + this.lastName;
  }

  wlak() {
    console.log("Wlaking");
  }
}

class Student extends Person {
  constructor(public studentId: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }

  takeTest() {
    console.log("Taking a test");
  }
}

let student = new Student(1, "john", "john@gmail.com");
student.studentId;
