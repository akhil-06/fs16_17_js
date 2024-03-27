// shallow copy vs deep copy
//shallow copy
let employee = {
    name: 'John',
    ename: 'john123',
    salary:5000
}

let newEmployee = {
    ...employee
};
 newEmployee.ename = "kzjsdgc";
console.log(newEmployee);
console.log(employee);



// //object destruring
// let obj= {
//     name:'john',
//     age:23,
//     marks:230,
//     address:{
//         pincode:12711,
//         landmark:"parshuram murti"
//     }
// }
// let {pincode, landmark} = obj.address;
// // let ak1  = obj.address.landmark
// console.log(pincode, landmark);//prints
// // console.log(ak,ak1);



//array destructring
// let arr = [1,2,3,4,5,6];
// let [a] = arr;
// console.log(a);
// console.log(arr[3]);
// console.log(arr[3]);
// console.log(arr[3]);
// console.log(arr[3]);








// let arr1 = [1,2,3,4,5,6,7,8,9];
// let arr2 = [10,45,3,2,34,556,3,2,1,2,4,5,67,786];
// // let arr4 = [40,50,60,670,5670,230]
// let arr3 = [...arr1, ...arr2] 
// // console.log(arr3);
// // console.log(arr1.concat(arr2, arr4));

// function add(...numbers){
//     console.log(numbers);
//     // console.log("kjsdg");
// }

// add(1,2,3,4,5,6)





// let arr = [1,2,3,4,5,6];
// let foundNumber = arr.findIndex(num => num>2);
// console.log(foundNumber);






//map object
// let mymap = new Map();
// mymap.set("1", "Hello World");
// mymap.set(2, 'I am a map');
// console.log(mymap.get(2));
// console.log(mymap);






// let arr = [1,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5];
// let uniqueArr = new Set(arr);
// console.log(uniqueArr);



//default paramatre
// function add(age = 20){
//     console.log("hello my" + age);
// }
// console.log(age);
// add();