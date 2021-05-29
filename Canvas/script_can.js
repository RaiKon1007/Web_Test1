"use strict";
let canvas = document.getElementById("MyCanvas");
let context = canvas.getContext("2d");
// sky
context.fillStyle = "lightblue";
context.fillRect(0, 0, 500, 250);
// greenfloor
context.fillStyle = "green";
context.fillRect(0, 250, 500, 200);
// house-body
context.lineWidth = 10;
context.strokeStyle = "brown";
context.strokeRect(75, 140, 150, 110);
context.fillStyle = "linen";
context.fillRect(75, 140, 150, 110);
// door
context.fillStyle = "saddlebrown";
context.fillRect(160, 190, 40, 60);
// roof
context.beginPath();
context.moveTo(50, 140);
context.lineTo(120, 60);
context.lineTo(250, 140);
context.closePath();
context.stroke();
context.fillStyle = "maroon";
context.fill();
// chimney
context.lineWidth = 6;
context.strokeStyle = "brown";
context.beginPath();
context.moveTo(140, 68);
context.lineTo(140, 40);
context.lineTo(160, 40);
context.lineTo(160, 80);
context.closePath();
context.stroke();
context.fillStyle = "brown";
context.fill();
// window
context.fillStyle = "saddlebrown";
context.fillRect(100, 150, 30, 30);
// sun
context.beginPath();
context.fillStyle = "yellow";
context.arc(40, 50, 20, 0, 2 * Math.PI);
context.fill();
context.lineWidth = 3;
context.strokeStyle = "yellow";
context.moveTo(40, 75);
context.lineTo(40, 100);
context.stroke();
context.moveTo(40, 25);
context.lineTo(40, 0);
context.stroke();
context.moveTo(0, 50);
context.lineTo(15, 50);
context.stroke();
context.moveTo(65, 50);
context.lineTo(90, 50);
context.stroke();
context.moveTo(22, 32);
context.lineTo(0, 10);
context.stroke();
context.moveTo(58, 32);
context.lineTo(80, 10);
context.stroke();
context.moveTo(58, 68);
context.lineTo(80, 90);
context.stroke();
context.moveTo(22, 68);
context.lineTo(0, 90);
context.stroke();
/*
// begin custom shape
context.beginPath();
context.moveTo(170, 80);
context.bezierCurveTo(130, 100, 130, 150, 230, 150);
context.bezierCurveTo(250, 180, 320, 180, 340, 150);
context.bezierCurveTo(420, 150, 420, 120, 390, 100);
context.bezierCurveTo(430, 40, 370, 30, 340, 50);
context.bezierCurveTo(320, 5, 250, 20, 250, 50);
context.bezierCurveTo(200, 5, 150, 20, 170, 80);
*/
// cloud
context.beginPath();
context.moveTo(185, 40);
context.bezierCurveTo(165, 50, 165, 75, 215, 75);
context.bezierCurveTo(225, 90, 260, 90, 270, 75);
context.bezierCurveTo(330, 75, 310, 60, 295, 50);
context.bezierCurveTo(315, 20, 285, 15, 270, 25);
context.bezierCurveTo(260, 2.5, 225, 10, 225, 25);
context.bezierCurveTo(200, 2.5, 175, 10, 185, 40);
context.closePath();
context.fillStyle = "grey";
context.fill();
// tree trunk
context.fillStyle = "saddlebrown";
context.fillRect(390, 150, 30, 100);
// tree crown
context.beginPath();
context.moveTo(355, 120);
context.bezierCurveTo(335, 150, 335, 175, 385, 175);
context.bezierCurveTo(395, 180, 430, 180, 440, 175);
context.bezierCurveTo(490, 185, 480, 120, 465, 120);
context.bezierCurveTo(465, 120, 465, 100, 450, 95);
context.bezierCurveTo(450, 70, 395, 60, 395, 85);
context.bezierCurveTo(370, 80, 345, 80, 355, 120);
context.closePath();
context.fillStyle = "darkgreen";
context.fill();
//# sourceMappingURL=script_can.js.map