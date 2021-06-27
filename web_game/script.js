let canvas = document.querySelector("Canvas");



let ctx = canvas.getContext("2d");


ctx.beginPath();
ctx.rect(20, 40, 30, 5);
ctx.fillStyle = "#0984e3";
ctx.fill();
ctx.closePath();


ctx.beginPath();
ctx.arc(30, 30, 6, 0, Math.PI*2, false);
ctx.fillStyle = "white";
ctx.fill();
ctx.closePath();
