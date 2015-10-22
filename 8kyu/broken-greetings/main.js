class Person {
  constructor (name) {
    this.name = name;
  }

  greet (otherName) {
    return `Hi ${otherName}, my name is ${this.name}`;
  }
}
