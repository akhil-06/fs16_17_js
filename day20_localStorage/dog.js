let likeCount = localStorage.getItem("dogLike")?localStorage.getItem("dogLike"):0;

document.getElementById("likeBtn").addEventListener('click',()=>{
    likeCount++;
    document.querySelector("#likes").innerText = likeCount;
    localStorage.setItem("dogLike", likeCount);
})
document.querySelector("#likes").innerText = likeCount;

let dislikeCount = localStorage.getItem("dogdisLike")?localStorage.getItem("dogdisLike"):0;

document.getElementById("dislikeBtn").addEventListener('click',()=>{
    dislikeCount++;
    document.querySelector("#dislikes").innerText = dislikeCount;
    localStorage.setItem("dogdisLike", dislikeCount);
})
 document.querySelector("#dislikes").innerText = dislikeCount;
