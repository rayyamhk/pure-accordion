// ======== COMPATABILITY ===========
// classList is not supported by IE10 or below
// Node.contains is not supported by IE9 or below
// forEach is not supported by ALL IE versions
// Array.from is not supported by ALL IE versions
// AddEventListener is not supported by IE8 or below, use attachEvent instead

const accordionsInit = params => {

    const accordions = document.querySelectorAll(".accordion");

    for(let i = 0; i < accordions.length; i++) {
        const accordion = accordions[i];
        
        const accordionBtn = document.createElement("div");
        accordionBtn.className += " accordion-button";
        accordionBtn.appendChild(document.createElement("span"));
        accordionBtn.appendChild(document.createElement("span"));
        accordion.appendChild(accordionBtn);
    
        const content = accordion.nextElementSibling; 
        const accordionWrapper = accordion.parentElement;
    
        if(containsClassName(accordionWrapper, "accordion-content")) {
            accordionWrapper.style.padding = "0px";
        }
    
        if(params.toggle) {
            accordion.addEventListener("click", () => {
                if(!containsClassName(accordion, "active")) {
                    let activeNode;
                    const children = accordionWrapper.children;
                    for(let j = 0; j < children.length; j++) {
                        if(containsClassName(children[j], "active")) {
                            activeNode = children[j];
                            break;
                        }
                    }
                    if(activeNode) {
                        const activeContent = activeNode.nextElementSibling;
                        minusHeight(activeContent, activeContent.scrollHeight);
                        removeClassName(activeNode, " active");
                        removeClassName(activeNode.querySelector(".accordion-button"), " accordion-button-open");
                    }
                    accordion.className += " active";
                    accordionBtn.className += " accordion-button-open";
                    addHeight(content, content.scrollHeight);
                }
                else {
                    removeClassName(accordion, " active")
                    removeClassName(accordionBtn, " accordion-button-open");
                    minusHeight(content, content.scrollHeight);
                }
            }) 
        }
        else {
            accordion.addEventListener("click", () => {
                if(!containsClassName(accordion, "active")) {
                    accordion.className += " active";
                    accordionBtn.className += " accordion-button-open";
                    addHeight(content, content.scrollHeight);
                }
                else {
                    removeClassName(accordion, " active")
                    removeClassName(accordionBtn, " accordion-button-open");
                    minusHeight(content, content.scrollHeight);
                }
            })
        }
    }
}

const addHeight = (content, height) => {
    if(containsClassName(content.parentElement, "accordion-content")) {
        addHeight(content.parentElement, height);
    }
    content.style.height = height + getHeight(content) + "px";
}

const minusHeight = (content, height, first = true) => {
    if(first) {
        content.style.height = "0px";
        if(containsClassName(content.parentElement, "accordion-content")) {
            minusHeight(content.parentElement, height, false);
        }
    }
    else {
        let updateHeight = getHeight(content) - height;
        if(updateHeight < 0) {
            updateHeight = 0;
        }
        content.style.height = updateHeight + "px";
        if(containsClassName(content.parentElement, "accordion-content")) {
            minusHeight(content.parentElement, height, false);
        }
    }
}

const getHeight = element => {
    const height = element.style.height === "" ? "0px" : element.style.height;
    return parseInt(height.substring(0, height.length - 2));
}

const removeClassName = (element, name) => {
    const classList = element.className;
    element.className = classList.replace(name, "");
}

const containsClassName = (element, name) => {
    const classList = element.className;
    if(classList.indexOf(name) === -1) {
        return false;
    }
    return true;
}
