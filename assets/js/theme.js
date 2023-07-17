const $html=document.documentElement;
const isDrak=window.matchMedia("(prefers-color-scheme:dark)").matches
console.log(isDrak)
if(sessionStorage.getItem("theme")){
    $html.dataset.theme=sessionStorage.getItem("theme")
}else{
    $html.dataset.theme=isDrak?"dark":"dark";
}
let ispresed=false;
const changetheme=function(){
  ispresed=ispresed?false:true;
  this.setAttribute("aria-pressed",ispresed);
  $html.setAttribute("data-theme",($html.dataset.theme==="light")?"dark":"light");
  sessionStorage.setItem("theme",$html.dataset.theme)

}
window.addEventListener("load",()=>{
    const chnthm=document.querySelector("[data-theme-btn]")
    chnthm.addEventListener("click",changetheme)
})