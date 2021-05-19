import gsap from 'gsap';

const imgSelector = '.card-img'
const itemSelector = '.card-stats-item'
const header = '.card-wrapper h1'
const subHeader = '.card-wrapper h3'

const tl = gsap.timeline({ repeat: 0 });

gsap.from(imgSelector, { opacity: 0 });
gsap.from(itemSelector, { opacity: 0 });
gsap.from(header, { opacity: 0 });
gsap.from(subHeader, { opacity: 0 });

gsap.to(imgSelector, { duration: 1, opacity: 1 })
gsap.to(header, { duration: 1, opacity: 1, delay: 1 })
gsap.to(subHeader, { duration: 1, opacity: 1, delay: 2 })
gsap.to(itemSelector, {
    delay: 3,
    duration: .5,
    opacity: 1,
    ease: "power1.inOut"
});