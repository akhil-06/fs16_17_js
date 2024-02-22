function sum(){

}

// let arr = [1,2,true, "akhil sharma", null, undefined, sum, {}, [1,2,3,4]];

let productsArray = [
    {name:'Product1', price:70},
    {name:'Product2', price:100},
    {name:'Product3', price:200},
    {name:'Product4', price:50},
    {name:'Product5', price:500},
    {name:'Product6', price:900}
]

delete productsArray[4]; // delete element at index 4 from array
console.log(typeof productsArray[4]);

// let ans = productsArray.every(function(obj){
//     if(obj.price > 100){
//         return true;
//     }else{
//         return false;
//     }
// })

// console.log(ans);

// productsArray.sort(function(obj1, obj2){
//     return obj2.price - obj1.price
// })

// console.log(productsArray);
// let let = 30;

// productsArray.splice(2);
// console.log(productsArray.sort());



// let newArr = productsArray.slice(3);
// console.log(newArr);
// console.log(productsArray);






// productsArray.unshift({name:'Product1', price:300})
// productsArray.shift()
// productsArray.pop();


//end of the array
// productsArray.push({name:'produt7', price:700});
// console.log(productsArray);


// for(let i=0;i<productsArray.length;i++){
//     console.log(productsArray[i].name);
// }
// console.log(productsArray.length);