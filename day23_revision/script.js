let apikey = "GZhobIantOvJ5inT9vzftTUSbDwo4GIuFKAk1_Bu3Y4";
let count = 10;
let apiUrl = `https://api.unsplash.com/photos/random/?client_id=lo0FTTa2hv_QUrmGp2QSgNNSI-Y-Z0dOJyaMsoZwJM4&count=${count}`;
let photosArray = [];
let imageContainer = document.getElementById("img-container")

function setAttributes(element, attributes) {
    for (const key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
}

function displayImages(){
    photosArray.forEach((photo)=>{
        let item = document.createElement("a");
        setAttributes(item,{
            href : `photo.links.html`,
            target: "_blank"
        });
        console.log(item);

        let img = document.createElement("img");
        setAttributes(img,{
            src : photo.urls.small,
            alt: `${photo.alt_description}`
        });
        // console.log(img);
        item.append(img);
        imageContainer.append(item);
    })
}

async function getPhotos(){
    let response = await fetch(apiUrl);
    photosArray = await response.json();
    console.log(photosArray);
    displayImages()
}

window.addEventListener('scroll', ()=>{
    if(window.scrollY + window.innerHeight >= document.body.offsetHeight){
        getPhotos();
    }
})

getPhotos();