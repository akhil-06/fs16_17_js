let myThrottle = (fn, delay )=>{
    return function(){
        document.getElementById("myid").disabled = true;
        setTimeout(()=>{
            fn();
        }, delay)
    }
}

let newFun = myThrottle(()=>{
    document.getElementById("myid").disabled = false;
    console.log("user clicked!!");
}, 2000)




// let counter = 0;
// function getdata(){
//     console.log("encountered " + counter++);
// }

// function myDedounceFunction(call, delay){
//     let timer;
//     return function(){
//         if(timer) clearTimeout(timer);
//        timer = setTimeout(()=>{
//             call();
//         }, delay);
//     }
// }

// let betterFunction = myDedounceFunction(getdata, 1000)





// function createLikeButton(){
//     let count = 0;
//     function increment(){
//         count++;
//         updateDisplay()
//     }
//     function updateDisplay(){
//         let btn = count===1?"1 like":count +" likes";
//         likeButton.innerText = btn;
//     }

//     let likeButton = document.createElement('button');
//     likeButton.innerText = "0 Likes";
//     likeButton.addEventListener('click',increment);

//     return likeButton;
// }



// document.getElementById('likebtn1').appendChild(createLikeButton());
// document.getElementById('likebtn2').appendChild(createLikeButton());
// document.getElementById('likebtn3').appendChild(createLikeButton());


// function createCounter(){
//     let count = 0;

//     function increment(){
//         count++;
//         updateValue();
//     }
//     function decrement(){
//         count--;
//         updateValue();
//     }

//     function updateValue(){
//         document.getElementById('counter').innerText=count;
//     }
//     return {
//         increment,
//         decrement
//     }
// }

// let counter = createCounter();
// console.log(counter);

// document.getElementById("incrementBtn").addEventListener('click', counter.increment);

// document.getElementById("decrementBtn").addEventListener('click', counter.decrement);


//example of closures
// function createBackpack(){
//     let snacks = "chcoclates";

//     return function(){
//         console.log("In the bag we are haing " + snacks);
//     }
// }

// let journey = createBackpack();
// console.log(journey());

// var a = 10;
// function outer(){
//     var b = 20;
//     console.log(b);
//     function inner(){
//         var c = 30;
//         console.log(a,b,c);
//         function innerMost(){
//             var d = 40;
//             console.log(a,b,c,d);
//         }
//         innerMost();
//     }
//     inner();
// }
// outer();
