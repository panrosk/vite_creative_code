import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const oscar = document.querySelector(".oscar");
const fuentes = document.querySelector(".fuentes");
const h1 = document.querySelector("h1");

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: h1,
    start: "top 50%",
    end: "bottom 10%",
    scrub: true,
    pin: true,
  },
});

console.log(oscar);
tl.to(oscar, { xPercent: 80, scale: 1.5 });
tl.to(fuentes, { top: 0 }, "<");
