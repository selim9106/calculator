(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function a(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=a(s);fetch(s.href,o)}})();const d=[{buttonsspecial:[{id:"bracket-open",dataType:"txt",text:"("},{id:"bracket-close",dataType:"txt",text:")"},{id:"delete-btn",dataType:"action",text:""},{id:"reset-btn",dataType:"action",text:"C"}],buttonsnum:[{id:"num-7",dataType:"int",text:"7"},{id:"num-8",dataType:"int",text:"8"},{id:"num-9",dataType:"int",text:"9"},{id:"num-4",dataType:"int",text:"4"},{id:"num-5",dataType:"int",text:"5"},{id:"num-6",dataType:"int",text:"6"},{id:"num-1",dataType:"int",text:"1"},{id:"num-2",dataType:"int",text:"2"},{id:"num-3",dataType:"int",text:"3"},{id:"num-0",dataType:"int",text:"0"},{id:"btn-dot",dataType:"txt",text:"."},{id:"btn-equal",dataType:"operation",text:"=",operation:"="}],buttonsoperations:[{id:"btn-divide",dataType:"operation",text:"&#247;",operation:"/"},{id:"btn-multiply",dataType:"operation",text:"&#215;",operation:"*"},{id:"btn-add",dataType:"operation",text:"&#43;",operation:"+"},{id:"btn-substract",dataType:"operation",text:"&#8722;",operation:"-"}]}];class r{constructor(t,a){this.tagName=t,this.className=a}setId(t){this.Id=t}createElt(){let t=document.createElement(this.tagName);return t.setAttribute("class",this.className),this.Id&&this.Id!=""&&t.setAttribute("id",this.Id),t}insertElement(t){let a=this.createElt();t.appendChild(a)}}class l extends r{constructor(t,a,i){super(t,a),this.Id=i}setText(t){this.Text=t}setDataType(t){this.dataType=t}createElt(){let t=document.createElement(this.tagName);return t.setAttribute("class",this.className),this.Id&&this.Id!=""&&t.setAttribute("id",this.Id),this.Text&&this.Text!=""&&(t.innerHTML=this.Text),this.dataType&&this.dataType!=""&&t.setAttribute("data-type",this.dataType),t}}function b(e){return Function("return "+e)()}function y(e){return document.querySelector(e)}function T(e){return document.querySelectorAll(e)}function n(e){return document.getElementById(e)}function u(e,t,a){let i=new l("button",t,e.id);i.setDataType(e.dataType),i.setText(e.text),i.insertElement(y(a))}const E=["0","1","2","3","4","5","6","7","8","9"],w=["(",")","="];function v(e,t){(t.innerHTML==="0"&&E.includes(e)||t.innerHTML==="0"&&w.includes(e))&&m(t),e!="="&&(t.innerHTML+=e)}const m=(e,t)=>e!=t?e.innerHTML="":e.innerHTML="0";function L(e){let t=e.innerHTML;t!="0"?t=t.substring(t.length-1,0):t="0",t===""&&(t="0"),e.innerHTML=t}function I(e,t,a){T(e).forEach(i=>i.getAttribute(t)==="txt"||i.getAttribute("data-type")==="int"||i.getAttribute(t)==="operation"?i.addEventListener("click",s=>v(s.target.innerText,a)):!1)}function _(e,t){e.addEventListener("click",a=>A(t))}function A(e){let t=e.innerHTML;e.innerHTML=b(t)}const M=n("app"),k="grid grid-rows p-8 h-min sm:p-12 sm:justify-items-center lg:p-6",H="w-full max-w-70vw self-center flex flex-col justify-end items-end bg-stone-300 rounded-xl h-[20vh] hpt-4 px-4 pb-2 shadow-md opacity-70 sm:max-h-[15vh] lg:px-2",N="w-full font-mono font-medium slashed-zero text-base text-right text-stone-500 align-text-bottom break-all overflow-auto sm:text-xl lg:text-base lg:pr-1",q="w-full font-mono font-semibold text-right text-xl break-all overflow-auto sm:text-2xl lg:text-xl lg:leading-tight lg:mx-4",j="max-w-full font-mono font-bold text-right text-2xl break-all overflow-auto sm:text-3xl lg:text-2xl lg:leading-none lg:mx-4",C="grid grid-cols-4 gap-4 mt-2 pt-4 sm:gap-y-4 sm:pt-8 sm:w-11/12 sm:justify-items-stretch lg:pt-4 lg:gap-2",O="grid grid-cols-4 gap-4 col-span-4 sm:justify-items-center lg:gap-2",D="grid grid-cols-3 col-span-3 gap-4 sm:justify-items-center lg:gap-2",z="grid grid-cols-1 gap-4 sm:justify-items-center lg:gap-2";let R="min-h-12 max-h-20 aspect-square rounded-xl bg-stone-400 drop-shadow-sm shadow-[inset_0_-1px_3px_rgba(0,0,0,0.5)] text-xl text-neutral-900 font-bold hover:ring ring-neutral-50 ring-offset focus:text-zinc-300 sm:h-28 sm:text-3xl lg:h-16 lg:text-2xl",S="min-h-12 max-h-20 aspect-square rounded-xl bg-stone-400 drop-shadow-sm shadow-[inset_0_-1px_3px_rgba(0,0,0,0.5)] text-xl text-neutral-900 font-bold hover:ring ring-neutral-50 ring-offset focus:text-zinc-300 sm:h-28 sm:text-3xl lg:h-16 lg:text-2xl",B="min-h-12 max-h-20 aspect-square rounded-xl bg-neutral-800 drop-shadow-sm shadow-[inset_0_-1px_3px_rgba(0,0,0,0.5)] text-xl text-stone-100 font-semibold hover:ring ring-neutral-50 ring-offset focus:text-amber-600 sm:h-28 sm:text-3xl lg:h-16 lg:text-2xl lg:font-semibold";const p=new r("div",k);p.setId("calculator");const F=new l("section",H,"screen"),P=new l("p",N,"calchistory"),K=new l("p",q,"calccurrent"),G=new l("p",j,"calcresult"),x=new r("section",C);x.setId("btnsmaincontainer");const g=new r("div",O);g.setId("btnsspecialssection");const f=new r("div",D);f.setId("btnsnumssection");const h=new r("div",z);h.setId("btnsopssection");p.insertElement(M);F.insertElement(n("calculator"));P.insertElement(n("screen"));K.insertElement(n("screen"));G.insertElement(n("screen"));n("calcresult").innerText="0";x.insertElement(n("calculator"));g.insertElement(n("btnsmaincontainer"));f.insertElement(n("btnsmaincontainer"));h.insertElement(n("btnsmaincontainer"));d.map(e=>e.buttonsspecial.forEach(t=>u(t,R,"#btnsspecialssection")));d.map(e=>e.buttonsnum.forEach(t=>u(t,S,"#btnsnumssection")));d.map(e=>e.buttonsoperations.forEach(t=>u(t,B,"#btnsopssection")));I("button","data-type",n("calcresult"));_(n("btn-equal"),n("calcresult"));n("reset-btn").addEventListener("click",e=>n("screen").childNodes.forEach(t=>m(t,n("calcresult"))));n("delete-btn").addEventListener("click",e=>L(n("calcresult")));