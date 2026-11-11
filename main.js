/* -----------Responsive NavBar Js-------------- */
const showMenu = (navId, toggleId) => {
  const nav = document.getElementById(navId),
    toggle = document.getElementById(toggleId);

  toggle.addEventListener("click", () => {
    nav.classList.toggle("show-menu");
    toggle.classList.toggle("show-icon");
  });
};

showMenu("nav-menu", "nav-toggle");

/* -----------BackGround Animation Js-------------- */

const box = document.getElementById("ledBox");

for (let i = 0; i < 35; i++) {
  const particle = document.createElement("span");
  particle.className = "particle";

  particle.style.left = Math.random() * 100 + "%";
  particle.style.animationDuration = 4 + Math.random() * 6 + "s";

  particle.style.animationDelay = -Math.random() * 10 + "s";

  const size = 1 + Math.random() * 3;
  particle.style.width = size + "px";
  particle.style.height = size + "px";

  box.appendChild(particle);
}

/* ----------------CARDS-------------------*/

// Project data

const projects = {
  html: [
    {
      title: "Landing Page",
      description:
        "A responsive landing page built using HTML and CSS with a clean and modern design.",
      image:
        "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600",
      link: "#",
    },
    {
      title: "Restaurant Website",
      description:
        "A multi-page restaurant website featuring responsive layouts and attractive styling.",
      image:
        "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600",
      link: "#",
    },
    {
      title: "Login UI",
      description: "A stylish login interface created with HTML and CSS.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600",
      link: "#",
    },
  ],

  javascript: [
    {
      title: "Weather App",
      description:
        "A weather application using JavaScript to fetch and display weather information.",
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600",
      link: "#",
    },
    {
      title: "Todo App",
      description:
        "A task management application with dynamic DOM manipulation.",
      image:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600",
      link: "#",
    },
    {
      title: "Calculator",
      description:
        "A functional calculator built using JavaScript and interactive event handling.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600",
      link: "#",
    },
  ],

  react: [
    {
      title: "Travel Website",
      description:
        "A travel website built using React with reusable components and responsive layouts.",
      image:
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600",
      link: "#",
    },
    {
      title: "Todo with Context API",
      description:
        "A React todo application using Context API for global state management.",
      image:
        "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600",
      link: "#",
    },
    {
      title: "Lottery App",
      description:
        "An interactive lottery application built with React state and component logic.",
      image:
        "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600",
      link: "#",
    },
  ],

  portfolio: [
    {
      title: "Personal Portfolio",
      description:
        "A personal portfolio website showcasing skills, projects and learning progress.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600",
      link: "#",
    },
    {
      title: "Developer Profile",
      description:
        "A responsive developer profile highlighting technical skills and experience.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600",
      link: "#",
    },
    {
      title: "Creative Showcase",
      description:
        "A creative website showcasing personal work and frontend development projects.",
      image:
        "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=600",
      link: "#",
    },
  ],
};

// Generate project cards

function createProjectCard(project) {
  return `
    <div class="project-card">

      <img src="${project.image}" alt="${project.title}" loading="lazy">

      <div class="project-info">

        <h3>${project.title}</h3>

        <p>${project.description}</p>

        <a href="${project.link}" target="_blank">
          View Project
        </a>

      </div>

    </div>
  `;
}

// Generate cards for each category

Object.keys(projects).forEach((category) => {
  const track = document.querySelector(`#${category} .project-track`);

  const cards = projects[category].map(createProjectCard).join("");

  // Duplicate cards for infinite scrolling
  track.innerHTML = cards + cards;
});

// Navigation functionality

const navItems = document.querySelectorAll(".nav-item");
const projectPanels = document.querySelectorAll(".project-panel");

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Remove active class from all buttons
    navItems.forEach((nav) => {
      nav.classList.remove("active");
    });

    // Remove active class from all panels
    projectPanels.forEach((panel) => {
      panel.classList.remove("active");
    });

    // Activate clicked button
    item.classList.add("active");

    // Show corresponding project panel
    const category = item.dataset.category;

    document.getElementById(category).classList.add("active");
  });
});

// ---------------------------ADDITION

// Select all carousels
const carousels = document.querySelectorAll(".project-carousel");

carousels.forEach((carousel) => {
  const upBtn = carousel.querySelector(".carousel-btn.up");
  const downBtn = carousel.querySelector(".carousel-btn.down");

  // Scroll upwards
  upBtn.addEventListener("click", () => {
    carousel.scrollBy({
      top: -370,
      behavior: "smooth",
    });
  });

  // Scroll downwards
  downBtn.addEventListener("click", () => {
    carousel.scrollBy({
      top: 370,
      behavior: "smooth",
    });
  });

  // Allow manual mouse-wheel scrolling
  carousel.addEventListener(
    "wheel",
    (event) => {
      event.preventDefault();

      carousel.scrollTop += event.deltaY;
    },
    { passive: false },
  );

  // Reset manual scroll when mouse leaves
  // so automatic animation can continue
  carousel.addEventListener("mouseleave", () => {
    carousel.scrollTop = 0;
  });
});
