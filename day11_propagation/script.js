let div = document.querySelector("div");

//event deligation
div.addEventListener("click", function (eve) {
  // console.log(eve);
  if (eve.target.tagName === "BUTTON") {
    if (eve.target.innerText === "Button 5") {
      console.log(eve.target.innerText);
      console.log(eve);
    }
  }
});

// buttons.forEach(button=>{
//     button.addEventListener('click', function(event){
//         console.log(event);
//         console.log(event.target.innerText);
//     })
// })

// let div1 = document.getElementById("div1");
// let div2 = document.getElementById("div2");
// let div3 = document.getElementById("div3");

// div1.addEventListener('click', function(e){
//     console.log('Div1 is clicked');
//     // e.stopPropagation();
// })

// div2.addEventListener('click', function(e){
//     console.log('Div2 is clicked');
//     e.stopPropagation();
// })

// div3.addEventListener('click', function(e){
//     console.log('Div3 is clicked');
//     // e.stopPropagation();
// })
