var Dog = require("./dog.js");

class Person {
  constructor(name, dog) {
    this.name = name
    this.dog = dog
  }
  fillFoodBowl() {
    this.dog.eat()
  }
  throwBall() {
    if (this.dog.fetchBall() === `This is fun!`) {
      return `${this.dog.name} loves playing fetch!`
      }
      else {
        return `Oh, I think ${this.dog.name} is too tired. I guess we won\'t play fetch right now.`
      }
    }
  adoptAPup(name, age) {
    if (this.dog !== undefined) {
      return `You can\'t adopt Chloe. You already have ${this.dog.name}!`
    }
    var puppy = new Dog({ name: name, age: age})
    this.dog = puppy
  }
}

module.exports = Person;
