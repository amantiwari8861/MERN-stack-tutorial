class Employee
{
   //   id
     id;name=45;
     salary=56.8;
    //  a;
     constructor(a)
     {
        this.a=a;// here constructor maked the variable a itself
     }
     //this represents current class object
    xyz() {
        console.log("hello "+this.salary);//concatinating the string
     }
}
// let obj=new Employee();
// console.log(obj.id);
// console.log(obj.name);
// console.log(obj.salary);
// console.log(obj.a);
console.log("---------------------------");
let obj2=new Employee(23);
console.log(obj2.id);
console.log(obj2.name);
console.log(obj2.salary);
console.log(obj2.a);

obj2.xyz();