import Person from "./person.js"
class Student extends Person {
  constructor(id, name, age, klass) {
    super(id, name, age);
    this.klass = klass;
  }
  introduce() {
    if (this.klass.leader === this) {
      return `${super.introduce()} I am a Student. I am leader of ${this.class.number}.`;
    } else {
      return `${super.introduce()} I am a Student. I am at ${this.class.number}.`;
    }
  }
}
export default Student;