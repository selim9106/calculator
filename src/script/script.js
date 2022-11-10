
// import { computeResult } from "./maths";
import { Element } from "./content";
let maincontainer = document.querySelector("#app");

let divclass = "bg-gray-50 m-1 w-full h-full";
let newdiv = new Element("div", divclass, "calculator", "", "");
newdiv.insertElement(maincontainer);

// maincontainer.appendChild(newdiv.createElement());


// function setClass(class) {
//     return class
// }