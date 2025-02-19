// ----------------------------------
// Object-Oriented Programming (OOP) in JavaScript
// ----------------------------------

// 1. Object Literals
const person = {
    name: "Alice",
    age: 25,
    greet: function() {
        console.log(`Hello, my name is ${this.name}.`);
    }
};
person.greet(); // "Hello, my name is Alice."

// 2. Constructor Function
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greet = function() {
        console.log(`Hello, my name is ${this.name}.`);
    };
}
const bob = new Person("Bob", 30);
bob.greet(); // "Hello, my name is Bob."

// 3. ES6 Class Syntax
class Animal {
    constructor(name) {
        this.name = name;
    }
    speak() {
        console.log(`${this.name} makes a noise.`);
    }
}
const dog = new Animal("Dog");
dog.speak(); // "Dog makes a noise."

// 4. Encapsulation (Private Fields & Methods)
class CoffeeMachine {
    #temperature;
    constructor(waterAmount) {
        this.waterAmount = waterAmount;
        this.#temperature = 90;
    }
    get temperature() {
        return this.#temperature;
    }
    set temperature(value) {
        console.log("Temperature is private and cannot be changed.");
    }
}
const coffee = new CoffeeMachine(10);
console.log(coffee.temperature); // 90
coffee.temperature = 100; // "Temperature is private and cannot be changed."

// 5. Inheritance (Extending Classes)
class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks.`);
    }
}
const myDog = new Dog("Buddy");
myDog.speak(); // "Buddy barks."

// 6. Polymorphism (Method Overriding)
class Cat extends Animal {
    speak() {
        console.log(`${this.name} meows.`);
    }
}
const myCat = new Cat("Whiskers");
myCat.speak(); // "Whiskers meows."

// 7. Static Methods
class MathUtils {
    static add(a, b) {
        return a + b;
    }
}
console.log(MathUtils.add(5, 3)); // 8

// 8. Object Composition (Instead of Inheritance)
const canFly = {
    fly() {
        console.log("I can fly!");
    }
};
const canSwim = {
    swim() {
        console.log("I can swim!");
    }
};
class Bird {
    constructor(name) {
        this.name = name;
    }
}
Object.assign(Bird.prototype, canFly);
const eagle = new Bird("Eagle");
eagle.fly(); // "I can fly!"

// ----------------------------------
// End of OOP in JavaScript
// ----------------------------------
