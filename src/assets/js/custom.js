"use strict";

document.addEventListener("mousemove", parallax);
function parallax(e) {
  this.querySelectorAll(".mouse-effect").forEach((item) => {
    const speed = item.getAttribute("data-speed");

    const x = (window.innerWidth - e.pageX * speed) / 100;
    const y = (window.innerWidth - e.pageY * speed) / 100;

    item.style.transform = `translate(${x}px, ${y}px)`;
  });
}
