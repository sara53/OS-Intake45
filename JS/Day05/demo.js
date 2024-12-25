/**
 * == attributes
 * --------------------------
 * == getAttribute
 * == setAttribute
 * == hasAttribute
 * == removeAttribute
 * == toggleAttribute
 *
 */

// var img = document.images[0];
// var link1 = document.getElementById("link1");
// function execute() {
// 	if (link1.hasAttribute("class")) {
// 		link1.removeAttribute("class");
// 	} else {
// 		link1.setAttribute("class", "jsClass test");
// 	}
// 	// link1.setAttribute("class", "jsClass");
// 	// img.setAttribute("src", "./2.jpg");
// 	// console.log(img.getAttribute("src"));
// 	// console.log(img.getAttribute("alt"));
// 	// console.log(link1.getAttribute("href"));
// }
// var parent = document.getElementById("parent");
// var p = document.createElement("p");
// var span = document.createElement("span");
// var info = document.getElementsByClassName("info")[0];
// span.innerHTML = "Mona Ali";
// var text = document.createTextNode("hello open source");
// //p.innerHTML = "Hello open source";

// // p.appendChild(text);

// info.insertAdjacentElement; // search
// var result = p.appendChild(span);
// console.log(result);
// function execute() {
// 	info.remove();
// 	// info.before(p);
// 	// document.body.appendChild(p);
// 	// parent.append("Welcome");
// 	//parent.appendChild(p, span);
// }
/// Date Object
/**---------------BOM
 * == Browser Object Model
 *  -- window
 *  -- screen (search)
 *  -- location
 *  -- navigator
 *  -- history
 *
 * ---------------- */
// console.log(window);
// alert( "hello" );
// alert("hello");
// var person = {
// 	fname: "ali",
// 	display: function () {},
// };

// person.fname;

// display();

// var myWindow;
// function openNewWindow() {
// 	myWindow = window.open("about.html", "", "width=300,height=300");
// 	myWindow.focus();
// }
// function closeWindow() {
// 	myWindow.close();
// }
// function moveToWindow() {
// 	myWindow.moveTo(300, 300);
// }
// function moveByWindow() {
// 	myWindow.moveBy(-100, -100);
// }
// function resizeToWindow() {
// 	myWindow.resizeTo(400, 400);
// }
// function resizeByWindow() {
// 	myWindow.resizeBy(100, 100);
// }
// function test(fname, age) {
// 	console.log(fname);
// 	console.log(age);
// 	//open("about.html");
// 	//console.log("welcome open source");
// 	return "ali";
// }

// setTimeout(test(), 2000);

// var i = 0;

// var myInterval = setInterval(function () {
// 	console.log(i++);
// }, 1000);

// setTimeout(function () {
// 	// stop interval
// 	clearInterval(myInterval);
// }, 5000);
// var p = document.getElementById("result");
// var count = 0;
// var myInterval;
// function start() {
// 	myInterval = setInterval(function () {
// 		p.innerHTML = count++;
// 	}, 1000);
// }

// function stop() {
// 	clearInterval(myInterval);
// }
//
// var result = document.getElementById("result");

// function startDownload() {
// 	result.style.display = "block";
// 	setTimeout(function () {
// 		result.innerHTML = "<a href='#'>Link</a>";
// 	}, 3000);
// }

/** Event
 * -----------------------
 * 1- add attribute on the element
 *
 *
 *
 */

var p = document.getElementById("output");
var btn = document.getElementById("btn");

// function changeContent() {
// 	console.log("hello");
// }

// function test() {
// 	console.log("hello");
// }

// btn.addEventListener( "click", function chane() {
//     //
// });

// setTimeout(function () {
// 	console.log("after 3 seconds");
// 	btn.removeEventListener("click", changeStyle);
// } );

// function changeStyle(color) {
// 	p.style.background = color;
// }

//changeContent({target:"element"})
// btn.onclick = changeContent;
// btn.onclick = function () {
// 	changeStyle("red");
// };
// btn.onclick = changeStyle;
// btn.onclick = changeContent;

// btn.onmouseenter = changeStyle;

// function sayHello(x) {
// 	console.log(x.fname);
// }

// sayHello({ fname: "mona" });
// function changeStyle(e) {
// 	console.log(e.target);
// var input1 = document.getElementById("input1");
// var result = document.getElementById("result");
// // 	console.log("hello");
// // }
// // btn.addEventListener("click", changeStyle);

// input1.addEventListener("focus", function (e) {
// 	input1.style.border = "4px solid blue";
// });
// input1.addEventListener("blur", function (e) {
// 	input1.style.border = "4px solid orange";
// });
// input1.addEventListener("input", function (e) {
// 	if (input1.value.length >= 3) {
// 		input1.style.border = "4px solid green";
// 		result.style.display = "none";
// 	} else {
// 		input1.style.border = "4px solid red";
// 		result.style.display = "block";
// 	}
// });

// function login(e) {
// 	e.preventDefault();
// 	console.log("Login success");
// }

function first(e) {
	e.stopPropagation();

	console.log("first");
}
function second(e) {
	e.stopPropagation();
	console.log("Second");
}
function third(e) {
	e.stopPropagation();
	console.log("third");
}
