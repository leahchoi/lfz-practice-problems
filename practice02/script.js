window.addEventListener('load', initializeApp);

function initializeApp(){
    document.querySelector('.bubble').addEventListener('click', onClick);
}

function onClick(){
    generateRandomColor();
    let bubble = document.createElement('div');
    bubble.className = 'bubble';
    bubble.style.backgroundColor = generateRandomColor();
    document.getElementsByClassName('container')[0].appendChild(bubble).addEventListener('click', onClick);
};

function generateRandomColor(){
    const red = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    return `rgb(${red}, ${green}, ${blue})`;
};

function moveBubbles(){
    let bubble = document.querySelector('.bubble');
    bubble.fadeOut(1000, function(){
        let maxLeft = window.outerWidth - bubble.offsetWidth;
        let maxTop = window.outerHeight - bubble.offsetHeight;
        console.log('move bubbles', maxLeft)
    })
}