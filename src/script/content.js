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
    setText(text) {
        this.Text = text;
    }
    setDataType(datatype) {
        this.dataType = datatype;
    }
    createElt() {
        let element = document.createElement(this.tagName);
        element.setAttribute("class", this.className);
        if (this.Id && this.Id != "") element.setAttribute("id", this.Id);
        // ! innerHTML required to display Unicode (innerText does NOT)
        if (this.Text && this.Text != "") element.innerHTML = this.Text;
        if (this.dataType && this.dataType != "") element.setAttribute("data-type", this.dataType);
        return element
    }
}

