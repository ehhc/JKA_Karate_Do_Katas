const existingKernClassExists = function(classList) {
    for (const currentClassElement of classList) {
        /**
         * Search for existing kern-classes.
         * Ignore the finding, if the class contains a double-dash (that might be a modifier for an Kern-class.
         */
        if(currentClassElement.startsWith("kern") && !currentClassElement.includes("--")) {
            return true;
        }
    }
}
const convertAccordion = function() {
    for (const detail of document.getElementsByTagName("details")) {
        detail.classList.add("kern-accordion");
        for (const summary of detail.getElementsByTagName("summary")) {
            summary.classList.add('kern-accordion__header');
            for (const title of summary.getElementsByTagName("span")) {
                title.classList.add('kern-title')
            }
        }
        for (const body of detail.getElementsByTagName("section")) {
            body.classList.add('kern-accordion__body')
        }
    }
}
const convertLinks = function() {
    for (const link of document.getElementsByTagName("a")) {
        link.classList.add('kern-link')
    }
}
const convertText = function() {
    for (const elm of document.getElementsByTagName("p")) {
        if(!existingKernClassExists(elm.classList)){
            elm.classList.add("kern-body")
        }
    }
    for (const elm of document.getElementsByTagName("h1")) {
        if(!existingKernClassExists(elm.classList)){
            elm.classList.add("kern-heading-display")
        }
    }
    for (const elm of document.getElementsByTagName("h2")) {
        if(!existingKernClassExists(elm.classList)){
            elm.classList.add("kern-heading-x-large")
        }
    }
    for (const elm of document.getElementsByTagName("h3")) {
        if(!existingKernClassExists(elm.classList)){
            elm.classList.add("kern-heading-large")
        }
    }
    for (const elm of document.getElementsByTagName("h4")) {
        if(!existingKernClassExists(elm.classList)){
            elm.classList.add("kern-heading-medium")
        }
    }
    for (const elm of document.getElementsByTagName("h5")) {
        if(!existingKernClassExists(elm.classList)){
            elm.classList.add("kern-heading-small")
        }
    }
}
const convertLists = function(){
    for (const listElement of document.getElementsByTagName("ul")) {
        listElement.classList.add("kern-list")
    }
}

document.addEventListener("DOMContentLoaded", function(event) {
    convertAccordion();
    convertLinks();
    convertText()
    convertLists();
});