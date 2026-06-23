// // object
// let obj = {
//     username: "ram123",
//     email: "ram@gmail.com",
//     printName() {
//         return this.username;
//     },
// };;
// console.log(obj.printName());
// ....................................
// function Product (a,b) {
//     this.name = a;
//     this.email = b;
//     this.PrintName = function () {
//         return this.name;
//     };
// }
// const p1 = new Product("ram123", "ram@gmail.com");
// console.log(p1.PrintName());
// // ........................................
// const obj1 = {a: 5};
// const obj2 = Object.create(obj1);
// console.log(obj2.a);
// ........................................
// ........................................
// ........................................
// ........................................
// class Product{
//     constructor(a,b) {
//         this.name =a;
//         this.email = b;
//     }
//     PrintName(){
//         return this.name;
//     }
// }
// const p1 = new Product("ram123", "ram@gmail.com");
// console.log(p1.PrintName());
// ........................................
// ........................................
// ........................................
// ........................................
// class BankAccount {
//     #balance = 0;
//     a(amount) {
//     this.#balance += amount;
// }
// data() {
//     return this.#balance;
//  }
// }
// const acc = new BankAccount();
// acc.a(1000);
// console.log(acc.data());
// console.log(acc.#balance); //Error
// ........................................
// ........................................
// ........................................
// ........................................
// class Car {
//     start() {
//         this.#engineStar();
//         console.log("Car started");
//     }
//     #engineStart(){
//         console.log("Engine Starting...");
//     }
// }
// const c1 = new Car();
// c1.#engineStart();
// ........................................
// ........................................
// ........................................
// const person = {
//     greet: function ()
// {
//     return "hello";
// },
// };
// const student = {
//     name: "Ram",
// };
// student._proto_ = person; 
// console.log(student.greet());
// ........................................
// ........................................
// ........................................
// function Category(category) {
//     this.category = category;
//     console.log(this);
// }
// function Food(name, price, category) {
//     this.name = name;
//     this.price = price;
//     Category.call(this, category);
// }
// new Food("Pizza", 1234, "fast food");
// ........................................
// ........................................
// ........................................
// function Animal() {
//     this.eat = function () {
//         console.log("Eating...");
//     };
// }
// function Dog() {
//     Animal.call(this);
// }
// const d1 = new Dog();
// d1.eat();
// ........................................
// ........................................
// ........................................
// single inheritance
// class Animal{
//     eat(){
//         console.log("Eating...");
//     }
// }
// class Dog extends Animal {
//     bark() {
//         console.log("Barking");
//     }
// }
// const d = new Dog();
// d.eat();
// d.bark();
// ........................................
// ........................................
// ........................................
// multilevel inheritance
// class Animal {
//     eat() {
//         console.log("Eating...");
//     }
// }
// class Dog extends Animal {
//     bark() {
//         console.log("Barking");
//     }
// }
// class Puppy extends Animal {
//     bark() {
//         console.log("Puppy crying");
//     }
// }
// const p = new Puppy();
// p.eat();
// p.bark();
// p.cry();
// ........................................
// ........................................
// ........................................
// hierarchical inheritance
// class Animal {
//     eat() {
//         console.log("Eating...");
//     }
// }
// class Dog extends Animal {
//     bark() {
//         console.log("Barking");
//     }
// }
// class Cat extends Animal {
//     meow() {
//         console.log("Cat meows");
//     }
// }
// const d = new Dog();
// const c = new Cat();
// d.eat();
// d.bark();
// c.eat();
// c.meow();
// ........................................
// ........................................
// ........................................
// multiple inheritance
// const canEat = {
//     eat() {
//         console.log("Eating...");
//     },
// };
// const canWalk = {
//     walk(){
//         console.log("Walking....");
//     },
// };
// class Human {}
// Object.assign(Human.prototype, canEat, canWalk);

// const h1 = new Human();
// h1.eat();
// h1.walk();
// ........................................
// ........................................
// ........................................
// Hybrid inheritance
// class Animal {
//     eat() {
//         console.log("Eating...");
//     }
// }
// class Dog extends Animal {
//     bark() {
//         console.log("Barking");
//     }
// }
// const canRun = {
//     run() {
//         console.log("Running....");
//     },
// };
// Object.assign(Dog.prototype,canRun);
// const d1 = new Dog();
// d1.eat();
// d1.bark();
// d1.run();
// ........................................
// ........................................
// ........................................
// prototype inheritance
// const animal = {
//     sound() {
//         console.log("Animal sound");
//     },
// };
// const dog = Object.create(animal);
// dog.bark = function () {
//     console.log("Dog barks");
// };
// dog.bark();
// dog.sound();
// console.log(dog);
// ........................................
// ........................................
// ........................................
// polymorphism
// class Animal {
//     sound() {
//         console.log("Animal Sound");
//     }
// }
// class Dog extends Animal {
//     sound() {
//         console.log("Dog Sound");
//     }
// }
// class Cat extends animal {
//     sound() {
//         console.log("Cat Sound");
//     }
// }
// const d = new Dog();
// const c = new Cat();
// c.sound();
// d.sound();
// ........................................
// ........................................
// ........................................
// Method Overriding
// class Person {
//     greet() {
//         console.log("hello person");
//     }
// }
// class Student extends Person {
//     greet() {
//         console.log("hello student");
//     }
// }
// const s1 = new Student();
// s1.greet();
// ........................................
// ........................................
// ........................................
// method overloading
// class Number {
//     constructor(value) {
//         this.value = value;
//     }
//     and(other) {
//         return this.value + other.value;
//     }
// }
// const a = new Number(10);
// const b = new Number(10);
// console.log(a.add(b));