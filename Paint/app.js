const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 500;

ctx.strokeStyle = "#2c2c2c"
ctx.lineWidth = 2.5;

let painting = false;
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



if(canvas){
    canvas.addEventListener("mousemove",onMouseMove);
    canvas.addEventListener("mousedown",startPainting);
    canvas.addEventListener("mouseup",stopPainting);
    canvas.addEventListener("mouseleave",stopPainting);
}
