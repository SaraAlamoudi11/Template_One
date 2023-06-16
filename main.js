
let up = document.querySelector(".up");

window.addEventListener("scroll",(e) =>{
    if(scrollY >= 1000){
        up.style.right = "10px";
    }else{
        up.style.right = "-30px";
    }
});
up.onclick = function (){
 window.scrollTo({
    top :0,
    behavior :"smooth",
 });
}