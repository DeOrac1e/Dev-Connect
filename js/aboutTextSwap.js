document.addEventListener("DOMContentLoaded", () => {
  const heading = document.getElementById("about-heading");
  const paragraph = document.getElementById("about-paragraph");
const messages = [
  {
    h1: "Built by Developers, For Developers",
    p: "DevConnect was founded to create a space where every coder feels at home, supported, and inspired."
  },
  {
    h1: "A Community Rooted in Collaboration",
    p: "We believe the best ideas emerge when minds connect, share knowledge, and build together."
  },
  {
    h1: "Learning Through Real Experience",
    p: "Our mission is to help developers grow by working on projects that matter, not just tutorials."
  },
  {
    h1: "Innovation is Our DNA",
    p: "At DevConnect, creativity and bold ideas drive everything we do — from projects to mentorship."
  },
  {
    h1: "Your Journey, Our Commitment",
    p: "Whether you’re a beginner or a seasoned pro, DevConnect is here to support your growth every step of the way."
  }
];


  const animations = ["slide-left", "slide-right", "slide-up", "slide-down"];
  let index = 0;

  setInterval(() => {
    index = (index + 1) % messages.length;
    const anim = animations[index % animations.length];

    heading.className = "";
    paragraph.className = "about-tagline";

    heading.classList.add(anim);
    paragraph.classList.add(anim);

    heading.textContent = messages[index].h1;
    paragraph.textContent = messages[index].p;
  }, 4000);
});