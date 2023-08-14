const burger = document.querySelector('.burger')
const body = document.querySelector('body')
const tl = gsap.timeline()

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