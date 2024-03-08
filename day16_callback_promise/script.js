let loggedIn = true;
let promise = new Promise((res, rej) => {
  setTimeout(() => {
    if (loggedIn) {
      res("Logged in successfully");
      // console.log("true");
    } else {
      rej();
    }
  }, 2000);
});

promise
  .then((msg) => {
    console.log(msg);
  })
  .catch(() => {
    console.log("Yes we are not loggedin");
  });

console.log(promise);

// console.log("Hello");

// setTimeout(function(){
//     console.log("this will execute after some time");
// }, 2000);

// console.log("World!!!");
// console.log("three");

// cheese -> dough -> pizza

function cheese() {
  return new Promise((res) => {
    setTimeout(() => {
      let cheese = "amul cheese";
      res(cheese);
    }, 1000);
  });
}

function dough(cheese) {
  return new Promise((res) => {
    setTimeout(() => {
      let dough = cheese + " dough";
      res(dough);
    }, 1000);
  });
}

function bakePizza(dough) {
  return new Promise((res) => {
    setTimeout(() => {
      let pizza = dough + " pizza";
      res(pizza);
    }, 1000);
  });
}

cheese()
.then((cheese)=>{
    console.log(cheese);
    return dough(cheese);
})
.then((dough)=>{
    console.log(dough);
    return bakePizza(dough)
})
.then((pizza)=>{
    console.log(pizza);
    return;
})



// function dough(cheese, callback) {
//   let a = setTimeout(function () {
//     let dough = cheese + "dough";
//     console.log("here is the dough", dough);
//     callback(dough);
//   }, 2000);
// }

// function bakePizza(dough, callback) {
//   setTimeout(function () {
//     let pizza = dough + "pizza";
//     console.log("Here is the pizza", pizza);
//     callback(pizza);
//   }, 2000);
// }

// cheese();

//let

//signup -> login -> feed -> search -> profile -> follow
