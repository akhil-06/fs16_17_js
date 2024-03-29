function Createstudent(name, age,color) {
//   console.log(this);
  this.name = name;
  this.age = age;
//   this.color = color;
//   this.color = color
//   this.printName = function(){
//     console.log(this.name);
//   }
  Createstudent.prototype.printName = function(){
    console.log(this.name);
  }
  Createstudent.prototype.color = "green";
}

// let student1 = new Createstudent("Anchit", 32, "black");
// let student2 = new Createstudent("sdfvc", 32);
let student3 = new Createstudent("dasfva", 32);
let student4 = new Createstudent("dfv", 32);
let student5 = new Createstudent("adfv", 32);
let student6 = new Createstudent("fgb", 32);
let student7 = new Createstudent("rg", 32);


// console.log(student1, student2,student3,student4,student5);















//constructor
// function Createstudent(name, age){
//     console.log(this);
//     this.name = name;
//     this.age = age;
// }

// let student1 = new Createstudent("Anchit", 32);
// // let student2 = new createStudent("Swaraj", 12);
// console.log(student1);

// function createStudent(name, age) {
//     let student = {};
//     student.name = name;
//     student.age = age;
//     return student;
// }

// let student1 = createStudent("Anchit", 32);
// let student2 = createStudent("Swaraj", 12);
// console.log(student1, student2);

// let student1 = {
//     name: "John",
//     age:23,
//     rollNo:30,
//     marks:400
// }

// let student2 = {

// }

// let student3 = {

// }

// let student4 = {

// }

// let student5 = {

// }

// let student1 = {
//     name:"Akhil",
//     age:21,
//     gender:"Male",
//     desigantion:"SDE and Instructor"
// }

// // student1.printDetails();

// let student2 = {
//     name:"Saraj",
//     age:23,
//     gender:"Male",
//     desigantion:"SDE and Instructor"
// }
// // student1.printDetails.call(student2) // using call method to change
// function printDetails(state, country){
//     console.log(this.name + state + country);
// }

// printDetails.apply(student1, ["haryana", "India"]);
// printDetails.apply(student2, ["Delhi", "delhi"])

// printDetails.call(student1, "haryana", "India");
// printDetails.call(student2, "Delhi", "delhi")
// console.log(printDetails);

// student1.printDetails.call(student2);

// console.log(this);

// function a(){
//     console.log(this);
// }

// a();

// let obj = {
//   name: "Akhil",
//   marks: 30,
//   age: 21,
//   b: {
//     c: 456789,
//     a: function () {
//       console.log(this);
//     },
//     d: true,
//   },
// };

// obj.b.a();
