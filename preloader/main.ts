import SplitType from "split-type";
import gsap from "gsap";

window.addEventListener("DOMContentLoaded", function(event) {
  gsap.defaults({ease:"power2.inOut",});
  gsap.set(".header",{x:"100%",display:"hidden"});
  const bg = document.querySelector(".principal-bg");
  const tl = gsap.timeline({paused:true, delay:0.5});

  tl.to(bg,{width:"10px",height:"10px",duration:1})
  .to(".header-wrapper",{x:"0%",display:"block"})
  .to(".header",{x:"0%",duration:1},"-=1")
  .to(".principal-bg",{x:6,duration:1},"<")



  tl.play();
});
