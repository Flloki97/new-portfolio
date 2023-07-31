window.addEventListener("load", () => {
   loader();
});



// Smooth scrolling with Javascript because if i make it with css the smoth scroll from GSAP doesnt work well 

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
   anchor.addEventListener('click', function (e) {
       e.preventDefault();

       document.querySelector(this.getAttribute('href')).scrollIntoView({
           behavior: 'smooth'
       });
   });
});



var svg1 = document.querySelector('#svg'+1);
var tl = new TimelineMax();

//create a timeline with 2 tweens that draw 2 separate strokes
tl.add(createLineTween(svg1),  "+=1");

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





// Smooth Scroll with GSAP

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


var width = $(window).width();
var smallMenu = document.getElementById("ham-menu");
var styleLineTop = document.getElementById("top-line").style;
var styleLineBottom = document.getElementById("bottom-line").style;
var dropMenu = document.getElementById("menu-links-container");

$(window).on('resize', function() {
   if ($(this).width() !== width) {
     width = $(this).width();
      if(width >= 600 && smallMenu.classList.contains('opened')) {
         styleLineTop.webkitTransform ='rotate(0deg) translate(0px, 0px)';
         styleLineBottom.webkitTransform ='rotate(0deg) translate(0px, 0px)';
         dropMenu.style.display = "none";
         smallMenu.classList.remove('opened');
      }
   }

 });
 

 $(".menu-links-container a").on('click', () => {
      styleLineTop.webkitTransform ='rotate(0deg) translate(0px, 0px)';
      styleLineBottom.webkitTransform ='rotate(0deg) translate(0px, 0px)';
      dropMenu.style.display = "none";
      smallMenu.classList.remove('opened');
 })

 function openMenu() {
   var mobileMenu = document.getElementById("ham-menu").classList.toggle('opened');
   var smallMenu = document.getElementById("ham-menu");
   var styleLineTop = document.getElementById("top-line").style;
   var styleLineBottom = document.getElementById("bottom-line").style;
   var dropMenu = document.getElementById("menu-links-container");
   
 

   if(smallMenu.classList.contains('opened')) {
      styleLineTop.webkitTransform ='rotate(45deg) translate(0px, 0px)';
      styleLineBottom.webkitTransform ='rotate(315deg) translate(7px, -7px)';
      dropMenu.style.display = "flex";
   } else {
      styleLineTop.webkitTransform ='rotate(0deg) translate(0px, 0px)';
      styleLineBottom.webkitTransform ='rotate(0deg) translate(0px, 0px)';
      dropMenu.style.display = "none";
   } 
 }


//  Preloader Animation 

function loader(_success) {
   var obj = document.querySelector('.preloader'),
   inner = document.querySelector('.preloader_inner'),
   page = document.querySelector('.container');
   obj.classList.add('show');
   page.classList.remove('show');
   var w = 0,
       t = setInterval(function() {
           w = w + 1;
           inner.textContent = w+'%';
           if (w === 100){
               obj.classList.remove('show');
               page.classList.add('show');
               clearInterval(t);
               w = 0;
               if (_success){
                   return _success();
               }
           }
       }, 5);
}



