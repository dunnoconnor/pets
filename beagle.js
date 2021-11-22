const Dog = require('./dog')

class Beagle extends Dog {
    constructor(name,color){
        super(name,color,"Beagle")
    }

    howl(){
        return `this dog goes arooooo`
    }

}

b1 = new Beagle("Lucy","Spotted")
console.log(Beagle.prototype instanceof Dog)
// console.log(b1)
// console.log(b1.howl())
// console.log(b1.bark("woof"))
