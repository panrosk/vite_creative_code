import gsap from "gsap";
import SplitType from "split-type";

console.log("Hello World");
const lines = new SplitType(".poem", {
  types: "lines,words",
  lineClass: " my-2 lines",

  wordClass: "words bg-black",
});

document.addEventListener("DOMContentLoaded", function (event) {
  const lines = gsap.utils.toArray(".lines");
  const words = gsap.utils.toArray(".words");
  const button = document.querySelector(".clearbutton");

  button.addEventListener("click", () => {
    words.forEach((line) => {
      gsap.to(line, {
        background: "white",
      });
    });
  });

  words.forEach((line) => {
    line.addEventListener("mouseenter", () => {
      gsap.to(line, {
        duration: 0.5,
        background: "white",
      });
    });
  });
});
