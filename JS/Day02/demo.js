// function sum(x, y) {
// 	console.log("x :", x);
// 	console.log("y :", y);
// 	console.log(x + y);
// }

// sum(4, 5, 6, 7, 8);
// sum(); //
// sum(3);
// sum(4, 5);
// //arguments
// sum(3, 4); // function call
// sum(6, 7); // function call
// sum(10, 5); // function call
// sum(11, 3); // function call

// function sayHello() {
// 	console.log("Hello os");
// }

// sayHello("mona"); //
// function sum(x, y) {
// 	x = x || 0;
// 	y = y || 0;
// 	console.log("x : ", x);
// 	console.log("y : ", y);
// 	console.log(x + y);
// }

// sum(3, 4);
// function statement
// function sum(x, y) {
// 	var sum = x + y;
// }

// var result = sum(5, 6);
// console.log(result);

// console.log(sum(4, 5));

// console.log(sum());

// console.log(sum("mona", "Ahmed"));
// console.log(sum(true, true));
// console.log(sum(5, 6));

// var result = sum(3, 4);
// console.log( result );
// Number(); // built in
// sum
// function expression
// var result = function () {
// 	console.log("Hello open source");
// };

// result();
// function expression
// var sum = function (x, y) {
// 	console.log(x + y);
// };

// console.log(sum(4, 5));

/**
 * ali
 * ali 2
 * -----------------
 * undefined
 * ali  -- 9
 * ---------------------
 * Error --> 8
 *
 */
// var fname
//fname= "ali";
// console.log(fname);
// var fname;
// console.log(fname);
// fname = "ali";
// console.log(fname);
// function sum(x, y) {
// 	console.log(x + y);
// }

// sum(5, 6);

// var sum = function add(x, y) {
// 	console.log(x + y);
// };

// add();

/**------------------ */
// var dotnet = function (superName) {
// 	console.log("dotnet : " + superName);
// };
// var os = function (superName) {
// 	console.log(" OS : Supervisor " + superName);
// };
// var fname = "mona";
// function greet(myFun, y) {
// 	myFun(y);
// }

// greet(
// 	function (data) {
// 		data();
// 		console.log("Hello");
// 	},
// 	function () {
// 		console.log("second callback");
// 	}
// );

// greet(function (supName) {
// 	console.log("mearn : ", supName);
// }, "Sara atef");

// greet(os, "Ahmed mohamed");
// console.log("---------");
// greet(dotnet, "mona ali");

// greet(os);
// console.log("------------------");
// greet(dotnet);
// greet("mona");
// greet(fname); //
// var fname = "ola";
// function test() {
// 	console.log(cb2);
// }
// function operationHandler(x) {
// 	console.log(x);
// }

// operationHandler(fname);
// operationHandler("ola");
// operationHandler(function () {
// 	console.log("cb1");
// });
// operationHandler(test);

// (function (fname) {
// 	console.log("hello", fname);
// 	console.log("Os");
// })("ali");
/**
 * string API
 * ---------------------------
 * == length
 * ---------------------------
 * == charAt--> index ==> char
 * == indexOf --> char ==> index
 * == lastIndexOf
 * == concat
 * == startsWith
 * == includes
 * == toUpperCase
 * == toLowerCase
 * == trim
 * == trimStart
 * == slice -- subStr -- (search)
 */

// var str = "hello at ITI";
// console.log(`Hello os ${str}

//     ${str}

//     :)

//     `);

// var result = str.slice(2);

// console.log(result);

// console.log(str.indexOf("a", 8));
/**------------------
 * Array Object
 * -------------------
 * == push -- add an element at the end of the arr
 * == unshift -- add an element at the first of the arr
 * == splice -- add new element (search)
 * == pop --
 * == shift --
 * == reverse --
 * == concat --
 * == join --
 *
 * --------------- */
// var arr = [10, 3, 4, 60, 20];
// arr.sort(/** call back function */); //
// var result = arr.slice(1);
// var result = arr.join("##");
// console.log(result);
// var arr2 = ["OS", "PD"];
// var result = arr.concat(arr2);
// console.log(result);
// arr.reverse();

// arr.unshift("OS");
// arr.unshift("PD");
// arr.push("alaa");
// arr.push(123);
// arr.push(true);
// console.log(arr);
// arr[0] = "hoda";
// get
// console.log(arr);
// print all values
// for (var i = 0; i < arr.length; i++) {
// 	console.log(arr[i]);
// }

// var arr = ["ahmed", "mona", "PD", "OS", "mearn", true];

// var result = arr.slice(2, 5);
// console.log(result);
// var str = "username=ali;password=123";
// var result = str.split(";")[0].split("=");
// console.log(result);

// var arr = [10, 20];
// console.log(arr.shift());
