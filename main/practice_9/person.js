class Person {
  constructor(name, age, id) {
    this.id = id;
    this.name = name;
    this.age = age;
  }
  introduce() {
    return `My name is ${this.name}. I am ${this.age} years old.`;
  }
}
export default Person;