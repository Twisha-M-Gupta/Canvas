var canvas= document.getElementById("myCanvas");

ctx=canvas.getContext("2d");

var mouseEvent = "empty";
var lastX, lastY;

color= "black";
width= 3;

canvas.addEventListener("mousedown", userMouseDown);

function userMouseDown(e){
    color=document.getElementById("colorpen").value;
    width=document.getElementById("widthpen").value;

    mouseEvent="mouseDown";
}

canvas.addEventListener("mouseUp", userMouseUp);

function userMouseUp (e){
    mouseEvent="mouseUp";
}

canvas.addEventListener("mouseLeave", userMouseLeave);

function userMouseLeave(e){
    mouseEvent="mouseLeave";
}

canvas.addEventListener("mouseMove", userMouseMove);

function userMouseMove(e){
    currentX = e.clientX-canvas.offsetLeft;
    currentY = e.clientY-canvas.offsetTop;

    if (mouseEvent="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;

        console.log("X = " + lastX + "Y = " + lastY);

        ctx.moveTo(lastX,lastY);

        console.log("X = " + currentX + "Y = " + currentY);

        ctx.lineTo(currentX,currentY);
        ctx.stroke();
    }

    lastX=currentX;
    lastY=currentY;

    console.log(lastX);
}