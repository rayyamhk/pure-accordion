const isFirefox = typeof InstallTrigger !== 'undefined';
const isIE = /*@cc_on!@*/false || !!document.documentMode;
const isEdge = !isIE && !!window.StyleMedia;

const accordionsInit = (params = {}) => {

    const {toggle = false, button = true} = params;
    if(typeof toggle !== "boolean" || typeof button !== "boolean") {
        throw Error("Invalid type for parameters... ");
    }

    const accordions = document.querySelectorAll(".accordion");

    for(let i = 0; i < accordions.length; i++) {
        const accordion = accordions[i];
        
        let accordionBtn = null;
        let paddingTop;
        let paddingBottom;
        const content = accordion.nextElementSibling; 
        const transition = getComputedStyle(content).transitionDuration;

        if(button) {
            accordionBtn = addButton(accordion);
        }
        
        content.style.transitionDuration = "0s";
        if(content.querySelector(".accordion")) {
            content.style.padding = "0px";
        }
        else {
            paddingTop = getComputedStyle(content).paddingTop;
            paddingBottom = getComputedStyle(content).paddingBottom;
            if(isEdge || isFirefox || isIE) {
                content.setAttribute("data-height", content.scrollHeight + getHeight(paddingBottom));
            }
            else {
                content.setAttribute("data-height", content.scrollHeight);
            }
            content.style.paddingTop = "0px";
            content.style.paddingBottom = "0px";  
        }
    
        if(toggle) {
            accordion.addEventListener("click", () => {
                content.style.transitionDuration = transition;
                const contentHeight = getContentHeight(accordion);

                if(!hasClass(accordion, "active")) {
                    let activeNode;
                    const siblings = accordion.parentElement.children;
                    for(let j = 0; j < siblings.length; j++) {
                        if(hasClass(siblings[j], "active")) {
                            activeNode = siblings[j];
                            break;
                        }
                    }
                    if(activeNode) {
                        const activeNodeContentHeight = getContentHeight(activeNode);
                        const activeContent = activeNode.nextElementSibling;
                        removeClassName(activeNode, " active");
                        if(button) {
                            removeClassName(activeNode.querySelector(".accordion-button"), " accordion-button-open")
                        }
                        if(!activeContent.querySelector(".accordion")) {
                            activeContent.style.paddingBottom = "0px";
                            activeContent.style.paddingTop = "0px";   
                        }
                        minusHeight(activeContent, activeNodeContentHeight);   
                    }

                    accordion.className += " active";
                    if(button) {
                        accordionBtn.className += " accordion-button-open";
                    }
                    if(!content.querySelector(".accordion")) {
                        content.style.paddingTop = paddingTop;
                        content.style.paddingBottom = paddingBottom;
                    }
                    addHeight(content, contentHeight);
                }
                else {
                    removeClassName(accordion, " active")
                    if(button) {
                        removeClassName(accordionBtn, " accordion-button-open");
                    }
                    if(!content.querySelector(".accordion")) {
                        content.style.paddingBottom = "0px";
                        content.style.paddingTop = "0px";   
                    }
                    minusHeight(content, contentHeight); 
                }
            }) 
        }
        else {
            accordion.addEventListener("click", () => {
                content.style.transitionDuration = transition;
                const contentHeight = getContentHeight(accordion);

                if(!hasClass(accordion, "active")) {
                    accordion.className += " active";
                    if(accordionBtn) {
                        accordionBtn.className += " accordion-button-open"; 
                    }
                    if(!content.querySelector(".accordion")) {
                        content.style.paddingTop = paddingTop;
                        content.style.paddingBottom = paddingBottom;
                    }
                    addHeight(content, contentHeight);
                }
                else {
                    removeClassName(accordion, " active");
                    if(button) {
                        removeClassName(accordionBtn, " accordion-button-open");
                    }
                    if(!content.querySelector(".accordion")) {
                        content.style.paddingBottom = "0px";
                        content.style.paddingTop = "0px";   
                    }
                    minusHeight(content, contentHeight); 
                }
            })
        }
    }
}

const addButton = accordion => {
    const accordionBtn = document.createElement("div");
    accordionBtn.className += " accordion-button";
    accordionBtn.appendChild(document.createElement("span"));
    accordionBtn.appendChild(document.createElement("span"));
    accordion.appendChild(accordionBtn);
    return accordionBtn;
}

const addHeight = (content, height) => {
    if(hasClass(content.parentElement, "accordion-content")) {
        addHeight(content.parentElement, height);
    }
    content.style.height = height + getHeight(content.style.height) + "px";
}

const minusHeight = (content, height) => {
    content.style.height = getHeight(content.style.height) - height + "px";
    if(hasClass(content.parentElement, "accordion-content")) {
        minusHeight(content.parentElement, height, false);
    }
}

const getHeight = heightWithUnit => {
    const height = heightWithUnit === "" ? "0px" : heightWithUnit;
    return parseInt(height.substring(0, height.length - 2));
}

const getContentHeight = (initialAccordion) => {
    const content = initialAccordion.nextElementSibling;
    const children = content.children;
    const accordions = [];
    for(let i = 0; i < children.length; i++) {
        if(hasClass(children[i], "accordion")) {
            accordions.push(children[i]);
        }
    }
    let totalHeight = 0;
    if(accordions.length > 0) {
        for(let j = 0; j < accordions.length; j++) {
            const accordion = accordions[j];
            totalHeight += accordion.scrollHeight;
            if(hasClass(accordion, "active")) {
                totalHeight += getContentHeight(accordion);
            }
        }
    }
    else {
        totalHeight += parseInt(content.getAttribute("data-height"));
    }
    return totalHeight;
}

const removeClassName = (element, name) => {
    const classList = element.className;
    element.className = classList.replace(name, "");
}

const hasClass = (target, className) => {
    return new RegExp('(\\s|^)' + className + '(\\s|$)').test(target.className);
}