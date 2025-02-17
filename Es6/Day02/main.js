// let fname = "ali";
// let age = 25;

// let myKey = "color";

// let person = {
// 	fname,
// 	age,
// 	myKey: "red",
// 	display() {
// 		console.log("hello display");
// 	},
// };
// let fname = "ali";
// let age = 25;

// let myKey = "color";

// let person = {
// 	fname,
// 	[myKey]: "red",
// };

// console.log(person);
// let color = "hello";
// let person = {
// 	fname: "ali",
// 	age: 25,
// 	[color]: "red",
// };

// let keys = Object.keys(person);
// let values = Object.values(person);
// let entries = Object.entries(person);
// let person2 = {
// 	products: ["book", "pen"],
// 	fname: "mona",
// };

// let person3 = {
// 	gender: "male",
// };
// let person1 = {
// 	fname: "ahmed",
// 	age: 20,
// 	color: "green",
// };

// let result = Object.assign(person1, person2, person3);

// console.log("result, ", result);

// console.log("person1 ", person1);
// console.log("person2 ", person2);
// function showData(options = {}) {
// 	let defaultValues = {
// 		fname: "default fname",
// 		age: "default age",
// 		address: "default address",
// 	};

// 	Object.assign(defaultValues, options);
// 	console.log(`fname = ${defaultValues.fname}
//          age= ${defaultValues.age}
//          address = ${defaultValues.address}
//          `);
// }

// showData({ fname: "alaa" });
// showData();
// showData({
// 	fname: "mona",
// 	address: "alex",
// 	age: 20,
// });
// function first() {
// 	console.log("First");
// 	second();
// 	console.log("End");
// }

// function second() {
// 	setTimeout(() => {
// 		console.log("second");
// 	}, 2000);
// 	console.log("After SetTimeOut execution");
// }
// first();
// setTimeout(() => {
// 	console.log("first");
// }, 0);

// console.log("Second");
// console.log("End");

// var response;

// setTimeout(() => {
// 	response = 10;
// 	console.log(response);
// }, 1000);
// first request
// var products;

// setTimeout(() => {
// 	products = [200, 300, 400];

// 	setTimeout(() => {
// 		product = {
// 			id: products[0],
// 			name: "book",
// 			price: 300,
// 		};
// 		setTimeout(() => {
// 			var price = product.price;
// 			console.log(price);
// 		}, 500);
// 	}, 1000);
// }, 2000);

// // third
// var product;
// pending
// fulfilled
// rejected --

let myPromise = new Promise(function (x, y) {
	x({ fname: "ali" });
	// y();
});

myPromise
	.then((data) => {
		console.log(data);
		console.log("Hello then");
	})
	.catch(() => {
		console.log("Catch function");
	});
