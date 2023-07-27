"use strict";

window.ACCESS_POINT = "https://api.edamam.com/api/recipes/v2";
const APP_ID = "1c941f6f";
const API_KEY = "3eca3f0a4b737bbc36eb7cbff33e7c8d";
const type = "public";

/***
 *
 * @param {Array} quiers Query array;
 * @param {function} successCallbackes success callback function;
 *
 *

**/
//https://api.edamam.com/api/recipes/v2?type=public&q=pizza&app_id=1c941f6f&app_key=d40bfe33b8c3005f183b1589ac2f04bc

export const fetchdata = async function (quiers, successCallbackes) {
  const qurey = quiers?.join("&")
  .replace(/,/g, "=")
  .replace(/ /g, "%20")
  .replace(/\+/g, "%2B");

  const url = `${ACCESS_POINT}?app_id=${APP_ID}&app_key=${API_KEY}&type=${type}${qurey ?`&${qurey}` : ""}`;
 console.log(url)
 console.log(url)
  const response = await fetch(url);


  if (response.ok) {
    const data = await response.json();
    successCallbackes(data);
  } else {
    console.log(response.ok);
    console.log(response.status);
    console.log(response.headers);
  }
};
