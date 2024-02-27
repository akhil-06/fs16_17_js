let categoryFilter = document.getElementById("category-filter");
let produuctList = document.getElementById("product-list");
// console.log(categoryFilter, produuctList);

categoryFilter.addEventListener("change", function(){
    let selectedValueByUser = categoryFilter.value;
    // console.log(selectedValueByUser);

    let products = produuctList.querySelectorAll(".product");
    // console.log(products);
    products.forEach(product=>{
        let productDataCategory = product.getAttribute('data-category');
        // console.log(productDataCategory);

        if(selectedValueByUser == 'All' || selectedValueByUser === productDataCategory){
            product.style.display = 'block';
        }else{
            product.style.display = 'none'
        }
    })
})






// let deBtn = document.querySelector(".decrement-button")
// let inBtn = document.querySelector(".increment-button");
// let para = document.getElementById("quantity")

// // console.log(para.innerText);
// // console.log(inBtn, deBtn, para);
// let count = 0;

// deBtn.addEventListener('click', function(){
//     if(count > 0){
//         count--;
//         para.innerText = count
//     }
//     // console.log(count)
// })

// inBtn.addEventListener('click', function(){
//     count++;
//     para.innerText = count
//     // console.log(count)
// })



// console.log("Hello!!!");
// let heading1 = document.querySelector("body");
// // heading1.innerText = "hey how are you"
// console.log(heading1.innerHTML);
// // console.log(heading1);
// //3 arguemnts:- event type, functionality, useCapture
// // heading1.addEventListener('click', goToCart);
// heading1.addEventListener('mouseover', function(){
//     // alert("H1 is clicked!!!!")
//     console.log("Mouse hovered");
// })