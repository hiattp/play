var canvas, context;

$(document).ready(function(){
  (function() {
      canvas = document.getElementById('play-canvas')
      context = canvas.getContext('2d');
  
      // resize the canvas to fill browser window dynamically
      window.addEventListener('resize', resizeCanvas, false);
      
      function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        drawAll(0);
      }
      resizeCanvas();
  })();
  animate(Date.now());
});

window.requestAnimFrame = (function(callback) {
   return window.requestAnimationFrame || 
   window.webkitRequestAnimationFrame || 
   window.mozRequestAnimationFrame || 
   window.oRequestAnimationFrame || 
   window.msRequestAnimationFrame ||
   function(callback) {
     window.setTimeout(callback, 1000 / 60);
   };
 })();

function drawAll(timeChange){
  drawBackdrop();
  movingRectangle(timeChange);
}

var rectangle = {
  x : 0,
  y : 0,
  dir : 0,
  len : 50,
  height : 50,
  acc : 0
}
function movingRectangle(timeChange){
  var velocity = 200;
  var displacement = timeChange/1000 * velocity;
  // console.log(rectangle.x + displacement + rectangle.len > canvas.width);
  // console.log(rectangle.dir == 0);
  if(rectangle.dir === 0 && rectangle.x + displacement + rectangle.len > canvas.width){
    rectangle.dir = 1;
  } else if(rectangle.dir == 1 && rectangle.x - displacement < 0){
    rectangle.dir = 0;
  }
  rectangle.x += (rectangle.dir == 0 ? displacement : -1*displacement);
  context.beginPath();
  context.rect(rectangle.x, rectangle.y, rectangle.len, rectangle.height);
  context.fillStyle = 'blue';
  context.fill();
};

function drawBackdrop(){
  context.beginPath();
  context.rect(0, 0, canvas.width, canvas.height);
  context.fillStyle = '#EF7C00';
  context.fill();
}

function animate(time) {
  var newTime = Date.now();
  // clear stage
  context.clearRect(0, 0, canvas.width, canvas.height);
  drawAll(newTime-time);
  // request new frame
  requestAnimFrame(function() {
    animate(newTime);
  });
}