
// let arr = "Akhil Sharma Web Developer";

let person = [
    {name:"Akhil", age:21},
    {name:"Sharma", age:30},
    {name:"sgar", age:40},
    {name:"nanaJi", age:70},
]

let ages = person.map(function(val){
    return  val.age; 
})

let min = Math.min(...ages);
let max = Math.max(...ages);
console.log(min, max, (max-min));





// let arrString = arr.split(" ");
// // console.log(arrString);
// let firstLetterArr = arrString.map(function(val){
//     return val[0];
// })

// console.log(firstLetterArr.join(""));













// let filteredArray = arr.filter(function(num){
//     return num > 0;
// })
// console.log(filteredArray);
// let ans = filteredArray.reduce(function(acc, cv){
//     return acc + cv;
// }, 0)

// console.log(ans);



// let squaredArr = arr.map(function(num){
//     return Math.pow(num, 2);
// })

// console.log(squaredArr);


// let products = [
//     {name: 'apple', price: 5, rating:2.5},
//     {name: 'banana', price: 7, rating:5},
//     {name: 'orange', price: 3, rating:4.9},
//     {name: 'grapefruit', price: 6, rating:2.5},
//     {name: 'kiwi', price: 8, rating:3.5},
//     {name: 'pineapple', price: 9,rating:4}
// ]

// let sum = products.reduce(function(accumulator, currentvalue){
//     return accumulator + currentvalue.price
// }, 0)

// console.log((sum));








// let filteredArray = products.filter(function(value, index, arr){
//     // console.log(value);
//     return value.rating > 4; //this is the current element being processed in the
// })

// console.log(filteredArray);











// let newArr = arr.map(function(val, index, arr){
//     return val*2;
//     // console.log(arr);
//     // console.log(val, index, arr);
// })

// console.log(newArr);
// function printValue(){
//     console.log(value);
// }
// arr.forEach(function(val, index, arr){
//     arr[index] = val*2;
//     console.log(arr);
//     // console.log(val, index, arr);
// })

// console.log(arr);






// function c(){
//     console.log("c");
// }

// function b(){
//     c();
//     console.log("b");
// }

// function a(){
//     b();
//     console.log("a");
// }
// console.log("Hi");
// a()