document.addEventListener("DOMContentLoaded", () => {
  const heading = document.getElementById("hero-heading");
  const paragraph = document.getElementById("hero-paragraph");

  const messages = [
    {
      h1: "Master Web Development",
      p: "Learn HTML, CSS, and JavaScript to build responsive, modern websites."
    },
    {
      h1: "Build Mobile Apps",
      p: "Create Android and iOS applications with hands-on projects."
    },
    {
      h1: "Database Development",
      p: "Design, manage, and optimize databases to power real-world applications."
    },
    {
      h1: "Programming Languages",
      p: "Sharpen your skills in Python, Java, and C++ with structured learning paths."
    },
    {
      h1: "Design for Impact",
      p: "Explore web design and 3D animation to bring creativity to life."
    },
    {
      h1: "AI Fundamentals",
      p: "Step into the future with AI courses designed to spark innovation."
    },
    {
      h1: "Personal Development",
      p: "Grow as a leader, transform yourself, and advance your career."
    }
  ];

  const animations = ["slide-left", "slide-right", "slide-up", "slide-down"];
  let index = 0;

  setInterval(() => {
    index = (index + 1) % messages.length;
    const anim = animations[index % animations.length];

    heading.className = "";
    paragraph.className = "hero-paragraph";

    heading.classList.add(anim);
    paragraph.classList.add(anim);

    heading.textContent = messages[index].h1;
    paragraph.textContent = messages[index].p;
  }, 4000);
});
