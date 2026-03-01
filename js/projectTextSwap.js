document.addEventListener("DOMContentLoaded", () => {
  const heading = document.getElementById("hero-heading");
  const paragraph = document.getElementById("hero-paragraph");

  const messages = [
    {
      h1: "Turn Ideas Into Impact",
      p: "Every project you share here can inspire, teach, and change lives."
    },
    {
      h1: "Code Together, Grow Together",
      p: "Collaboration is the heartbeat of DevConnect - join hands and build something bigger than yourself."
    },
    {
      h1: "Your Skills Can Spark Innovation",
      p: "Don’t keep your talent hidden. Contribute to projects and watch your ideas come alive."
    },
    {
      h1: "Be Part of the Story",
      p: "Every line of code you write adds to our community’s journey of growth and success."
    },
    {
      h1: "From Learner to Leader",
      p: "Start small, contribute often, and soon you’ll be guiding others through real-world projects."
    },
    {
      h1: "Together We Build the Future",
      p: "Join projects that matter, collaborate with peers, and leave a mark on the developer world."
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
