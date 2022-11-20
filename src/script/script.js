
// import { computeResult } from "./maths";

import {buttons} from "./buttons.js";
import * as elements from "./content.js";
import * as func from "./functions.js";
import { Id } from "./functions.js";
import * as events from "./events.js";
import * as math from "./maths.js";


const maincontainer = Id("app");

// * classes:
    // screen:
const calccontainerclass = "grid grid-rows p-8 h-min sm:p-12 sm:justify-items-center lg:p-6";
const mainscreenclass="w-full max-w-70vw self-center flex flex-col justify-end items-end bg-stone-300 rounded-xl h-[20vh] hpt-4 px-4 pb-2 shadow-md opacity-70 sm:max-h-[15vh] lg:px-2";
const calchistoryclass ="w-full font-mono font-medium slashed-zero text-base text-right text-stone-500 align-text-bottom break-all overflow-auto sm:text-xl lg:text-base lg:pr-1";
const calccurrentclass ="w-full font-mono font-semibold text-right text-xl break-all overflow-auto sm:text-2xl lg:text-xl lg:leading-tight lg:mx-4";
const calcresultclass ="max-w-full font-mono font-bold text-right text-2xl break-all overflow-auto sm:text-3xl lg:text-2xl lg:leading-none lg:mx-4";

    // buttons
    // // buttons container
const btnsmainsectionclass ="grid grid-cols-4 gap-4 mt-2 pt-4 sm:gap-y-4 sm:pt-8 sm:w-11/12 sm:justify-items-stretch lg:pt-4 lg:gap-2";
const btnspecialssctclass ="grid grid-cols-4 gap-4 col-span-4 sm:justify-items-center lg:gap-2";
const btnsnumssctclass ="grid grid-cols-3 col-span-3 gap-4 sm:justify-items-center lg:gap-2";
const btnsopssctclass = "grid grid-cols-1 gap-4 sm:justify-items-center lg:gap-2";

    // // buttons
let btnspecialclass ="min-h-12 max-h-20 aspect-square rounded-xl bg-stone-400 drop-shadow-sm shadow-[inset_0_-1px_3px_rgba(0,0,0,0.5)] text-xl text-neutral-900 font-bold hover:ring ring-neutral-50 ring-offset focus:text-zinc-300 sm:h-28 sm:text-3xl lg:h-16 lg:text-2xl";
let btnnumclass = "min-h-12 max-h-20 aspect-square rounded-xl bg-stone-400 drop-shadow-sm shadow-[inset_0_-1px_3px_rgba(0,0,0,0.5)] text-xl text-neutral-900 font-bold hover:ring ring-neutral-50 ring-offset focus:text-zinc-300 sm:h-28 sm:text-3xl lg:h-16 lg:text-2xl";
let btnopclass = "min-h-12 max-h-20 aspect-square rounded-xl bg-neutral-800 drop-shadow-sm shadow-[inset_0_-1px_3px_rgba(0,0,0,0.5)] text-xl text-stone-100 font-semibold hover:ring ring-neutral-50 ring-offset focus:text-amber-600 sm:h-28 sm:text-3xl lg:h-16 lg:text-2xl lg:font-semibold";


// * elements
const calculator = new elements.Element("div", calccontainerclass);
calculator.setId("calculator");

const screencontainer = new elements.textElement("section", mainscreenclass, "screen");
const calchistory = new elements.textElement("p",calchistoryclass, "calchistory");
const calccurrent = new elements.textElement("p",calccurrentclass, "calccurrent");
const calcresult = new elements.textElement("p",calcresultclass, "calcresult");

const btnsmaincontainer = new elements.Element("section", btnsmainsectionclass);
btnsmaincontainer.setId("btnsmaincontainer");

const btnsspecialssection = new elements.Element("div", btnspecialssctclass);
btnsspecialssection.setId("btnsspecialssection");
const btnsnumssection = new elements.Element("div", btnsnumssctclass);
btnsnumssection.setId("btnsnumssection");
const btnsopssection = new elements.Element("div", btnsopssctclass);
btnsopssection.setId("btnsopssection");

// * insert
calculator.insertElement(maincontainer);
// document.getElementById("calculator");

// screencontainer.setText("blabla");
screencontainer.insertElement(Id("calculator"));
calchistory.insertElement(Id("screen"));
calccurrent.insertElement(Id("screen"));
calcresult.insertElement(Id("screen"));
Id("calcresult").innerText="0";

btnsmaincontainer.insertElement(Id("calculator"));
btnsspecialssection.insertElement(Id("btnsmaincontainer"));
btnsnumssection.insertElement(Id("btnsmaincontainer"));
btnsopssection.insertElement(Id("btnsmaincontainer"));

// * create + insert buttons

buttons.map((btns) => (btns.buttonsspecial).forEach((btn) => func.displayButtons(btn, btnspecialclass, "#btnsspecialssection")));
buttons.map((btns) => (btns.buttonsnum).forEach((btn) => func.displayButtons(btn, btnnumclass, "#btnsnumssection")));
buttons.map((btns) => (btns.buttonsoperations).forEach((btn) => func.displayButtons(btn, btnopclass, "#btnsopssection")));

// (func.getAllDomElt("button")).forEach(btn =>
//     ((btn.getAttribute("data-type") === "txt") || (btn.getAttribute("data-type") === "int") || (btn.getAttribute("data-type") === "operation"))? btn.addEventListener("click", (e) => events.displayOnClick(e.target.innerText, func.Id("calcresult"))):false
// );

events.displayOnClick("button","data-type", Id("calcresult"));
events.displayResult(Id("btn-equal"), Id("calcresult"));

Id("reset-btn").addEventListener("click", (e) => (Id("screen").childNodes).forEach(child => func.clearContent(child, Id("calcresult"))));
Id("delete-btn").addEventListener("click", (e) => func.deleteChars(Id("calcresult")));

// Id("btn-equal").addEventListener("click", (e) => func.getCurrentCalc(Id("calcresult")));
// console.log(math.computeResult("32*2"))