
const courseDetails = [
  { title: "JavaScript Crash Course", description: `<ul><li>Foundations: Learn variables, functions, and loops.</li><li>DOM Manipulation: Build interactive web pages.</li><li>Hands-on Projects: Practice with mini apps.</li></ul>` },
  { title: "Python for Beginners", description: `<ul><li>Syntax Basics: Variables, data types, and operators.</li><li>Control Flow: If statements, loops, and functions.</li><li>Practical Tasks: Automate simple scripts.</li></ul>` },
  { title: "HTML for Complete Beginners", description: `<ul><li>Structure: Learn headings, paragraphs, and lists.</li><li>Links & Media: Add images, videos, and hyperlinks.</li><li>Page Building: Create your first static website.</li></ul>` },
  { title: "React Basics & Beyond", description: `<ul><li>Components: Build reusable UI blocks.</li><li>State & Props: Manage dynamic data.</li><li>Advanced: Hooks and context API.</li></ul>` },
  { title: "Java Essentials", description: `<ul><li>Core Concepts: Classes, objects, and methods.</li><li>OOP Principles: Inheritance and polymorphism.</li><li>Practical: Build console and GUI apps.</li></ul>` },
  { title: "PHP Fundamentals", description: `<ul><li>Server-side Basics: Variables and arrays.</li><li>Forms & Data: Handle user input securely.</li><li>Dynamic Pages: Connect PHP with MySQL.</li></ul>` },
  { title: "How to Prompt AI", description: `<ul><li>Prompting Foundations: Craft effective prompts.</li><li>Task Automation: Writing, editing, researching.</li><li>Template Magic: Generate lists, tables, and code.</li></ul>` },
  { title: "AI for Developers", description: `<ul><li>Integration: Add AI into your workflow.</li><li>APIs: Work with OpenAI and DeepSeek.</li><li>Projects: Build intelligent applications.</li></ul>` }
];


const cardsPerRow = 4;

document.querySelectorAll('.card').forEach((card, index, cards) => {
  let targetCard = null;

  
  const positionInRow = index % cardsPerRow;

  if (positionInRow === 0) {
    targetCard = cards[index + 1]; 
  } else if (positionInRow === 1) {
    targetCard = cards[index - 1];
  } else if (positionInRow === 2) {
    targetCard = cards[index + 1]; 
  } else if (positionInRow === 3) {
    targetCard = cards[index - 1];
  }

  if (!targetCard) return;
  const overlay = targetCard.querySelector('.card-overlay');

  card.addEventListener('mouseenter', () => {
    const details = courseDetails[index];
    overlay.innerHTML = `
      <h4>${details.title}</h4>
      ${details.description}
    `;
    overlay.classList.add('show');
  });

  card.addEventListener('mouseleave', () => {
    overlay.classList.remove('show');
    overlay.innerHTML = "";
  });

  card.addEventListener('click', () => {
    alert(`Opening ${courseDetails[index].title}...`);
    
    window.location.href = `${courseDetails[index].title.toLowerCase().replace(/\s+/g, '-')}.html`;
  });
});
