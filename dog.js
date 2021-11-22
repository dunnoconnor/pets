const Pet = require('./pet')

class Dog extends Pet {
	constructor(name, color, breed) { 
		//like creating: new Pet(name,color,"Dog")
        super(name, color, "Dog")
		this.breed = breed
    }

    bark(sound) {
    return `this dog goes ${sound}`
    }

}

module.exports = Dog

// let d1 = new Dog("Toby", "Black", "Lab")
// let d2 = new Pet("Boris","Brown","Dog")
// console.log(d1)
// console.log(d1.bark("woof"))
// console.log(d2)
// console.log(d2.bark("bow wow"))