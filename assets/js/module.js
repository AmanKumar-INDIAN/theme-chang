/**
 * @linkplain Mr Aman kumar
 * @copyright 2023 MR Aman kumar
 * @author mr Aman Kumar(GIt-hub(Amankumar-INDIAN))
 * 
 */
"use strict";

/**
 * 
 * @param {number} minute cookig time 
 * @returns {string}   
 */


export const getTime=minute=>{
    const hours= Math.floor(minute / 60);
    const day=Math.floor(hours / 24)
    const time =day || hours || minute;
    const unitIndex=[day,hours,minute].lastIndexOf(time);
    const timeunit=["days","hours","minutes"][unitIndex];
   // console.log([day,hours,minute].lastIndexOf(minute))
    return{time ,timeunit}
}

