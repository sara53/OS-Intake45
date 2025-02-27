/**
 * string
 * number
 * boolean
 * undefined
 * null
 * any
 *
 */
// var fname: string = "mona";

// var num: number = 10;

// num = true;

// var fname: String;

// console.log(fname);
// fname = "Ali"; // string
// fname = true;
// fname = 10;

// console.log(fname);

// var fname: any = "mona";
// fname = 20;
// fname = true;
// fname = [];

// var fname: string;

// console.log(fname);
// type stringOrNumber = string | number | boolean;

// let fname: stringOrNumber = "mona";

// fname = 20;

// fname = "Alaa";
// let arr: (string | number)[] = [];
// let arr2: any[] = [];

// let test: [string, number];

// arr.push("mona");
// arr.push(20);
// arr.push(true);
// let person: { fname: string | number; age: number } = { fname: "ali", age: 20 };

// let person = {};

// person.fname = "alii";
// person.fname = 11;

// let products: { id: number; name: string; price: number }[] = [
// 	{
// 		id: 2,
// 		name: "Pen",
// 		price: 400,
// 	},
// ];
// products.push({ id: 1, name: "Book", price: 200 });
// function sum(x: number = 0, y: number = 0) {
// 	return x + y;
// }

// sum();
// function sum(x: number, y?: number) {
// 	if (y) {
// 		return x + y;
// 	}
// 	return x;
// }

// sum(10);
// function sum(x: number, y: number, ...w: string[]): string {
// 	return 1222;
// }

// sum(10, 20, "mona", "ahmed");
// function sum(x: number, y: number, ...w: string[]): void {}

// sum(10, 20, "mona", "ahmed");
// sum(10, 20);
// sum(30);
// sum("mona", "ali");
// let arr: [string, number] = ["mona", 10];
// function showData(name: string, age: number) {}

// showData(...arr); // showData("mona",10,"alaa")
// class Person {
// 	name: string;
// 	age: number;
// 	constructor(name: string, age: number) {
// 		this.name = name;
// 		this.age = age;
// 	}
// }

// let p1 = new Person("ali", 10);
// class Person {
// 	constructor(public name: string, private age: number) {}

// 	get getAge() {
// 		return this.age;
// 	}

// 	set setAge(value: number) {
// 		this.age = value;
// 	}
// }

// let p1 = new Person("ali", 10);

// p1.setAge = 30;
// p1.getAge;

// p1.setAge(30);
// p1.getAge(); // 30
// class Person {
// 	constructor(private name: string, public age: number) {}

// 	display(): void {
// 		console.log(`${this.name} ${this.age}`);
// 	}
// }
// abstract class Person {
// 	constructor(private name: string, public age: number) {}

// 	display(): void {
// 		throw "Method not implemented";
// 	}
// }

// let p1 = new Person();

// class User extends Person {
// 	constructor(
// 		name: string = "",
// 		age: number = 0,
// 		public password: string = ""
// 	) {
// 		super(name, age);
// 	}
// 	override display(): void {
// 		console.log("new Code");
// 	}

// 	generatePassword(): string {
// 		return this.password.toUpperCase();
// 	}
// }

// let myUser = new User("ali", 20, "ali1233");

// myUser.display(); // new Code
