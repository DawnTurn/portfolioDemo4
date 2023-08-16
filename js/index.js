const burger = document.querySelector('.burger')
const body = document.querySelector('body')
const tl = gsap.timeline()

gsap.registerPlugin(ScrollTrigger)

if (window.matchMedia("(max-width: 1024px)").matches){
  tl.to("nav", 0.5, { opacity: 1, pointerEvents: "all" })
    .to("nav ul a", 1, { y: 0, ease: Power2.easeInOut }, "-=.3")
    .fromTo(
      "nav a i",
      0.5,
      { opacity: 0, y: "10px" },
      { opacity: 1, y: 0, ease: Power4.easeInOut, stagger: 0.07 },
      "-=.4"
    )
    .fromTo(".socials h3", 0.3, { opacity: 0 }, { opacity: 1 }, "-=.6")
    .reverse();
}

burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    tl.reversed(!tl.reversed())
    body.classList.toggle('overflow')
})

function isTouch(){
    if (window.matchMedia("(min-width: 1024px)").matches){
        tl.fromTo('nav', 1.2, {x: '-100%'}, {x: 0, ease: Power4.easeInOut})
          .fromTo('nav ul li', .7, {opacity: 0, x: '-100px'}, {opacity: 1, x: 0, ease: Power3.easeInOut, stagger: .1}, '-=.6')
          .fromTo('.social-icons a', .4, {opacity: 0, y: '30px'}, {opacity: 1, y: 0, stagger: .1, ease: Power3.easeInOut}, '-=.8')
          .fromTo('.socials h3', .4, {opacity: 0}, {opacity: 1}, '-=.3')
          .fromTo('.head h1', .4, {opacity: 0}, {opacity: 1}, '-=.4')
          .fromTo('.hello', .5, {opacity: 0, y: '30px'}, {opacity: 1, y:0}, '-=.6')
          .fromTo('.hero-contents h1', .5, {opacity: 0, y: '30px'}, {opacity: 1, y: 0}, '-=.4')
          .fromTo('.hero-contents .front', .5, {opacity: 0, y: '30px'}, {opacity: 1, y: 0}, '-=.4')
          .fromTo('.hero-contents button', .5, {opacity: 0, y: '30px'}, {opacity: 1, y: 0}, '-=.4')

      
        gsap.fromTo(
          ".about-content",
          0.8,
          { opacity: 0, x: "-100px" },
          {
            opacity: 1,
            x: 0,
            scrollTrigger: {
              trigger: ".second-page",
              start: "top 40%",
              end: "bottom 40%",
              markers: true,
              onEnter: () => gsap.to(".about-content", 0.8, { opacity: 1, x: 0 }),
              onEnterBack: () =>
                gsap.to(".about-content", 0.8, { opacity: 1, x: 0 }),
              onLeave: () =>
                gsap.to(".about-content", 0.8, { opacity: 0, x: "-100px" }),
              onLeaveBack: () =>
                gsap.to(".about-content", 0.8, { opacity: 0, x: "-100px" }),
            },
          }
        );

        gsap.fromTo(
          ".about-img",
          0.8,
          { opacity: 0, y: "100px" },
          {
            opacity: 1,
            y: 0,
            ease: Power2.easeInOut,
            scrollTrigger: {
              trigger: ".second-page",
              start: "top 40%",
              end: "bottom 40%",
              onEnter: () => gsap.to(".about-img", 0.8, { opacity: 1, y: 0 }),
              onEnterBack: () =>
                gsap.to(".about-img", 0.8, { opacity: 1, y: 0 }),
              onLeave: () =>
                gsap.to(".about-img", 0.8, { opacity: 0, y: "100px" }),
              onLeaveBack: () =>
                gsap.to(".about-img", 0.8, { opacity: 0, y: "100px" }),
            },
          }
        );
  }
}

isTouch()