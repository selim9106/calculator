// export class Element {
//     constructor(tagName, className, Id, dataType, textContent) {
//         this.tagName = tagName;
//         // ! update class with a function to add talwind utilitaries
//         this.className = className;
//         this.Id = Id;
//         this.dataType = dataType;
//         this.textContent = textContent;
//      }  
//         createElement() {
//         let element = document.createElement(this.tagName);
//         element.setAttribute("class", this.className);
//         
//         if (this.dataType && this.dataType != "") element.setAttribute("dataType", this.dataType);
//         if (this.textContent && this.textContent != "") element.innerText = this.textContent;
//         return element;
    
//      } insertElement(parent) {
//         let element = this.createElement();
//         parent.appendChild(element);
//      }
// }

export class Element {
    constructor(tagName, className) {
        this.tagName = tagName;
        // ! update class with a function to add talwind utilitaries
        this.className = className;
     }  setId(id) {
        this.Id = id;
     }
        createElt() {
        let element = document.createElement(this.tagName);
        element.setAttribute("class", this.className);
        if (this.Id && this.Id != "") element.setAttribute("id", this.Id);
        return element;
    
     }  insertElement(parent) {
        let element = this.createElt();
        parent.appendChild(element);
     } 
}
export class textElement extends Element {
    constructor (tagname, className, Id) {
        super(tagname, className);
        this.Id = Id;
    }
    createElt() {
        let element = document.createElement(this.tagName);
        element.setAttribute("class", this.className);
        if (this.Id && this.Id != "") element.setAttribute("id", this.Id);
        return element
    }
    setText(text) {
        let element = this.createElement();
        element.innerText = text;
        // this.textContent = text;
    }
    
}


// this.textContent = textContent;
// this.dataType = dataType;
// if (this.dataType && this.dataType != "") element.setAttribute("dataType", this.dataType);
    
// function setClass(class) {
//     return class
// }

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


