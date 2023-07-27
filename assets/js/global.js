import { fetchdata } from "./api";



/**
 * Add event on multiple eventes
 * @param {NodeList} $elements Noadlist
 * @param {String} eventtype Event type string
 * @param {function} callback Callback function

 */
window.addEventListener=($elements,eventtype,callback)=>{
    for(const $element of $elements){
        $element.addEventListener(eventtype,callback)
    }
}


export const cardQuires=[["field","uri"],
["field","label"],
["field","image"],
["field","totalTime"]    ];

console.log(cardQuires)


/**
 * 
 * Skeletion card
 */


export const $skeletonCard=`
<div class="card skeleton-card">
<div class="skeleton card-banner"></div>

<div class="card-body">
    <div class="skeleton card-title"></div>
    <div class="skeleton card-text"></div>
</div>
</div>
`;

const ROOt = "https://api.edamam.com/api/recipes/v2";
window.saveRecipe=function(element,recipeid){
    const isSaved=window.localStorage.getItem(`cookio-recipe${recipeid}`)
    ACCESS_POINT=`${ROOt}/${recipeid}`

    if(!isSaved){
        fetchdata(cardQuires,function(data){
            window.localStorage.setItem(`cookio-recipe${recipeid}` , JSON.stringify(data));
            element.classList.toggle("saved");
            element.classList.toggle("removed");
        });
        ACCESS_POINT=ROOt;

    }else{
        window.localStorage.removeItem(`cookio-recipe${recipeid}`);
        element.classList.toggle("saved");
        element.classList.toggle("removed");
    }
}