import * as func from "./functions.js";
import { Id } from "./functions.js";
import * as math from "./maths.js";

/**
 * Add event listener to display btns content after check data-type value
 * @param {nodelist} elts 
 * @param {html element property} attribute 
 * @param {htmlelement} displayfield 
 */
export function displayOnClick(elts, attribute, displayfield) {
    func.getAllDomElt(elts).forEach(elt => ((elt.getAttribute(attribute) === "txt") || (elt.getAttribute("data-type") === "int") || (elt.getAttribute(attribute) === "operation"))? elt.addEventListener("click", (e) => func.displayContent(e.target.innerText, displayfield)):false);
};

export function displayResult(elt, displayfield) {
    elt.addEventListener("click",(e) => calcResult(displayfield))
}
function calcResult(displayfield) {
    let str = displayfield.innerHTML;
    // ! trouble replace operation symbols
    // str.replace(/×/g,"*");
    // str.replace(/÷/g,"/");

    displayfield.innerHTML = math.computeResult(str); 
}