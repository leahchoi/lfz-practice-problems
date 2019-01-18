

function changeElements(str) {
    const numConvert = document.querySelectorAll(str);
    for (let i = 0; i < numConvert.length; i++) {
        if (typeof (numConvert[i].innerText) === 'string') {
            switch (numConvert[i].innerText) {
                case 'one':
                    num = 1;
                    break;
                case 'two':
                    num = 2;
                    break;
                case 'three':
                    num = 3;
                    break;
                case 'four':
                    num = 4;
                    break;
                case 'five':
                    num = 5;
                    break;
                case 'six':
                    num = 6;
                    break;
                case 'seven':
                    num = 7;
                    break;
                case 'eight':
                    num = 8;
                    break;
                case 'nine':
                    num = 9;
                    break;
                default:
                    num = numConvert[i].innerText;
                    break;
            }
            numConvert[i].innerText = num;
        }
    }
}

function appendTextToElement(strElement, str) {
    const elements = document.querySelectorAll(strElement);
    for (let i = 0; i < elements.length; i++){
        elements[i].innerText = elements[i].innerText + str;
    };
}

function addClass(element, str) {
    const elements = document.querySelectorAll(element);
    debugger;
    for(let i = 0; i < elements.length; i++){
        elements[i].classList.add(str);
    }
    return elements.length;
}

function removeElements(element) {
    const parent = document.getElementById('testArea');
    const elements = document.querySelectorAll(element);
    for(let i =0; i <elements.length; i++){
        parent.removeChild(elements[i]);
    }
}

