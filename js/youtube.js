console.log("connect");

var moreBtn = document.querySelector(".info .metadata .titleAndButton .moreBtn");
var title = document.querySelector(".info .metadata .titleAndButton .title")
moreBtn.addEventListener("click", () =>{
    moreBtn.classList.toggle("clicked");
    title.classList.toggle("clamp");
});