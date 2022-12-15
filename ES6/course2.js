import crs, { courseName } from "./course1.js";
console.log(courseName);
console.log(crs.getCourseName());
crs.setCourseName("ES6");
console.log(crs.getCourseName());

// make a package.json file in same folder and write 
// {
//     "type":"module"
// }