// console.log("hello world!!");

// localStorage.setItem("name", "John Doe");

ses.setItem("one", false);
console.log(typeof JSON.parse(sessionStorage.getItem("one")));

let obj = {
    name:"Akhil",
    rollNo:21,
    marks:45,
    subjects:"cse"
}

let arr = [1,2,3,4,5,6,7,8,9];
let newar = JSON.stringify(arr)
let newObj = JSON.stringify(obj);

sessionStorage.setItem("object",newObj);

console.log(JSON.parse(sessionStorage.getItem("object")))


sessionStorage.setItem("numArr", newar);

console.log(typeof JSON.parse(sessionStorage.getItem("numArr")));