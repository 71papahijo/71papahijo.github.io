const projects = [
  {
    title: "FPGA Snake Game",
    description: "A Snake game built on FPGA using FSM states (idle, running, end), VGA output, and optimized for limited LUT resources.",
    image: "./projects/SnakeGame/apic5l.gif",   
    tags: ["FPGA", "Verilog", "FSM", "VGA"],
    href: "./projects/SnakeGame/SnakeGame.html"
  },
  {
    title: "Interactive Desmos Clock",
    description: "A clock built in Desmos using dynamic expressions and parameter-based control of the hands.",
    image: "./projects/DesmosClock/Poster.png",
    tags: ["Desmos", "Math", "Interactive"],
    href: "./projects/DesmosClock/DesmosClock.html"
  },
  {
    title: "Next Project",
    description: "This card is ready for the next project you want to add.",
    image: "./assets/Images/profile.png",
    tags: ["Template"],
    href: "./projects/empty.html"
  }
];

function createTags(tags = []) {
  if (!tags.length) return "";
  return `
    <div class="project-tags">
      ${tags.map(tag => `<span class="tag">${tag}</span>`).join("")}
    </div>
  `;
}

function createProjectCard(project) {
  return `
    <article class="project-card">
      <img class="project-thumb" src="${project.image}" alt="${project.title} preview">
      <div class="project-info">
        <h3>${project.title}</h3>
        <p>${project.description}</p>
        ${createTags(project.tags)}
        <div class="project-actions">
          <a class="btn btn-primary" href="${project.href}">Read More</a>
        </div>
      </div>
    </article>
  `;
}

function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;
  grid.innerHTML = projects.map(createProjectCard).join("");
}

window.addEventListener("scroll", () => {
  const y = window.scrollY;

  const orb1 = document.querySelector(".orb-1");
  const orb2 = document.querySelector(".orb-2");

  if (orb1) orb1.style.transform = `translateY(${y * 0.2}px)`;
  if (orb2) orb2.style.transform = `translateY(${y * 0.1}px)`;
});

renderProjects();