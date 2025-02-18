// let arr = ["mona", "ali", "ahmed"];
// let person = {
// 	fname: "Ali",
// 	age: 25,
// 	address: "alex",
// };

// for (let x of person) {
// 	console.log(x);
// }
// key
// for (let i in person) {
// 	console.log(person[i]);
// }
// for in i -- index
// for (let i in arr) {
// 	console.log(arr[i]);
// }
//value
// for (let value of arr) {
// 	console.log(value);
// }
// let x = Symbol("studentName");

// let y = Symbol("studentName");

// console.log(x == y);

// let Symbol.iterator = Symbol();
// let person = {
// 	fname: "ali",
// 	[Symbol()]: 25,
// 	[Symbol.iterator]: function () {
// 		return {
// 			next: function () {
// 				console.log("hello");
// 			},
// 		};
// 	},
// };

// person[Symbol.iterator]
function evenNumbers() {
	let count = 0;
	return {
		next: function () {
			count += 2;
			if (count > 10) {
				return { value: undefined, done: true };
			} else {
				return { value: count, done: false };
			}
		},
	};
}
let arr = ["mona", "ali", "ahmed"];

arr[Symbol.iterator] = evenNumbers;

let person = {
	fname: "ali",
	age: 25,
	color: "red",
};

person[Symbol.iterator] = evenNumbers; //

for (let value of person) {
	console.log(value);
}
// let iter = arr[Symbol.iterator]();
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

/**function --> return {}
 * -- {} --> next
 * next ==> function
 * == {value,done}
 *
 *
 *
 */
// let person = {
// 	fname: "hoda",
// 	age: 20,
// };
// person[Symbol.iterator] = function () {};
// function* generateEvenNumbers() {
// 	for (let i = 0; i <= 10; i += 2) {
// 		yield i;
// 	}
// }

// let iter = generateEvenNumbers();
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());

let person = {
	fname: "ali",
	age: 25,
	color: "red",
};
let product = {
	name: "book",
	price: 300,
};
person[Symbol.iterator] = execute;
product[Symbol.iterator] = execute;
// generator function
// generator -- iterator
// function* execute() {
// 	for (let key in this) {
// 		yield this[key];
// 	}
// }

// for (let x of product) {
// 	console.log(x);
// }

// console.log("----------------");
// for (let x of person) {
// 	console.log(x);
// }
// let arr = ["mona", "ali", "ahmed"];

// arr[Symbol.iterator] = getValues;

// function getValues() {
// 	let count = 0;
// 	// this - [array]
// 	return {
// 		next: () => {
// 			if (count < this.length) {
// 				return { value: this[count++], done: false };
// 			} else {
// 				return { value: undefined, done: true };
// 			}
// 		},
// 	};
// }

// let iter = arr[Symbol.iterator]()

// console.log(iter.next());
// console.log(iter.next());

// for (let value of arr) {
// 	console.log(value);
// }
// superClass .. parentClass
// class Person {
// 	constructor(name = "", age = "") {
// 		this.name = name;
// 		this.age = age;
// 	}

// 	display() {
// 		// 100 line
// 		console.log(`${this.name} ${this.age}`);
// 	}
// }

// // subClass .. childClass
// class User extends Person {
// 	constructor(name, age, password) {
// 		super(name, age);
// 		this.password = password;
// 	}
// 	// override
// 	display() {
// 		super.display();
// 		console.log(`${this.password}`);
// 	}
// 	generatePassword() {
// 		console.log(this.password.toUpperCase() + "@#$");
// 	}
// }

// let myUser = new User("ahmed", 20, "ahmedali");

// myUser.display();
// class Person {
// 	#id;
// 	constructor(id, name = "", age = "") {
// 		this.#id = id;
// 		this.name = name;
// 		this.age = age;
// 	}

// 	display() {
// 		console.log(`${this.name} ${this.age}`);
// 	}

// 	get getId() {
// 		return this.#id;
// 	}
// 	set setId(value) {
// 		this.#id = value;
// 	}
// }

// let person1 = new Person(1, "ali", 24);

// person1.setId("new ID");
// person1.setId = "new Id"; // set
// console.log(person1.getId); //

// person1.name = "mona"; // set
// console.log(person1.name); // get
class Person {
	constructor(name, age) {
		if (this.constructor == Person) {
			throw "can not take an object from abstract class";
		}
		this.name = name;
		this.age = age;
	}
	display() {
		throw "Method not implemented";
	}
}

class User extends Person {
	constructor(name, age, password) {
		super(name, age);
	}
	//
	display() {
		console.log(`${this.name} ${this.age}`);
	}
}

let myUser = new User("ali", 20, "adkdk");

myUser.display();
