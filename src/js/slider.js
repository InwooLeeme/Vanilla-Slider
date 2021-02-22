
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
    checkDirection(position);
    position = [];
}

function changeImg(currentXPosition){
    const img = document.querySelector(`img:first-child`);
    const currentImg = document.querySelector('.show');
    if(currentXPosition > 0){
        if(currentImg){
            currentImg.classList.remove("show");
            const nextImg = currentImg.nextElementSibling;
            if(nextImg){
                nextImg.classList.add("show");
            }
            else{
                img.classList.add("show");
            }
        }
    }
}

function checkDirection(position){
    const currentX = position[0];
    const lastX = position.slice(-1).pop();
    const currentXPosition = lastX - currentX;
    changeImg(currentXPosition);
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