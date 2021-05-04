const canvas =document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 800;
const CANVAS_HEIGHT = canvas.height = 800;

const playerImage = new Image();
playerImage.src = "images/hulk.png";

function animate(){
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS-HEIGHT);
    ctx.fillRect(50,50,100,100);
    requestAnimationFrame(animate)
};
animate();