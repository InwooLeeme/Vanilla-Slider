
const container = document.querySelector('.container');

let pressed = false;
let position = [];

function move(event){
    const x = event.offsetX;
    position.push(x);
}


function handleUp(){
    // 마우스를 땠을 때
    pressed = false;
    container.style.cursor = "";
    container.removeEventListener("mousemove",move);
    position = [];
}


function handleClick(){
    // 눌렀을 때
    pressed = true;
    container.style.cursor = "grab";
    if(pressed){
        container.addEventListener("mousemove", move);
    }
}


function init(){
    container.addEventListener("mousedown", handleClick);
    container.addEventListener("mouseup", handleUp);
}

init();