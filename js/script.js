window.addEventListener("load", () => {
   loader();
});

$(window).on('beforeunload', function(){
   $(window).scrollTop(0);
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


// JavaScript
function startAnimation(svg, container, animationSpeed) {
   var svgLength = svg.getTotalLength();
 
   // Set initial SVG properties for animation
   svg.style.strokeDasharray = svgLength;
   svg.style.strokeDashoffset = svgLength;
 
   // Function to animate the SVG
   function animateSVG() {
     var containerRect = container.getBoundingClientRect();
     var sectionMiddle = containerRect.top + containerRect.height / 2;
     var scrollOffset = window.innerHeight - sectionMiddle;
     var scrollPercentage = scrollOffset / (window.innerHeight - containerRect.height / 2);
 
     // Calculate the new offset for the animation, starting from the middle of the section
     var newOffset = svgLength * (1 - Math.min(1, Math.max(0, scrollPercentage * animationSpeed)));
     svg.style.strokeDashoffset = newOffset;
   }
 
   // Listen for the scroll event and trigger the animation based on the scroll position
   window.addEventListener('scroll', animateSVG);
 
   // Call the animateSVG function to trigger the initial animation
   animateSVG();
 }
 
 // Get the first SVG and its container, then start the animation
 var svg1 = document.querySelector('#svg1');
 var svgContainer1 = document.querySelector('.line-container');
 startAnimation(svg1, svgContainer1, 0.9);
 
 // Get the second SVG and its container, then start the animation
 var svg2 = document.querySelector('#svg2');
 var svgContainer2 = document.querySelector('.svg2-container');
 startAnimation(svg2, svgContainer2, 2); // You can adjust the animation speed for the second SVG
 

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


const mySwiper = new Swiper('.mySwiper', {
   autoplay: {
    delay: 3000,
  },

});





// Smooth Scroll with GSAP

const lenis = new Lenis()

lenis.on('scroll', (e) => {
  console.log(e)
})

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)



const lenis2 = new Lenis({
   duration: 1.2,
   easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
});

function raf(time) {
   lenis2.raf(time);
   ScrollTrigger.update();
   requestAnimationFrame(raf);
}

// requestAnimationFrame(raf);

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


var swiper = new Swiper(".mySwiper", {
   slidesPerView: 1,
   spaceBetween: 30,
   loop: true,
   pagination: {
     el: ".swiper-pagination",
     clickable: true,
   },
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
 });



