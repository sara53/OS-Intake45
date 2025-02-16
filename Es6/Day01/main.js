/**
 * var
 * --------------------
 * == can reassign with different datatypes
 * == can redeclare
 * == Hoisting
 * == add to window object
 * == function scope
 * -----------------------------
 * let
 * -----------------------
 *  == can reassign with different datatypes
 *  == can not redeclare
 *  == can't be Hoisted
    == not added to window object
    == block scope
 * -----------------------------
 * const
 * -----------------------
 *  == can not reassign with different datatypes
 *  == can not redeclare
 *  == can't be Hoisted
    == not added to window object
    == block scope
 */

// const arr = [];
// arr.push("ali");

// arr = []; // change address in memory
// console.log(arr);

//***--------------------------- */
// const PI = 3.14;

// console.log(pi);

// let fname = "ahmed";
// console.log(window.fname);
// console.log(fname);
// let fname = "ali";
// console.log(fname);

// TDZ
// function showData() {
// 	let trackName = "OS";
// 	for (let i = 0; i < 3; i++) {
// 		console.log(i);
// 		console.log(trackName);
// 	}
// 	console.log("i outside loop : ", i);
// }

// showData();
// var fname = "Ali";
// console.log(fname); // window.fname

// console.log(window.fname);

/**
 * window
 *
 */
// let arr = [10, 20, 30, 40];

// let [x, y] = ["mona", "ahmed", "pet"];
// destructuring
// let x = arr[0];
// let y = arr[1];

// let [, , z] = arr;
// // console.log(x);
// // console.log(y);
// console.log(z);

// function useState(data) {
// 	return [
// 		data,
// 		function () {
// 			console.log("hello os");
// 		},
// 		30,
// 	];
// }

// let [x, y] = useState(0);

// y();
// let person = { fname: "ali", age: 20, color: "red", products: ["book", "pen"] };

// // let x = person.fname;

// // let y = person.color;

// // let { fname: fname, color: color } = person;
// let { fname, color, products } = person;
// console.log(fname);
// console.log(color);

// console.log(products);

// spread operator

// let arr1 = ["mona", "ahmed", "ali", "Alaa"];
// let arr2 = [1, 2, 3, ...arr1, "OS"];

// arr1.push("hend");
// console.log("arr1 : ", arr1);
// console.log("arr2 : ", arr2);

// let arr = [10, 50, 90, 30];

// console.log(Math.max(...arr));

// let person1 = { fname: "ahmed", age: 25, color: "Red" };

// let person2 = { ...person1, products: ["book"] };

// console.log(person1);
// console.log(person2);
// function show(...rest) {
// 	console.log(rest);
// }
// show(10, "mona", 20, true, "alaa");

// let [x, ...y] = [10, "mona", "ahmed", true];

// console.log(x);
// console.log(y);
//default value
// function show(x = 0, y = 0) {
// 	console.log("x ", x);
// 	console.log("y ", y);
// }
// show();
// sum statement

// function sum(x, y) {
// 	return x + y;
// }

// // fun expression

// let add = function (x, y) {
// 	return x + y;
// };

// // arrow
// let sum = (x = 0, y = 0) => {
// 	return x + y;
// };

// console.log(sum());
// let sum = (x) => {
// 	return x + x;
// };

// console.log(sum());
// let sayHello = (_) => {
// 	console.log("Hello open source");
// };
// let sum = (x, y) => x + y;
// let sum2 = (x, y) => {
// 	console.log("first");

// 	return "ITI";
// };

// this
// call bind apply
// var fname = "ahmed";

// function getName() {
// 	console.log(this.fname);
// }

// var person = {
// 	fname: "Ali",
// 	display: function () {
// 		console.log(this); // person
// 		getName(); // caller window
// 	},
// };

// person.display(); // person
// that

// this -- window
// var fname = "ahmed";

// function getName() {
// 	console.log(this.fname);
// }

// var person = {
// 	fname: "Ali",
// 	display: () => {
// 		console.log(this); // window
// 		setTimeout(() => {
// 			console.log(this.fname);
// 		}, 2000); // window
// 	},
// };

// person.display(); // person

// let itiTracks = ["os", "spd", "front", "dotnet"];

// let result = itiTracks.forEach((item, index) => {
// 	console.log(`${item} ${index}`);
// 	return "hello";
// });

// console.log(result);
// let result = itiTracks.some( function () {
// 	console.log(arguments);
// });
// console.log(result);
// let result = itiTracks.map((value, index, arr) => {
// 	return {
// 		id: index,
// 		trackName: value,
// 	};
// });

// for (let i = 0; i < result.length; i++) {
// 	document.writeln(result[i]);
// }
// console.log(result);
// let arr = [10, 15, 60, 35, 40];

// let result = arr.findIndex((value, index) => value > 20);

// console.log(result);

// function findElement(value, index) {
// 	console.log("value : ", value);
// 	console.log("index : ", index);
// 	for (let i = 0; i < arr.length; i++) {
// 		if (arr[i] > 20) return arr[i];
// 	}
// }

// for (let i = 0; i < arr.length; i++) {
// 	findElement(arr[i], i, arr);
// 	console.log("---------------------------");
// }
