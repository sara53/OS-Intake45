// var arr = [10, 3, 4, 5];

// arr.sort(function (a, b) {
// 	return a - b;
// });

// console.log(arr);
// js Engine

// 10 3
/**
 *  10 - 3 ==> 7 positvie
 *  3-10  ==> -7
 *  10 - 10 ==> zero
 *
 */
// function sort(myfun) {
// 	myfun(10, 3); // js engine
// }

// sort(function (a, b) {
// 	console.log(a);
// 	console.log(b);
// 	// comapre
// 	// swap
// });

// function sum(x, y) {
// 	console.log("welcome at iti");
// 	return x + y;
// }

// var result = sum(3, 4);
// console.log(result);
// var trackName = "os"; // global scope
// function handlerOperation() {
// 	var trackName = "PD"; // shadwing
// 	console.log(trackName);
// 	console.log("Welcome at ITI");
// 	return true;
// }

// var result = handlerOperation();
// console.log(trackName);
// var trackName = "os"; // global scope
// function handlerOperation() {
// 	trackName = "PD"; // shadwing
// 	console.log(trackName);
// 	console.log("Welcome at ITI");
// 	return true;
// }

// var result = handlerOperation();
// console.log(trackName);
// var trackName = "os";
// function handlerOperation() {
// 	// local scope -- var inside funtion
// 	var test = "ali";
// 	console.log(test);
// 	return true;
// 	// access inside function
// }

// var result = handlerOperation();
// console.log(test);
// console.log(trackName);
///=======================================
// var trackName = "os";
// function handlerOperation() {
// 	console.log(supName);
// 	var supName = "Mona ali";
// 	console.log(supName);
// }

// var result = handlerOperation();
// console.log(trackName);
///=======================================

// function sayHello(trackName) {
// 	console.log(`Welcome ${trackName} at ITI`);
// 	return "ITI";
// }
// function greet(trackName) {
// 	console.log("Inside Great Function");
// 	return sayHello(trackName);
// }

// console.log(greet("OS"));
/**
 * Object --> Properties -- Methods
 * property: key : value (any datatype)
 * name , age , address
 */

// var student1 = {
// 	name: "ali",
// 	age: 25,
// 	gender: "male",
// 	address: {
// 		city: "alex",
// 		street: "mo Street",
// 		code: 123,
// 	},
// };

// student1["name"] = "ahmed"; //override
// student1["color"] = "red"; // add
// student1.color = true; // add
// student1.colors = true; // override
// student1.name = "ahmed"; // override
// student1.age = 50;

// console.log(student1);
// get -- key not found -- undefined
// console.log(student1["address"].city);
// console.log(student1["address"]["city"]);
// console.log(student1.address["city"]);
// console.log(student1.address.city); // object
// // console.log(student1.code); //undefined

// // get
// console.log(student1["name"]);
// console.log(student1["age"]);
// console.log(student1["gender"]);
// console.log(student1["address"]);
// console.log("=================================");
// //get  Dotnotation
// console.log(student1.name);
// console.log(student1.age);
// console.log(student1.gender);
// console.log(student1.address); // Object
// get student Name (get)
// change student Name (set)
// access (read/write)
// 1- Dot notaion
// 1- subscript Notation

// props -- methods
// var product = {
// 	id: 1,
// 	name: "Book",
// 	price: 300, // method
// 	discount: function () {
// 		console.log("discount 1");
// 	},
// };

// product.discount = function () {
// 	console.log("Discount 2");
// };
// product.discount();

// user defined

// props -- methods

// Object

// var arr = []; // Object
// console.log(arr.length); // length prop
// var result = arr.push("new Value"); // method
/**============================================== */
// var product = {
// 	discount: function test() {
// 		console.log("discount");
// 	},
// };
/**=======================
 *Math
 -------------------------------------
 *PI
 --------------------------------------
 * == sqrt
   == pow
   == sign -- > 1 --> positive
            --> -1 --> negative
            --> zero -- zeror

 == |-20| == abs
 == max --> greatest
 == min --> smallest
 == round
 == floor
 == ceil
 * ======================== */
// console.log(Math.floor(Math.random() * 10));
// console.log(Math.sin((90 * Math.PI) / 180)); //
