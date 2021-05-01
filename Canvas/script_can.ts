let canvas: HTMLCanvasElement = <HTMLCanvasElement>
document.getElementById("MyCanvas");

let context: CanvasRenderingContext2D = canvas.getContext("2d");

context.lineWidth = 10;
context.strokeStyle = "brown";

context.strokeRect(75, 140, 150, 110);

context.fillRect(160, 190, 40, 60);

context.beginPath();
context.moveTo(50, 140);
context.lineTo(120, 60);
context.lineTo(250, 140);
context.closePath();
context.stroke();

context.lineWidth = 6;
context.beginPath();
context.moveTo(140, 70);
context.lineTo(140, 40);
context.lineTo(160, 40);
context.lineTo(160, 85);
context.closePath();
context.stroke();

context.lineWidth = 4;
context.fillStyle = "brown";
//context.strokeStyle = "saddlebrown";
context.strokeRect(100, 150, 30, 30);
