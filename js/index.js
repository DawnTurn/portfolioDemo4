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
              onEnter: () => gsap.to(".about-content", 0.8, { opacity: 1, x: 0 }),
              onEnterBack: () =>
                gsap.to(".about-content", 0.8, { opacity: 1, x: 0 }),
              onLeave: () =>
                gsap.to(".about-content", 0.1, { opacity: 0, x: "-100px" }),
              onLeaveBack: () =>
                gsap.to(".about-content", 0.1, { opacity: 0, x: "-100px" }),
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
                gsap.to(".about-img", 0.1, { opacity: 0, y: "100px" }),
              onLeaveBack: () =>
                gsap.to(".about-img", 0.1, { opacity: 0, y: "100px" }),
            },
          }
        );

        gsap.fromTo(
          ".flex",
          0.7,
          { opacity: 0, x: "-100px" },
          {
            opacity: 1,
            x: 0,
            stagger: 0.4,
            ease: Power2.easeInOut,
            scrollTrigger: {
              trigger: ".third-page",
              start: "top 40%",
              end: "bottom 40%",
              onEnter: () =>
                gsap.to(".flex", 0.7, {
                  opacity: 1,
                  x: 0,
                  stagger: 0.2,
                  ease: Power2.easeInOut,
                }),
              onEnterBack: () =>
                gsap.to(".flex", 0.7, {
                  opacity: 1,
                  x: 0,
                  stagger: 0.2,
                  ease: Power2.easeInOut,
                }),
              onLeave: () =>
                gsap.to(".flex", 0.1, {
                  opacity: 0,
                  x: "-100px",
                }),
              onLeaveBack: () =>
                gsap.to(".flex", 0.1, {
                  opacity: 0,
                  x: "-100px",
                }),
            },
          }
        );

        gsap.fromTo(
          ".skills-logos i",
          0.6,
          { opacity: 0 },
          {
            opacity: 1,
            stagger: 0.09,
            scrollTrigger: {
              trigger: ".fourth-page",
              start: "top 40%",
              end: "bottom 40%",
              onEnter: () =>
                gsap.to(".skills-logos i", 0.6, {
                  opacity: 1,
                  stagger: 0.09,
                }),
              onEnterBack: () =>
                gsap.to(".skills-logos i", 0.6, {
                  opacity: 1,
                  stagger: 0.09,
                }),
              onLeave: () =>
                gsap.to(".skills-logos i", 0.1, {
                  opacity: 0
                }),
              onLeaveBack: () =>
                gsap.to(".skills-logos i", 0.1, {
                  opacity: 0
                }),
            },
          }
        );

        gsap.fromTo(
          ".bar1 .percentage",
          0.7,
          { width: 0 },
          {
            width: "95%",
            scrollTrigger: {
              trigger: ".fourth-page",
              start: "top 40%",
              end: "bottom 40%",
              onEnter: () =>
                gsap.to(".bar1 .percentage", 0.7, {
                  width: "95%",
                }),
              onEnterBack: () =>
                gsap.to(".bar1 .percentage", 0.7, {
                  width: "95%",
                }),
              onLeave: () =>
                gsap.to(".bar1 .percentage", 0.1, {
                  width: 0,
                }),
              onLeaveBack: () =>
                gsap.to(".bar1 .percentage", 0.1, {
                  width: 0,
                }),
            },
          }
        );

        gsap.fromTo(
          ".bar2 .percentage",
          0.7,
          { width: 0 },
          {
            width: "85%",
            scrollTrigger: {
              trigger: ".fourth-page",
              start: "top 40%",
              end: "bottom 40%",
              onEnter: () =>
                gsap.to(".bar2 .percentage", 0.7, {
                  width: "85%",
                }),
              onEnterBack: () =>
                gsap.to(".bar2 .percentage", 0.7, {
                  width: "85%",
                }),
              onLeave: () =>
                gsap.to(".bar2 .percentage", 0.1, {
                  width: 0,
                }),
              onLeaveBack: () =>
                gsap.to(".bar2 .percentage", 0.1, {
                  width: 0,
                }),
            },
          }
        );

        gsap.fromTo(
          ".bar3 .percentage",
          0.7,
          { width: 0 },
          {
            width: "70%",
            scrollTrigger: {
              trigger: ".fourth-page",
              start: "top 40%",
              end: "bottom 40%",
              onEnter: () =>
                gsap.to(".bar3 .percentage", 0.7, {
                  width: "70%",
                }),
              onEnterBack: () =>
                gsap.to(".bar3 .percentage", 0.7, {
                  width: "70%",
                }),
              onLeave: () =>
                gsap.to(".bar3 .percentage", 0.1, {
                  width: 0,
                }),
              onLeaveBack: () =>
                gsap.to(".bar3 .percentage", 0.1, {
                  width: 0,
                }),
            },
          }
        );

        gsap.fromTo(
          ".bar4 .percentage",
          0.7,
          { width: 0 },
          {
            width: "80%",
            scrollTrigger: {
              trigger: ".fourth-page",
              start: "top 40%",
              end: "bottom 40%",
              onEnter: () =>
                gsap.to(".bar4 .percentage", 0.7, {
                  width: "80%",
                }),
              onEnterBack: () =>
                gsap.to(".bar4 .percentage", 0.7, {
                  width: "80%",
                }),
              onLeave: () =>
                gsap.to(".bar4 .percentage", 0.1, {
                  width: 0,
                }),
              onLeaveBack: () =>
                gsap.to(".bar4 .percentage", 0.1, {
                  width: 0,
                }),
            },
          }
        );

        gsap.fromTo(
          ".bar5 .percentage",
          0.7,
          { width: 0 },
          {
            width: "70%",
            scrollTrigger: {
              trigger: ".fourth-page",
              start: "top 40%",
              end: "bottom 40%",
              onEnter: () =>
                gsap.to(".bar5 .percentage", 0.7, {
                  width: "70%",
                }),
              onEnterBack: () =>
                gsap.to(".bar5 .percentage", 0.7, {
                  width: "70%",
                }),
              onLeave: () =>
                gsap.to(".bar5 .percentage", 0.1, {
                  width: 0,
                }),
              onLeaveBack: () =>
                gsap.to(".bar5 .percentage", 0.1, {
                  width: 0,
                }),
            },
          }
        );

        gsap.fromTo(
          ".bar6 .percentage",
          0.7,
          { width: 0 },
          {
            width: "60%",
            scrollTrigger: {
              trigger: ".fourth-page",
              start: "top 40%",
              end: "bottom 40%",
              onEnter: () =>
                gsap.to(".bar6 .percentage", 0.7, {
                  width: "60%",
                }),
              onEnterBack: () =>
                gsap.to(".bar6 .percentage", 0.7, {
                  width: "60%",
                }),
              onLeave: () =>
                gsap.to(".bar6 .percentage", 0.1, {
                  width: 0,
                }),
              onLeaveBack: () =>
                gsap.to(".bar6 .percentage", 0.1, {
                  width: 0,
                }),
            },
          }
        );

        gsap.fromTo(
          ".bar7 .percentage",
          0.7,
          { width: 0 },
          {
            width: "50%",
            scrollTrigger: {
              trigger: ".fourth-page",
              start: "top 40%",
              end: "bottom 40%",
              onEnter: () =>
                gsap.to(".bar7 .percentage", 0.7, {
                  width: "50%",
                }),
              onEnterBack: () =>
                gsap.to(".bar7 .percentage", 0.7, {
                  width: "50%",
                }),
              onLeave: () =>
                gsap.to(".bar7 .percentage", 0.1, {
                  width: 0,
                }),
              onLeaveBack: () =>
                gsap.to(".bar7 .percentage", 0.1, {
                  width: 0,
                }),
            },
          }
        );

        gsap.fromTo(
          ".left-slide",
          0.7,
          { opacity: 0, x: "-100px" },
          {
            opacity: 1,
            x: 0,
            ease: Power2.easeInOut,
            stagger: 0.1,
            scrollTrigger: {
              trigger: ".fifth-page",
              start: "top 40%",
              end: "bottom 40%",
              onEnter: () =>
                gsap.to(".left-slide", 0.7, {
                  opacity: 1,
                  x: 0,
                  stagger: 0.1,
                  ease: Power2.easeInOut,
                }),
              onEnterBack: () =>
                gsap.to(".left-slide", 0.7, {
                  opacity: 1,
                  x: 0,
                  stagger: 0.1,
                  ease: Power2.easeInOut,
                }),
              onLeave: () =>
                gsap.to(".left-slide", 0.1, {
                  opacity: 0,
                  x: "-100px",
                }),
              onLeaveBack: () =>
                gsap.to(".left-slide", 0.1, {
                  opacity: 0,
                  x: "-100px",
                }),
            },
          }
        );

        gsap.fromTo(
          ".right-slide",
          0.7,
          { opacity: 0, x: "100px" },
          {
            opacity: 1,
            x: 0,
            ease: Power2.easeInOut,
            stagger: 0.1,
            scrollTrigger: {
              trigger: ".fifth-page",
              start: "top 40%",
              end: "bottom 40%",
              onEnter: () =>
                gsap.to(".right-slide", 0.7, {
                  opacity: 1,
                  x: 0,
                  stagger: 0.1,
                  ease: Power2.easeInOut,
                }),
              onEnterBack: () =>
                gsap.to(".right-slide", 0.7, {
                  opacity: 1,
                  x: 0,
                  stagger: 0.1,
                  ease: Power2.easeInOut,
                }),
              onLeave: () =>
                gsap.to(".right-slide", 0.1, {
                  opacity: 0,
                  x: "100px",
                }),
              onLeaveBack: () =>
                gsap.to(".right-slide", 0.1, {
                  opacity: 0,
                  x: "100px",
                }),
            },
          }
        );

        gsap.fromTo(
          ".portfolio1",
          0.7,
          { opacity: 0, y: "-50px" },
          {
            opacity: 1,
            y: 0,
            ease: Power2.easeInOut,
            stagger: 0.1,
            scrollTrigger: {
              trigger: ".fifth-page",
              start: "top 40%",
              end: "bottom 40%",
              onEnter: () =>
                gsap.to(".portfolio1", 0.7, {
                  opacity: 1,
                  y: 0,
                  stagger: 0.1,
                  ease: Power2.easeInOut,
                }),
              onEnterBack: () =>
                gsap.to(".portfolio1", 0.7, {
                  opacity: 1,
                  y: 0,
                  stagger: 0.1,
                  ease: Power2.easeInOut,
                }),
              onLeave: () =>
                gsap.to(".portfolio1", 0.1, {
                  opacity: 0,
                  y: "-50px",
                }),
              onLeaveBack: () =>
                gsap.to(".portfolio1", 0.1, {
                  opacity: 0,
                  y: "-50px",
                }),
            },
          }
        );

        gsap.fromTo(
          ".anime-site",
          0.7,
          { opacity: 0, y: "50px" },
          {
            opacity: 1,
            y: 0,
            ease: Power2.easeInOut,
            stagger: 0.1,
            scrollTrigger: {
              trigger: ".fifth-page",
              start: "top 40%",
              end: "bottom 40%",
              onEnter: () =>
                gsap.to(".anime-site", 0.7, {
                  opacity: 1,
                  y: 0,
                  stagger: 0.1,
                  ease: Power2.easeInOut,
                }),
              onEnterBack: () =>
                gsap.to(".anime-site", 0.7, {
                  opacity: 1,
                  y: 0,
                  stagger: 0.1,
                  ease: Power2.easeInOut,
                }),
              onLeave: () =>
                gsap.to(".anime-site", 0.1, {
                  opacity: 0,
                  y: "50px",
                }),
              onLeaveBack: () =>
                gsap.to(".anime-site", 0.1, {
                  opacity: 0,
                  y: "50px",
                }),
            },
          }
        );

        gsap.fromTo(
          ".down-slide",
          0.7,
          { opacity: 0, y: "-50px" },
          {
            opacity: 1,
            y: 0,
            ease: Power2.easeInOut,
            stagger: 0.15,
            scrollTrigger: {
              trigger: ".sixth-page",
              start: "top 40%",
              end: "bottom 40%",
              onEnter: () =>
                gsap.to(".down-slide", 0.7, {
                  opacity: 1,
                  y: 0,
                  stagger: 0.15,
                  ease: Power2.easeInOut,
                }),
              onEnterBack: () =>
                gsap.to(".down-slide", 0.7, {
                  opacity: 1,
                  y: 0,
                  stagger: 0.15,
                  ease: Power2.easeInOut,
                }),
              onLeave: () =>
                gsap.to(".down-slide", 0.1, {
                  opacity: 0,
                  y: "-50px",
                }),
              onLeaveBack: () =>
                gsap.to(".down-slide", 0.1, {
                  opacity: 0,
                  y: "-50px",
                }),
            },
          }
        );

        gsap.fromTo(
          ".contact-item",
          0.8,
          { opacity: 0 },
          {
            opacity: 1,
            stagger: 0.2,
            scrollTrigger: {
              trigger: ".sixth-page",
              start: "top 40%",
              end: "bottom 40%",
              onEnter: () =>
                gsap.to(".contact-item", 0.7, {
                  opacity: 1,
                  stagger: 0.2,
                }),
              onEnterBack: () =>
                gsap.to(".contact-item", 0.7, {
                  opacity: 1,
                  stagger: 0.2,
                }),
              onLeave: () =>
                gsap.to(".contact-item", 0.1, {
                  opacity: 0,
                }),
              onLeaveBack: () =>
                gsap.to(".contact-item", 0.1, {
                  opacity: 0,
                }),
            },
          }
        );
  }
}

isTouch()