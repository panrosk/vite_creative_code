
import { gsap } from "gsap";
import SplitType from "split-type";



window.addEventListener("DOMContentLoaded", function(event) {
  gsap.defaults({ ease: "power2.inOut",duration:1});
  const tl = gsap.timeline({ paused: true, delay: 0.5 });
  const principalHeader = new
  SplitType(".principal-header", {lineClass:"overflow-hidden h-[75px]"});

  const princiapSubheader = new
  SplitType(".principal-subheader",{lineClass:"overflow-hidden h-[20px]"})
  const secondaryHeader = new
  SplitType(".secondary-header", {lineClass:"overflow-hidden h-[20px]"});



  gsap.set(principalHeader.words, { y: "100%",opacity:0 });
  gsap.set(princiapSubheader.words, { y: "100%",opacity:0 });
  gsap.set(secondaryHeader.words, { y: "100%",opacity:0 });

  tl.

    to(".item-main .item-img img ",{
    clipPath: "polygon(20% 20%, 80% 20%, 80% 60%, 20% 60%)",},"<").
    to(principalHeader.words, { y: "0%",opacity:1,stagger:0.1 },"<").
    to(princiapSubheader.words, { y: "0%",opacity:1},"<").
    to(".item-main .item-img img ",
       {
         delay:0.2,
         clipPath:"polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)"}
      ).
    to(secondaryHeader.words, { y: "0%",opacity:1, },"<")

  const items = document.querySelectorAll('.item');
  if (items) {
    tl.play();
  }


});
