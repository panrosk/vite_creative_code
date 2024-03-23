import gsap from "gsap";


document.addEventListener("DOMContentLoaded", function(event) {
  const container = document.getElementById('container');
  const rows = 6;
  const cols = 6;


  let html = '';
  for (let i = 0; i < rows * cols; i++) {
    html += '<div class="bg-black box h-[50px] w-[50px]"></div>';
  }
  
  let html2 = ''; 
  for (let i = 0; i < rows * cols; i++) {
    html2 += `<div class="">${html}</div>`;
  }

  if (container) {
    container.innerHTML = html2;
  }

  const boxes = document.querySelectorAll('.box');

  boxes.forEach((box, index) => {

      box.addEventListener('mouseenter', () => {
        gsap.to(box, {
          duration: 0.5,
          opacity: 0,

        });
      });

      box.addEventListener('mouseleave', () => {
        gsap.to(box, {
          duration: 0.5,
          opacity: 1,

        });
      });





  });


});


