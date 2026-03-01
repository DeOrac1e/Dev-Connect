document.addEventListener("DOMContentLoaded", () => {
  const heading = document.getElementById("hero-heading");
  const paragraph = document.getElementById("hero-paragraph");

  const messages = [
    {
      h1: "Where Developers Connect, Learn & Build Together",
      p: "Join a thriving community of developers passionate about coding, collaboration, and continuous learning."
    },
    {
      h1: "Collaborate on Real Projects",
      p: "Work with peers on exciting open-source and community-driven projects."
    },
    {
      h1: "Grow Your Career with DevConnect",
      p: "Sharpen your skills, get recognized, and expand your professional network."
    },
    {
      h1: "Live Sessions Coming Soon",
      p: "Join WhatsApp Live and soon X for interactive learning."
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
