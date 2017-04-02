// Auther : katopz
// Q : What console log will print?
class Pet {
  constructor(speech) {
    this.speech = speech
  }

  static get name() {
    return 'Pet'
  }

  get name() {
    return this.constructor.name
  }

  speak() {
    return `${this.name}:${this.speech}`
  }
}

class Cat extends Pet {
  static get name() {
    return 'Cat'
  }
}

const answer = new Pet('hi') && new Cat('meow').speak()
console.log(answer)

// A : 'Cat:meow', 'Pet:hi', undefined, null
