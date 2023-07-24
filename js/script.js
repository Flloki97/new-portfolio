var svg1 = document.querySelector('#svg'+1);
var tl = new TimelineMax();

//create a timeline with 2 tweens that draw 2 separate strokes
tl.add(createLineTween(svg1),  "-=0");

//this function creates a single tween that animates the stroke of an svg
function createLineTween(svg) { 
   var pathObject = {length:0, pathLength:svg.getTotalLength()}; 
   var tween = TweenLite.to(pathObject, 2, {length:pathObject.pathLength, onUpdate:drawLine, onUpdateParams:[pathObject, svg], immediateRender:true});
   return tween;
};


 //update stroke   
 function drawLine(obj, svg) {
  svg.style.strokeDasharray = [obj.length, obj.pathLength].join(' ');
 };