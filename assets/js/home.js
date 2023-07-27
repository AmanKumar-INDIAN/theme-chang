"use strict"




/***
 * import 
 */



import { fetchdata } from "./api.js";
import {$skeletonCard,cardQuires} from "./global.js";
import { getTime } from "./module.js";




/**
 * home page search
 * 
 * 
 */




const $searchFeald=document.querySelector("[data-search-field]")
const $searchBtn=document.querySelector("[data-search-btn]")



$searchBtn.addEventListener("click",()=>{
    if($searchFeald.value) window.location=`/recipes.html?q=${$searchFeald.value}`
})

$searchFeald.addEventListener("keydown",e=>{
    if(e.key==="Enter") $searchBtn.click()
})

const $tabbtn=document.querySelectorAll("[data-tab-btn]");
const $tabPanels=document.querySelectorAll("[data-tab-panel]");



let [$LastActiveTabpanles]=$tabPanels;
let [$LastActiveBtn]=$tabbtn;







addEventListener($tabbtn,"click",function(){
    $LastActiveTabpanles.setAttribute("hidden","");
    $LastActiveBtn.setAttribute("aria-selected",false);
    $LastActiveBtn.setAttribute("tabindex",-1)

    const $currenttabpanel=document.querySelector(`#${this.getAttribute('aria-controls')}`);

    $currenttabpanel.removeAttribute("hidden")
    //console.log($currenttabpanel)
    this.setAttribute("aria-selected",true)
    
    $LastActiveTabpanles=$currenttabpanel;
    $LastActiveBtn=this;
    addTabContent(this,$currenttabpanel)
})




/**
 * Navigation with a arrow key
 */







/*







*/
//console.log($LastActiveBtn)

addEventListener($tabbtn,"keydown",function(e){
const $nestElement=this.nextElementSibling;
const $previousElement=this.previousElementSibling ;
  console.log($previousElement)
  console.log(e.key)
    if(e.key==="ArrowRight" && $nestElement ){
        this.setAttribute("tabindex",-1)
        $nestElement.setAttribute("tabindex",0)
        $nestElement.focus()
    }else if(e.key==="ArrowLeft" && $previousElement){
        this.setAttribute("tabindex",-1);
        $previousElement.setAttribute("tabindex",0);
        $previousElement.focus();
    }else if(e.key==="Tab"){
        this.setAttribute("tabindex",-1);
        $LastActiveBtn.setAttribute("tabindex",0);

    }
})


/**
 * 
 * WORK with api
 * fetch data for tab contant
 */


const addTabContent= ($currentTabBTN,$currenttabpanel) =>{
const $gridlist=document.createElement("div");
$gridlist.classList.add("grid-list");

$currenttabpanel.innerHTML=`
<div class="grid-list">
${$skeletonCard.repeat(12)}
</div>`;
//console.log([['mealType',$currentTabBTN.textContent.trim().toLowerCase()],...cardQuires])

fetchdata([['mealType', $currentTabBTN.textContent.trim().toLowerCase()],...cardQuires],function(data){


//console.log(data)
//console.log($currentTabBTN.textContent.trim().toLowerCase())

  $currenttabpanel.innerHTML="";

    for(let i=0;i<12;i++){
        const {
            recipe:{
                image,
                label:title,
                totalTime:cookingTime,
                uri
            }
        }=data.hits[i];
      
   const recipeid=uri.slice(uri.indexOf("_")+1)
   console.log(recipeid)

        const $card=document.createElement("div");
        $card.classList.add("card");
        $card.style.animationDelay=`${100 *i}ms`;
       // console.log(title)
        $card.innerHTML=`
        <figure class="card-media img-holder">
        <img src="${image}" width="195" height="195" loading="lazy"
            alt="${title}" class="img-cover">
    </figure>
    <div class="card-body">
        <h3 class="title-small">
            <a href="./detail.html?recipe=${recipeid}" class="card-link">
            ${title ?? "untitled"}
            </a>
        </h3>
        <div class="meta-wrapper">
            <div class="meta-item">
                <span class="material-symbols-outlined" aria-hidden="true">schedule</span>
                <span class="label-medium">${getTime(cookingTime).time || "<1"}  ${getTime(cookingTime).timeunit}  </span>
            </div>
            <button class="icon-btn has-state removed" aria-label="Add yo save recipes">
                <span class="material-symbols-outlined bookmark-add"
                    aria-hidden="true">bookmark_add</span>

                <span class="material-symbols-outlined bookmark"
                    aria-hidden="true">bookmark</span>

            </button>
        </div>
    </div>
        `;


        $gridlist.appendChild($card)


    }


$currenttabpanel.appendChild($gridlist);
$currenttabpanel.innerHTML +=` 
 <a href="./recipes.html?mealType=${$currentTabBTN.textContent.trim().toLowerCase()}" class="btn btn-secondary label-large has-state">Show more</a>
`;

})


}


addTabContent($LastActiveBtn,$LastActiveTabpanles)