console.log("ahello aorld!!!");
console.log(emojiList);
let emoje_container = document.getElementById("emoje_container");
let search_field = document.getElementById("search_field");


function displayEmojees(query){
    let filteredData = emojiList.filter(e=>{
        if(e.description.indexOf(query) != -1){
            return true;
        }
    })
    emojiList.forEach(e=>{
        let new_row = document.createElement("tr");
    let new_emojee = document.createElement("td");
    let new_aliases = document.createElement("td");
    let new_description = document.createElement("td");

    new_emojee.innerText = e.emoji;
    new_aliases.innerText = e.aliases;
    new_description.innerText = e.description;

    new_row.appendChild(new_emojee);
    new_row.appendChild(new_aliases);
    new_row.appendChild(new_description);

    emoje_container.appendChild(new_row);

    // console.log(emoje_container);
    })
    // console.log("sdghav");
    
}

function searchData(e){
    let value = e.target.value;
    console.log(value);
    displayEmojees(value)
}
window.addEventListener('load', displayEmojees);
search_field.addEventListener('keyup',searchData)

// window.onload = () => displayEmojees();