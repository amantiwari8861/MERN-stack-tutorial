class MyArray extends Array {
	constructor(...args) {
		super(...args);
	}
	display() {
		let strItems = "";
		for (let val of this) {
			strItems += `${val} `;
		}
		console.log(strItems);
	}
}
let letters = new MyArray("Sam", "Jack", "Tom");
letters.display(); 
