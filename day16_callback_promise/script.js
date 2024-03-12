// cheese -> dough -> pizza
// function cheese() {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       let cheese = "amul cheese";
//       res(cheese);
//     }, 1500);
//   });
// }

// function dough(cheese) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       let dough = cheese + " dough";
//       res(dough);
//     }, 1500);
//   });
// }

// function pizza(dough) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       let pizzaa = dough + " pizaa";
//       res(pizzaa);
//     }, 1500);
//   });
// }

// function pizza(dough) {
const fn = new Promise((res, rej) => {
  let abc = true;
  setTimeout(() => {
    if (abc) {
      res("resolve");
    } else {
      rej("rej");
    }
  }, 0);
});
// }

setTimeout(() => {
  console.log("timeout");
}, 0);
fn.then((res) => {
  console.log(res);
});

async function orderPizza() {
  try {
    let cheeseFun = await cheese();
    let d = await dough(cheeseFun);
    let piza = await pizza(d);
    console.log(piza);
  } catch (err) {
    console.log(err);
  }
}

orderPizza()
.then(()=>{
  console.log("sgjdfckjaw fjfase d");
})

// cheese()
//   .then((msg) => {
//     console.log(msg);
//     return dough(msg);
//   })
//   .then((msg) => {
//     console.log(msg);
//     return pizza(msg);
//   })
//   .then((msg) => {
//     console.log(msg);
//   })
//   .catch((msg) => {
//     console.log(msg);
//   });

// let userloggedIn = true;

// function loggedinUser() {
//   let p1 = new Promise((res, rej) => {
//     setTimeout(() => {
//       if (userloggedIn === true) {
//         res("user is loggedIn succesfully");
//       } else {
//         rej("user is not loggedIn");
//       }
//     }, 3000);
//   });
//   return p1;
// }
// // console.log(loggedinUser());
// loggedinUser()
// .then((msg) => {
//   console.log(msg);
// }).catch((msg) => {
//   console.log(msg);
// });
// console.log(p1); // object Promise

// let loggedIn = true;
// let promise = new Promise((res, rej) => {
//   setTimeout(() => {
//     if (loggedIn) {
//       res("Logged in successfully");
//       // console.log("true");
//     } else {
//       rej();
//     }
//   }, 2000);
// });

// promise
//   .then((msg) => {
//     console.log(msg);
//   })
//   .catch(() => {
//     console.log("Yes we are not loggedin");
//   });

// console.log(promise);

// console.log("Hello");

// setTimeout(function(){
//     console.log("this will execute after some time");
// }, 2000);

// console.log("World!!!");
// console.log("three");

// cheese -> dough -> pizza

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
