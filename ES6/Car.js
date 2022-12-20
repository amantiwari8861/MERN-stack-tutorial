class Car 
{
    speed=100;//property (variable)
    // color,model;//error
    color;
    model;
    // Car(a,b)//this will not work as a constructor
    constructor(color,num2,price)//this will not work as a constructor
    {
        // color=color; //color will be undefined (we have to use this)
        this.color=color;
        this.model=num2;
        this.price=price
        // console.log("In constructor");
        // console.log("color="+this.color);
        // console.log("model="+this.model);
        // console.log("speed="+this.speed);
        // console.log("price="+this.price);
    }
    // constructor(color)//error :A class may only have one constructor
    // {
    //     this.color=color;
    // }
    show()//method (function)
    {
        console.log("The Details of Car is :");
        console.log("color="+this.color);
        console.log("model="+this.model);
        console.log("speed="+this.speed);
        console.log("price="+this.price);
    }
}

// let obj=new Car();
// console.log(typeof obj);
// console.log(obj.speed);
// obj.show();

// const car1 = new Car("red","BMW",5000000);
// car1.show();

const car2=new Car();
car2.show();