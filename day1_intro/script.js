let pokemonContainer = document.querySelector("#pokemon-card-container");
let searchInput = document.querySelector("#search");
// console.log(searchInput.value);
let filterBtn = document.querySelector('#filter');
let type = document.querySelector("#type");
console.log(type);


let colors = {
    normal:'grey',
    poison:'purple',
    ground:'yellow',
    rock:'brown'
}

function createPokemoncard(details){
    let card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `
    <div class='card-inner'>
        <div class='card-front'>
            <div class='id'>${details.id}</div>
            <img src='${details.sprites.front_default}'>
            <div class='name'>${details.name}</div>
            <div class='type'>${details.types[0].type.name}</div>
        </div>

        <div class='back-card'>
        <img src='${details.sprites.back_default}'>
        <div class='ability'>${details.abilities[0].ability.name}</div>
        <div class='name'>${details.name}</div>
        </div>
    </div>
    `
    card.querySelector('.card-inner').style.backgroundColor = colors[details.types[0].type.name];
    return card;
}

searchInput.addEventListener('input', ()=>{
    let allCards = document.querySelectorAll(".card");
    // console.log(allCards);
    let pokeArray = Array.from(allCards);
    pokeArray.forEach((element)=>{
        let pokemonName = element.children[0].children[0].children[2].innerText;
        if(pokemonName.startsWith(searchInput.value)){
            element.style.display="block";
        }else{
            element.style.display="none";
        }
        // console.log(pokemonName);
    })
})

filterBtn.addEventListener('click', ()=>{
    let allCards = document.querySelectorAll(".card");
    let pokeArray = Array.from(allCards);
    pokeArray.forEach((element)=>{
        // console.log((element));
        let pokemonType = element.children[0].children[0].children[3].innerText;
        // console.log(pokemonType);
        if(pokemonType === type.value){
            element.style.display = "block"
        }else{
            element.style.display = "none"
        }
    })
})

async function fetchPokemon(i){
    let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    let result = await response.json();
    return result;
}

async function fetchmainpage(){
    for(let i=1;i<=151;i++){
        let pokemon = await fetchPokemon(i);
        // console.log(pokemon);
        let card = createPokemoncard(pokemon);
        // console.log(card);
        pokemonContainer.append(card)
    }
}

fetchmainpage()










// console.log("Hello World!!!!", "Akhil Sharma", "geekster", "Web");
// console.log("Hello World!!!!", "Akhil Sharma", "geekster", "Web");
// console.log("Hello World!!!!", "Akhil Sharma", "geekster", "Web");
// console.log("Hello World!!!!", "Akhil Sharma", "geekster", "Web");
// console.log("Hello World!!!!", "Akhil Sharma", "geekster", "Web");

// console.log(1,4,5,7,8,9,3,4);

// let ak = "Session";
// var sum  = 50;
// var sum = 30;
// const yes = true;

// let AK = "Session";

// console.log(ak, sum, sum, yes, AK);


var a= 234213;
// console.log(a);
// let b = "Akhil Sharma";
let c = true;
let d = null;
let e = undefined;
let f = BigInt(72534823574281345213);
let  g = Symbol('Geekster!!!');
// console.log(typeof a,typeof b,typeof c,typeof d,typeof e,typeof f,typeof g)

let obj = {
    name:"Akhil Sharma",
    job:"SDE",
    company:"Geekster",
    marks:75,
    age:21,
    salary:"Main nhi batauga"
}

obj.location = "Gurugram"
obj.age = 22;
delete  obj.salary;
// console.log(obj);

// console.log(2**3);
// console.log(typeof obj);



// console.log(2 == "2");

// let a3 = 10;
// let a3String = BigInt(a3);
// console.log(a3String);
// console.log(typeof(a3+""));


// let shoppingAmount = 56;
// if(shoppingAmount > 1000){
//     //10% discount
//     let discount = 0.10 * shoppingAmount;
//     console.log("you will be getting 10% discount of amount:- " + discount);
// }else if(shoppingAmount >= 500 && shoppingAmount <= 1000){
//     //5% discount
//     let discount = 0.05 * shoppingAmount;
//     console.log("you will be getting 5% discount of amount:- " + discount)
// }else{
//     console.log("No discount will be givene to you!!!");
// }


// let cookiesAccepted = false;
// if(true){
//     //strore this info in bbrowser
// }else{
//     //no need to store anything
// }



// let shippingOption = "Normal Delievry express";

// switch(shippingOption){
//     case 'Express':
//         console.log('Your package is being delivered via Express in 1-2 days');
//         break;
//     case 'one-day Delievery':
//         console.log('Your package is being delivered via one day delivery service, which means it');
//         break;
//     case "Normal Delievry":
//         console.log("Package will be delievered in 5-7 days");
//         break;
//     default:
//         console.log("Invalid Shipping Option")
// }


// for(let i=1;i<=100000;i++){
//     console.log("Akhil Sharma" + i);
// }

// let arr = [
//     {name:"product1", price:300},
//     {name:"product2", price:200},
//     {name:"product3", price:400},
//     {name:"product4", price:500},
//     {name:"product5", price:500},
//     {name:"product6", price:600},
//     {name:"product7", price:100},
// ];
// let total = 0;
// for(let i=0;i<arr.length;i++){
//     total = total + arr[i].price
//     // console.log(arr[i].price);
// }
// console.log(total);


// let i = -1000;
// while(i<10){
//     console.log(i);
//     i++;
// }





// let i = 10;
// do{
//     console.log("Hello world");
//     i++;
// }while(i<5)




// function sum(a, b){
//     // console.log(a+b);
//     return a+b;
// }

// let ans = sum(10, 20);
// console.log(ans);

// function prime(num){
//     if(num<2){
//         return false;
//     }
//     for(i=2; i<num; i++){
//         if(num%i==0){
//             return false;
//         }
//     }
//     return true;
// }
// let result = prime(1);
// console.log(result);
 

// function prime(num)
// {
//     if(num==0 || num==1)
// {
//     console.log("not a prime number");
//     return;
// }
//     for(let i=2;i<num/2;i++)
//     {
//         if(num%i==0)
//         {
//             console.log("not a prime number");
//             return;
//         }
//     }
//     console.log("prime number");
// }
// prime(50);




// function sum(){
//     var c3 = 30;
// }
// console.log(c3);

// if(true){
//     var b = 20;
// }

// console.log(b);

// let a2 = 10;

// {
//     const a1 = 10;
//     // a1 = 30;
//     console.log(a1);
// }
// a1 = 30;
// console.log(a2);







let z = 30;
z--;
function outer(){
    let x = 10;
    x++;
    function inner(){
        let y = 20;
        z++;
        --x;
        console.log(x,y,z);
    }
    inner()
}
outer();
