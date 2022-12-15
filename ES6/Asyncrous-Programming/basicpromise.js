let stocks = {
    Fruits: ['Apple', 'banana', 'strawberry', 'papaya'],
    liquid: ['water', 'ice'],
    holder: ['cone', 'bowl', 'cup'],
    toppings: ['chocolate', 'nuts', 'peanuts']
};
let is_shop_open = true;
let order = (time, work) => {
    return new Promise((res, rej) => {
        if (is_shop_open) {
            setTimeout(() => {
                res(work());
            }, time);
        } else {
            rej(console.log("sorry sir! shop is closed"));
        }
    });
};

order(2000, () => console.log(`${stocks.Fruits[0]} is selected`))

    .catch(() =>
        console.log("customer was left")
    )

    .finally(() => console.log("day ended ,shop is closed "));








// var myPromise = new Promise(function (resolve, reject) {
// 	setTimeout(function () {
// 		resolve("success");
// 	}, 2000);
//     setTimeout(function () {
// 		reject("i am busy right now cut my marks idc !");
// 	}, 1000);
// });

// myPromise.then(
// 	function (data) {
// 		console.log(data + " received in 2 seconds");
// 	},
// 	function (error) {
// 		console.log(error);
// 	}
// );
