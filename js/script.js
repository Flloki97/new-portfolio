var svg1 = document.querySelector('#svg'+1);
var tl = new TimelineMax();

//create a timeline with 2 tweens that draw 2 separate strokes
tl.add(createLineTween(svg1),  "+=2");

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

 //  -- Design link: https://dribbble.com/shots/16383090-Personal-Portfolio-Website-concept-design/attachments/9661424?mode=media



//  Carousel JS

const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach(button => {
   button.addEventListener("click", () => {
      const offset = button.dataset.carouselButton === "next" ? 1 : -1
      const slides = button.closest("[data-carousel]").querySelector("[data-slides]")

      const activeSlide = slides.querySelector("[data-active]")
      let newIndex = [...slides.children].indexOf(activeSlide) + offset
      if (newIndex < 0 ) newIndex = slides.children.length - 1
      if(newIndex >= slides.children.length) newIndex = 0

      slides.children[newIndex].dataset.active = true
      delete activeSlide.dataset.active
   })
});


