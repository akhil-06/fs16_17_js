
var l = 2;
var w = 3;
function calculate(length, width){
    var area = length * width;
    return area;
}
var rectangle = calculate(l, w);













//IIFE -> Immediately invoked function expression
// (()=>{

// })()


// (function (){
//     console.log('IIFE');
// })();




// var a = 8;
// ((a)=>{
//     a = 10;
//     console.log(a);
// })(a);

// console.log(a);







// var b = 10
// function print(){
//     let b = 8;
//     console.log(b);
// }
// print();
// console.log(b);












//Arrow functions
// function sum(){
//     console.log("sum");
// }


// let add = (a,b)=>{
//     return a+b;
// }
// // let add = (a,b)=>a+b;

// console.log(add(4,5));






//HOF (Higher order  function)

// function returnFun(){
//     return function(){
//         console.log("Hi!!!");
//     }
// }

// let ans = returnFun();
// ans();
// console.log(ans);










// function getCapture(camera){
//     console.log(camera);
//     camera()
// }

// function cameraName(){
//     console.log('Nikon');
// }

// getCapture(cameraName);




//anonynous functions 
//let a = 10;
// let add = function (a, b){
//     console.log(a+b);
// }

// add(2,3);
// console.log(add);










//fucntion declaration
// function sum(a, b){
//     // console.log("sum is" + a+b);
//     //a-> 20, b-> undefined => a+undefined=> Nan
//     console.log(`Sum is ${a+b}`);
//     // return a+b;
// }

//function calling
// sum(20);
// console.log(ans);