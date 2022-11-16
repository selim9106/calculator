
// import { computeResult } from "./maths";
import * as elements from "./content.js";
import {getDomElt} from "./functions.js";

let maincontainer = document.querySelector("#app");

// classes:

let divclass = "bg-gray-50 m-1 w-full h-full md:bg-indigo-500";
let mainscreenclass="w-9/10 bg-beige-brown-200";

// elements
let calculator = new elements.Element("section", divclass);
calculator.setId("calculator");

let screencontainer = new elements.textElement("section", mainscreenclass, "screen");

// insert
calculator.insertElement(maincontainer);
// document.getElementById("calculator");

// screencontainer.setText("blabla");
screencontainer.insertElement(getDomElt("#calculator"));

// maincontainer.appendChild(newdiv.createElement());

