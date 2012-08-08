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
        drawAll();
      }
      resizeCanvas();
  })();
  
});

function drawAll(){
  context.beginPath();
  context.rect(0, 0, canvas.width, canvas.height);
  context.fillStyle = '#EF7C00';
  context.fill();
}