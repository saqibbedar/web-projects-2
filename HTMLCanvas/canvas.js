/**
 * @type HTMLCanvasElement
 */

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// simple form of text rendering 
ctx.fillStyle = "#000";
ctx.font = "bold 30px sans-serif";
ctx.fillText("HTML Canvas", 100, 150);

// stroke text
ctx.strokeStyle = "#f32";
ctx.font = "bold 30px sans-serif";
ctx.strokeText("HTML Canvas", 100, 150);

// Drawing text in the center of the canvas
ctx.fillStyle = "blue";
ctx.font = "bold 30px sans-serif";
ctx.textAlign = "center"
ctx.textBaseline = "center"
ctx.fillText("HTML Canvas", canvas.width / 2, canvas.height / 2)