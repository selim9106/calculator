import * as elements from "./content.js";
import * as math from "./maths.js";

// ?: Shorter functions to get DOM elements 
export function getDomElt(string) {
    return document.querySelector(string);
}

export function getAllDomElt(string) {
    return document.querySelectorAll(string);
}

export function Id(string) {
    return document.getElementById(string);
}

/**
 * Create and push every button based on "buttons" object
 * @param {object} button from buttons.js
 * @param {string/var} classname
 * @param {string} htmlelement
 */
export function displayButtons (btn, classname, container) {
    let newbtn = new elements.textElement("button", classname, btn.id);
    newbtn.setDataType(btn.dataType);
    newbtn.setText(btn.text);
    newbtn.insertElement(getDomElt(container));
}

const nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const actions = ["(", ")", "="];

/**
 * todo: call function for calcccurrent & calchistory
 * @param {string} str = btn text content that must be displayed on screen 
 * @param {htmlelement} field where content should be displayed
 */
export function displayContent(str, field) {
    (field.innerHTML === "0" && nums.includes(str)) || (field.innerHTML === "0" && actions.includes(str))? clearContent(field):false;
    
    str != "="? field.innerHTML += str: false;
}

export const clearContent = (screenfield, exception) => screenfield != exception? screenfield.innerHTML = '': screenfield.innerHTML = "0";

export function deleteChars(field) {
    let str = field.innerHTML;
    str !="0"? str = str.substring(str.length-1,0): str = "0";
    str === ""? str = "0":false;
    field.innerHTML = str;
}

export function moveContent(originalfield, newfield) {
    let currentcalc = originalfield.innerText;
    newfield.innerHTML = currentcalc;
}













// const scrollToBottom = (id) => {
//     const element = document.getElementById(id);
//   element.scrollTop = element.scrollHeight;
// }


// info: About autoscroll top
// // https://stackoverflow.com/questions/19581313/how-to-give-auto-scroll-to-textarea
// // https://jsfiddle.net/yV76p/
// // https://stackoverflow.com/questions/72636816/scroll-to-bottom-when-new-message-added

