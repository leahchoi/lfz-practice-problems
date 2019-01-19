

function removeClassFromElement(element, str) {
    if (document.querySelector(element)) {
        document.querySelector(element).classList.remove(str);
    }
}

function toggleClassOnElement(element, str) {
    let elements = document.querySelectorAll(element);
    if(element === '.' + str){
        document.querySelector(element).classList.remove(str);
    }else if (elements.length > 1) {
        for (let i = 0; i < elements.length; i++) {
            elements[i].classList.add(str);
        }
    }else {
        document.querySelector(element).classList.add(str)
    }
}

function hideElements() {

}

function addAttributeToElement(element, attribute, str) {
    document.querySelector(element).setAttribute(attribute, str);
}

function putPosInElement(str) {
    
}


