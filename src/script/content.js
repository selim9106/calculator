// export function createElement(tagName, className, Id, textContent, dataType) {
//     this.tagName = tagName;
//     // ! update class with a function to add talwind utilitaries
//     // this.className = className;
//     this.Id = Id;
//     this.textContent = textContent;
//     this.dataType = dataType;
// }

// createElement.prototype.setClass = function(classes) {
//     return this.className = classes;
// }

export class Element {
constructor(tagName, className, Id, textContent, dataType) {
    this.tagName = tagName;
    // ! update class with a function to add talwind utilitaries
    this.className = className;
    this.Id = Id;
    this.textContent = textContent;
    this.dataType = dataType;
 }  
 insertElement(parent) {
    let element = document.createElement(this.tagName);
    element.setAttribute("class", this.className);
    if (this.Id && this.Id != "") element.setAttribute("id", this.Id);
    // return element
    parent.appendChild(element);

 } 
//  insertElement(parent, element) {
//     parent.appendChild(element);
//  }
    
}
