const burger = document.querySelector('.burger')
const tl = gsap.timeline()

tl.to('nav', .5, {opacity: 1, pointerEvents: 'all'})
  .to('nav ul a', 1, {y: 0, ease: Power2.easeInOut}, '-=.3')
  .fromTo('nav a i', .5, {opacity: 0, y: '10px'}, {opacity: 1, y: 0, ease: Power4.easeInOut, stagger: .07}, '-=.4')
  .fromTo('.socials h3', .3, {opacity: 0}, {opacity: 1}, '-=.6')
  .reverse()

burger.addEventListener('click', () => {
    burger.classList.toggle('active')
    tl.reversed(!tl.reversed())
})