
import SplitType from "split-type";
import gsap from "gsap";

window.addEventListener("DOMContentLoaded", function(event) {
  gsap.defaults({ease:"power2.inOut",duration:1});


  const tl = gsap.timeline({paused:true, delay:0.5});
  
  tl
  .from(".e",{y:100},"<")
  .from(".um",{y:100,delay:0.1},"<")
  .from(".l",{y:100,delay:0.2},"<")
  .from(".clip-p",{clipPath:"polygon(0% 100%, 100% 100%,100% 0%, 0% 0%)"})
  .to(".e",{y:-100})
  .to(".um",{y:-100,delay:0.1},"<")
  .to(".l",{y:-100,delay:0.2},"<")
  tl.play()
});

