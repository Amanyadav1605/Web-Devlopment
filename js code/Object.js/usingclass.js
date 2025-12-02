class Animal {
    constructor(type,sound) {
        this.type = type;
        this.sound = sound;
    }
    makeSound() {
        console.log(this.sound);
    }
}
let dog =new Animal("Dog","Woof");                   
dog.makeSound(); //"Woof"                                       