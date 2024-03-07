function f1(){
    console.log('f1');
}

function f2(){
    console.log('f2');
}

function main(){
    console.log('main');
    setTimeout(f1, 0);
    f2();
}

main();




// function printMe(){
//     console.log('print me');
// }

// function test(){
//     console.log('test');
// }

// setTimeout(printMe, 2000); 
// test()









// let count = 10;
// console.log(count);

// function countDown(){
//     let intervalId = setInterval(function(){
//         count--;
//         console.log(count);
//         if(count === 0){
//             clearInterval(intervalId);
//         }
//     }, 1000);
// }
// countDown();







//timing functions
//setInterval
//clear interval

// function setTimeOutFunc() {
//         console.log("I am from setTimeout");
//         clearInterval(timer);
//     }
//         let timer = setInterval(setTimeOutFunc, 1000);
        // let timer1 = setTimeout(setTimeOutFunc, 5000);
        // let timer2 = setTimeout(setTimeOutFunc, 1000);


//setTimeOut

// function setTimeOutFunc() {
//     console.log("I am from setTimeout");
// }
//     let timer = setTimeout(setTimeOutFunc, 3000);
//     let timer1 = setTimeout(setTimeOutFunc, 5000);
//     let timer2 = setTimeout(setTimeOutFunc, 1000);






// console.log("start");

// function delay(){
//     setInterval(()=>{
//         console.log("hello world!!");
//     }, 2000);
// }

// delay();

// console.log("end");



// console.log("Start");

// function operation1(){
//     console.log("Operation 1 started");
//     for(let i=0;i<10000000;i++){
//         //execute some piece of code
//     }
//     console.log("Operation 1 ended");
// }

// function operation2(){
//     console.log("Operation 2 started");
//     for(let i=0;i<1000000000;i++){
//         //execute some piece of code
//     }
//     console.log("Operation 2 ended");
// }

// function operation3(){
//     console.log("Operation 3 started");
//     for(let i=0;i<1000000000;i++){
//         //execute some piece of code
//     }
//     console.log("Operation 3 ended");
// }

// operation1();
// operation2();
// operation3();

// console.log("end");
