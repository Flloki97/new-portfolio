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







const lenis = new Lenis({
   duration: 1.2,
   easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
});

function raf(time) {
   lenis.raf(time);
   ScrollTrigger.update();
   requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

const section_1 = document.getElementById("container");
const col_left = document.querySelector(".col_left");
const timeln = gsap.timeline({paused: true});

// timeln.fromTo(col_left, {y: 0}, {y: '190vh', duration: 1, ease: 'none'}, 0);

// const scroll_1 = ScrollTrigger.create({
//    animation: timeln,
//    trigger: section_1,
//    start: 'top top',
//    end: 'bottom center',
//    scrub: true
// });



function handleScroll() {
   const element = document.querySelector('#menu-container');
 
   const scrollThreshold = 5;
 
   if (window.scrollY > scrollThreshold) {
     if (!element.classList.contains('scrolled-class')) {
       element.classList.add('scrolled-class');
     }
   } else {
     element.classList.remove('scrolled-class');
   }
 }
 
 window.addEventListener('scroll', handleScroll);

