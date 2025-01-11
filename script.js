 

// Register the ScrollTrigger plugin
const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 1,
   
  spaceBetween: 100,
  pagination: {
  el: '.swiper-pagination',
  clickable: true, // Makes the dots clickable
},

});
const mediaQuery = window.matchMedia("(min-width: 1024px)");

if (mediaQuery.matches) {
  gsap.registerPlugin(ScrollTrigger);
  const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 100,
    autoplay:false,
    pagination: {
    el: '.swiper-pagination',
    clickable: true, // Makes the dots clickable
  },
 
  });
  Array.from(document.querySelector('.hero').children).forEach((element,index) => {
    gsap.from(element, { y: 50,opacity:0, duration: .5,delay:.5*index });
    
  });

  // Target all children of the ".about" section and apply animation
  [...document.querySelector(".about").children].forEach((element, index) => {
    gsap.from(element, {
      x: 50,
      opacity: 0,
      duration: 0.5,
      delay: 0.5 * index,
      scrollTrigger: {
        trigger: element,  
        start: "top 70%",  
        end: "top 30%",   
    },
    });
  });
  [...document.querySelector(".services").firstElementChild.children].forEach((element,index) => {
    gsap.from(element, {
      y: 50,
      opacity: 0,
      duration: 0.5,
      delay: 0.25 * index,
      scrollTrigger: {
        trigger: element,  
        start: "top 80%",  
        end: "top 20%",   
   
      },
    });
  });
  [...document.querySelectorAll(".staff")].forEach((element,index)=>{
    gsap.from(element, {
      y: 50,
      opacity: 0,
      duration: 0.5,
      delay: 0.25 * index,
      scrollTrigger: {
        trigger: element,  
        start: "top 80%",  
        end: "top 20%",   
   
      },
    });
  });
  [...document.querySelectorAll(".blog")].forEach((element,index)=>{
    gsap.from(element, {
      y: -50,
      opacity: 0,
      duration: 0.2,
      delay: 0.25 * index,
      scrollTrigger: {
        trigger: element,  
        start: "top 80%",  
        end: "top 20%",   
   
      },
    });
  })
}