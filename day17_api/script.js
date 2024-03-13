document.getElementById("fetchBtn").addEventListener("click", fetchImage);

async function fetchImage() {
  try {
    let dogImageContainer = document.getElementById("dogimagecontainer");

    let reponse = await fetch("https://dog.ceo/api/breeds/image/random");
    let data = await reponse.json();

    let img = document.createElement("img");
    img.src = data.message;
    dogImageContainer.innerHTML = "";
    dogImageContainer.appendChild(img);
  } catch (err) {
    console.log(err);
  }
}
