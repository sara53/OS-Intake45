// //location
// function execute() {
// 	console.log(history);
// 	//location.assign("https://www.google.com.eg/");
// 	//location.replace("https://www.google.com.eg/");
// 	// location.reload();
// 	// location.pathname = "/about.html";
// 	// console.log(location.pathname);
// 	// get
// 	// console.log(location.href);
// 	// location.href = "https://www.google.com.eg/";
// }
// function successCb(position) {
// 	console.log(position.coords.latitude);
// 	console.log(position.coords.longitude);
// }
// function rejectCb() {
// 	console.log("reject");
// }

// navigator.geolocation.getCurrentPosition(successCb, rejectCb);
/** Ajax  */

// var tbody = document.getElementsByTagName("tbody")[0];
// function getAllUsers() {
// 	var xhr = new XMLHttpRequest();

// 	xhr.open("GET", "https://jsonplaceholder.typicode.com/users/3");
// 	xhr.send("");

// 	xhr.onreadystatechange = function () {
// 		if (xhr.readyState == 4) {
// 			if (xhr.status == 200) {
// 				var user = JSON.parse(xhr.response);
// 				tbody.innerHTML = `
// 					<tr>
// 						<td>${user.id}</td>
// 						<td>${user.name}</td>
// 						<td>${user.email}</td>
// 					</tr>
// 				`;
// 			}
// 		}
// 	};
// }
// Date
// var expireDate = new Date();
// expireDate.setDate(expireDate.getDate() + 3);

// function saveCookie(key, value) {
// 	document.cookie = `${key}=${value};expires=${expireDate}`;
// }

// function getAllCookies() {
// 	return document.cookie;
// }

// function getCookie(key) {
// 	// return value
// }

// function deleteCookie(key) {
// 	var expireDate = new Date();
// 	expireDate.setDate(expireDate.getDate() - 1);
// 	document.cookie = `${key}=null;expires=${expireDate}`;
// }

// deleteCookie("username");
// deleteCookie("email");

// saveCookie("user", JSON.stringify({ fname: "ali", age: 20 }));
// saveCookie("colors", JSON.stringify(["red", "green", "blue"]));
// saveCookie("name", "sara");
// saveCookie("age", 30);
// document.cookie = "username=ali;expires=" + expireDate;
// document.cookie = "username=ahmed;expires=" + expireDate;
// document.cookie = "email=ahmed@gmail.com;expires=" + expireDate;

// document.cookie = "pass=!@#$"; // set

// // get
// console.log(document.cookie);
// try {
// 	throw "Error os";
// } catch (error) {
// 	console.log(error);
// 	document.write("Network error please try again");
// } finally {
// 	console.log("Hello open source");
// }

// function getData(x, y) {
// 	if (arguments.length == 0) {
// 		throw "pass at least two args at fun call";
// 	}
// 	console.log(x + y);
// }

// getData("mona", "ahmed");
