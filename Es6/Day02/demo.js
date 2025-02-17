// function getAllProducts() {
// 	let myPromise = new Promise(function (x, y) {
// 		let products;

// 		products = [100, 200, 300];
// 		products ? x(products) : y("Error on products List");
// 	});

// 	return myPromise;
// }

// function getProduct(productId) {
// 	let myPromise = new Promise((resolve, reject) => {
// 		var product = {
// 			id: productId,
// 			name: "Book",
// 			price: 300,
// 		};

// 		product ? resolve(product) : reject("Error on product details");
// 	});

// 	return myPromise;
// }

// function getPrice(product) {
// 	return new Promise((resolve, reject) => {
// 		var price = product.price;
// 		price ? resolve(price) : reject("Error on Price Request");
// 	});
// }

// async function execute() {
// 	try {
// 		let products = await getAllProducts();
// 		let product = await getProduct(products[0]);
// 		let price = await getPrice(product);
// 		console.log(price);
// 	} catch (error) {
// 		console.log(error);
// 	}
// }

// execute();
// getAllProducts()
// 	.then((products) => {
// 		return getProduct(products[0]);
// 	})
// 	.then((product) => {
// 		return getPrice(product);
// 	})
// 	.then((price) => {
// 		console.log(price);
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	});

// fetch("https://jsonplaceholder.typicode.com/users")
// 	.then((response) => {
// 		return response.json();
// 	})
// 	.then((data) => {
// 		console.log(data);
// 	})
// 	.catch((error) => {
// 		console.log(error);
// 	});

async function fetchUsers() {
	try {
		let response = await fetch("https://jsonplaceholder.typicode.com/users/2");
		let data = await response.json();
		for (let i = 0; i < data.length; i++) {
			document.writeln(`<h1>${data[i].name}</h1>`);
		}
	} catch (error) {
		console.log(error);
	}
}

fetchUsers();
