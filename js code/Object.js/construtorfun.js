function Person(name,age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log("Hi,I'm"+this.name);
    };
}
let alice = new Person("Alice",25);
alice.greet(); //"Hi,I'm Alice"