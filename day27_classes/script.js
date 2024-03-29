class Vechile{
    constructor(wheels, price){
        this.wheels = wheels;
        this.price = price;
    }

    getPrice(){
        return this.price;
        // console.log(this.price);
    }

    printDetails(){
        console.log("wheels and Price of the Car:- " , this.wheels, this.price);
    }
}

class Car extends Vechile{
    constructor(price, doors){
        super(4, price);
        this.doors = doors;
    }

    printDetails(){
        super.printDetails();
        console.log("Car no. of doors:- " , this.doors);
    }
    getPrice(){
        return super.getPrice();
        // let ans = super.getPrice();
        // console.log(ans);
    }
}
let c = new Car(2000, 5);
c.printDetails(); 
console.log(c.getPrice()); 




// console.log("Hello World");
// var obj = {};
// let obj = new Object();
// let v1 = new Vechile(4, 50);

// let Vechile = class {
//   constructor(numWheels, price) {
//     this.numWheels = numWheels;
//     this.price = price;
//   }
//   getPrice(){
//     return this.name;
//   }
// }

// let v1 = new Vechile(4, 50);
// let v2 = new Vechile(10, 100);

// let a1 = 30+50;
// let a = function(){
//     console.log('kjdgf');
// }
// a();



// function Vechile(numwheels, price) {
//   this.numWheels = numwheels;
//   this.price = price;
//   Vechile.prototype.getPrice = function () {
//     return this.price;
//   };
//   Vechile.prototype.color = "black";
//   Object.prototype.type = "sedan";
//   // this.getPrice = function(){
//   //     return this.price;
//   // }
// }


// console.log(typeof v1);
