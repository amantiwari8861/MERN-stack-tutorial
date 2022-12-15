// console.log("Before For loop execution");
// for (var i = 0; i < 2; i++) {
//     console.log("setTimeout message");
//     func1();
//     func2();
// }
// console.log("After For loop execution");
// function func1() {
//     console.log("i am func1");
// }
// function func2() {
//     console.log("i am func2");
// }

//after updating above code
console.log("Before For loop execution");
for (var i = 0; i < 2; i++) {
    setTimeout(function() {
        console.log("setTimeout message");
        func1();
    // }, );//by default time is 1 milisecond
    },1000);
    func2();
}
console.log("After For loop execution");
function func1() {
    console.log("i am func1");
}
function func2() {
    console.log("i am func2");
}














