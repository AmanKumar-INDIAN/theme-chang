/**
 * home page search */
const $searchFeald=document.querySelector("[data-search-field]")
const $searchBtn=document.querySelector("[data-search-btn]")

console.log("hello this is second web ")

$searchBtn.addEventListener("click",()=>{
    if($searchFeald.value) window.location=`/recipes.html?q=${$searchFeald.value}`
})

$searchFeald.addEventListener("keydown",e=>{
    if(e.key==="Enter") $searchBtn.click()
})