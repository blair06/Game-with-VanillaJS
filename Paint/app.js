const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const Range = document.getElementById("jsRange");
const mode = document.getElementById("jsMode");
canvas.width = 500;
canvas.height = 500;
ctx.fillStyle = "#2c2c2c"
ctx.strokeStyle = "#2c2c2c"
ctx.lineWidth = 2.5;


let painting = false;
let filling = false;

function stopPainting(){
    painting = false;
}

function startPainting(){
    painting = true;
}
// client좌표->window전체 범위 내에서의 마우스 위치값
// offset좌표->캔버스내의 마우스 위치값 
function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x, y);
    }else{
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}

function handleColorClick(event){
    const color = event.target.style.backgroundColor;
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
}
function handleRangeChange(event){
    const size = event.target.value;
    ctx.lineWidth = size;
}
function handleModeClick(event){
    if(filling ===true){
        filling = false;
        mode.innerText = "Fill"
    }else {
        filling = true;
        mode.innerText = "Paint"
        
    }
}
function handleCanvasClick(){
    if(filling){
        ctx.fillRect(0,0,500,500);
    }
    
}
if(canvas){
    canvas.addEventListener("mousemove",onMouseMove);
    canvas.addEventListener("mousedown",startPainting);
    canvas.addEventListener("mouseup",stopPainting);
    canvas.addEventListener("mouseleave",stopPainting);
    canvas.addEventListener("click",handleCanvasClick);
}
// Array.from은 객체로부터 Array를 생성한다
// A.forEach(x =>y ) 배열 A에서 요소x를 뽑아 y로 가공한다. x의 이름은 무관
Array.from(colors).forEach(color => color.addEventListener("click",handleColorClick));

if(Range){
    Range.addEventListener("input",handleRangeChange);
}
if(mode){
    mode.addEventListener("click", handleModeClick);
}