
const $html=document.documentElement
const isdark=window.matchMedia("(prefers-color-scheme:dark)").matches
console.log(isdark)
let ispressed=false;
if(sessionStorage.getItem("theme")){
    $html.dataset.theme=sessionStorage.getItem("theme");

}else{
    $html.dataset.theme=isdark ? "dark": "light";
}
const changetheme=function(){
ispressed=ispressed ? false:true;
this.setAttribute("aria-pressed",ispressed)
$html.setAttribute("data-theme",($html.dataset.theme==="light")? "dark" :"light");
sessionStorage.setItem("theme",$html.dataset.theme);
}


window.addEventListener("load",function(){
    const $thmebtn=this.document.querySelector("[data-theme-btn]");
    $thmebtn.addEventListener("click",changetheme);
})