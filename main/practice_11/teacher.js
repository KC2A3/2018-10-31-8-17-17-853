import Person from "./person.js";
class Teacher extends Person {
  constructor(id, name, age, klasses) {
    super(id, name, age);
    this.klasses = klasses;
  }
  introduce() {
    if (this.klasses) {
      let classNumber = this.klasses.map(klass => klass.number).join(', ')
      return `${super.introduce()} I am a Teacher. I teach Class ${this.klass.number}`;
    } else {
      return `${super.introduce()} I am a Teacher. I teach No Class`;
    }
  }
  isTeaching(student) {
    for (let klass of klasses) {
      if (klass.isIn(student)) {
        return true;
      }
    }
    return false;
  }
}
export default Teacher;