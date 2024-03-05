// console.log("Html");
let section2 = document.querySelector(".section2");
let fName = document.querySelector(".fName");
let lName = document.querySelector(".lName");
let pCountry = document.querySelector(".country");
let pScore = document.querySelector(".number");
let btn = document.querySelector("button");

let data = [
  {
    firstName: "Rohit",
    lastName: "Sharma",
    country: "India",
    playerScore: 120,
  },
  {
    firstName: "Virat",
    lastName: "Kohli",
    country: "India",
    playerScore: 100,
  },
  {
    firstName: "Akhil",
    lastName: "Sharma",
    country: "India",
    playerScore: 265,
  },
];

//adding player
btn.addEventListener("click", (e) => {
  e.preventDefault();

  let pCountry = document.querySelector(".country");
  if (
    fName.value == "" ||
    lName.value == "" ||
    pCountry.value == "" ||
    pScore.value == ""
  ) {
    alert("Please fill all fields!");
  } else {
    let playerObj = {
      firstName: fName.value,
      lastName: lName.value,
      country: pCountry.value,
      playerScore: Number(pScore.value),
    };
    data.push(playerObj);

    updateData();

    fName.value = "";
    lName.value = "";
    pCountry.value = "";
    pScore.value = "";
  }
});

// function updateData() {
//     data.sort((p1, p2) => {
//       return p2.playerScore - p1.playerScore;
//     });
//     // console.log(data);
//     data.forEach((item) => {
//       let div = document.createElement("div");

//       let playerFName = document.createElement("span");
//       let playerLName = document.createElement("span");
//       let playerCountry = document.createElement("span");
//       let score = document.createElement("span");

//       let lastSpan = document.createElement("div");

//       playerFName.innerText = item.firstName;
//       playerLName.innerText = item.lastName;
//       playerCountry.innerText = item.country;
//       score.innerText = item.playerScore;
//       lastSpan.innerHTML = `<i class="fa-solid fa-trash-can delete"></i><span class="add">+5</span><span class="sub">-5</span>`;

//       div.append(playerFName, playerLName, playerCountry, score, lastSpan);
//       // console.log(div);
//       section2.appendChild(div);
//     });
//   }

function updateData() {
  data.sort((p1, p2) => {
    return p2.playerScore - p1.playerScore;
  });

  let innerHTML = "";

  data.forEach((item) => {
    innerHTML += `
      <div>
        <span>${item.firstName}</span>
        <span>${item.lastName}</span>
        <span>${item.country}</span>
        <span>${item.playerScore}</span>
        <div>
          <i class="fa-solid fa-trash-can delete"></i>
          <span class="add">+5</span>
          <span class="sub">-5</span>
        </div>
      </div>`;
  });

  section2.innerHTML = innerHTML;
}

document.onload = updateData();
// document.addEventListener('load', updateData);
