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
  // Mini Projects
  miniProjects: [
    {
      title: "Responsive Carousel",
      description:
        "A sectioned carousel with responsiveness.",
      image:
        "./Assets/mini-1.png",
      link: "https://kanwaltariq0327-del.github.io/Form-Validator/",
    },
    {
      title: "Form Validator",
      description:
        "A project with input fields to create form validator using HTML & CSS",
      image:
        "./Assets/mini-2.png",
      link: "https://kanwaltariq0327-del.github.io/Form-Validator/",
    },
    {
      title: "CSS Slider",
      description:
        "A Slider using with HTML & CSS.",
      image:
        "./Assets/mini-3.png",
      link: "https://kanwaltariq0327-del.github.io/Practice-Slider-2/",
    },
    {
      title: "JS Events",
      description: "A mini project working with JS Events",
      image:
        "./Assets/mini-4.png",
      link: "https://kanwaltariq0327-del.github.io/Advanced-JavaScript/JS-EVENTS/index.html",
    },
    {
      title: "Quiz Game",
      description:
        "A small Quiz Game to show JS Fundamentals.",
      image:
        "./Assets/mini-5.png",
      link: "https://kanwaltariq0327-del.github.io/Quiz-Game/",
    },
    {
      title: "Async Functioning",
      description: "A small demo project showcasing my working with Async Operations and Functions plus API",
      image:
        "./Assets/mini-6.png",
      link: "https://kanwaltariq0327-del.github.io/Advanced-JavaScript/JavaScript-Async/index.html",
    },
  ],

  // Frontend Projects
  frontendProjects: [
    {
      title: "Tech Website",
      description:
        "A multi-pages website showing UI Prototype with animation.",
      image:
        "Assets/front-1.png",
      link: "https://kanwaltariq0327-del.github.io/Tech-website/",
    },
    {
      title: "Coffee Shop",
      description:
        "A Coffee Shop application with multiple section showcasing an online shop structure.",
      image:
        "Assets/front-2.png",
      link: "https://kanwaltariq0327-del.github.io/CoffeeShop/",
    },
    {
      title: "Spotify",
      description:
        "A spotify front clone page. One of my first project which helped me in understanding of HTML & CSS.",
      image:
        "Assets/front-3.png",
      link: "https://kanwaltariq0327-del.github.io/spotify/",
    },
    {
      title: "Space Project",
      description:
        "A project showing space website, working on it helped me how to work on responsiveness.",
      image:
        "Assets/front-4.png",
      link: "https://kanwaltariq0327-del.github.io/SpaceProject/",
    },
    {
      title: "UI Project",
      description:
        "A simple frontend prototype with multiple sections.",
      image:
        "Assets/front-5.png",
      link: "https://kanwaltariq0327-del.github.io/UI-Project/",
    },
    {
      title: "Get App",
      description:
        "A UI Prototype showcasing my working with HTML & CSS.",
      image:
        "Assets/front-6.png",
      link: "https://kanwaltariq0327-del.github.io/Project-1/",
    },
    {
      title: "Weather App",
      description:
        "A weather application using JavaScript to fetch and display weather information.",
      image:
        "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600",
      link: "https://kanwaltariq0327-del.github.io/weather-app/",
    },
  ],

  // React Projects
  reactProjects: [
    {
      title: "Travel Website",
      description:
        "A travel website built using React with reusable components and responsive layouts.",
      image:
        "Assets/react-1.png",
      link: "https://travel-website-react-kohl.vercel.app/",
    },
    {
      title: "Shopping Cart",
      description:
        "A Shopping Cart using node.js & react with react-router-dom, react-redux-toolkit, state management, slices, store & async thunks.",
      image:
        "Assets/react+back.png",
      link: "https://shopping-cart-dusky-seven-60.vercel.app/",
    },
    {
      title: "Food Recipe App",
      description:
        "A recipe app built using React with reusable components, context API, hooks and responsive layouts.",
      image:
        "Assets/react-2.png",
      link: "https://food-recipe-app-ashy-two.vercel.app/",
    },
    {
      title: "Todo App with Context API",
      description:
        "A React todo application using Context API for global state management.",
      image:
        "Assets/react-3.png",
      link: "https://react-todo-app-with-context-api.vercel.app/",
    },
    {
      title: "Weather App with React",
      description:
        "A React weather application using Context API, hooks & responsive layouts.",
      image:
        "Assets/react-4.png",
      link: "https://weather-app-with-react-sigma.vercel.app/",
    },
    {
      title: "Theme Switcher",
      description:
        "A Theme Switcher in react using Tailwind and react components.",
      image:
        "Assets/react-5.png",
      link: "https://theme-switcher-three-zeta.vercel.app/",
    },
    {
      title: "Background Changer",
      description:
        "A background changer using react hooks and CSS.",
      image:
        "Assets/react-6.png",
      link: "https://background-changer-woad-six.vercel.app/",
    },
    {
      title: "Rating Stars",
      description:
        "A Rating Star component with react hooks & Tailwind CSS.",
      image:
        "Assets/react-7.png",
      link: "https://rating-star-two.vercel.app/",
    },
    {
      title: "QR Code Generator",
      description:
        "A React QR Code generator using API Call and state management.",
      image:
        "Assets/react-8.png",
      link: "https://qr-code-generator-1h48.vercel.app/",
    },
    {
      title: "Random Password generator",
      description:
        "Random Password generator using hooks, state management.",
      image:
        "Assets/react-9.png",
      link: "https://password-generator-psi-wine.vercel.app/",
    },

  ],

  // Backend Projects
  backendProjects: [
    {
      title: "Shopping Cart",
      description:
        "A Shopping Cart using node.js & react with react-router-dom, react-redux-toolkit, state management, slices, store & async thunks.",
      image:
        "Assets/react+back.png",
      link: "https://shopping-cart-dusky-seven-60.vercel.app/",
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


// =============================================
// PROJECT CAROUSEL & NAVIGATION
// =============================================


// 1. GENERATE PROJECT CARDS AND INITIALIZE CAROUSELS

const carousels = document.querySelectorAll(".project-carousel");

const carouselControllers = [];

carousels.forEach((carousel) => {

  const track = carousel.querySelector(".project-track");

  const upBtn = carousel.querySelector(".carousel-btn.up");
  const downBtn = carousel.querySelector(".carousel-btn.down");

  const category = carousel.closest(".project-panel").id;

  // Generate original project cards
  const cards = projects[category]
    .map(createProjectCard)
    .join("");

  track.innerHTML = cards;

  const originalCards = [...track.children];

  const totalCards = originalCards.length;

  if (!totalCards) return;


  // 2. CREATE CLONES FOR INFINITE LOOPING

  const firstClone = originalCards[0].cloneNode(true);

  const lastClone = originalCards[totalCards - 1].cloneNode(true);

  track.prepend(lastClone);

  track.append(firstClone);


  // 3. CAROUSEL VARIABLES

  let currentIndex = 1;

  let cardStep = 0;

  let autoPlay;

  let isAnimating = false;


  // 4. CALCULATE CARD HEIGHT AND GAP

  function updateDimensions() {

  const firstCard = track.children[1];

  if (!firstCard) return;

  const gap = parseFloat(
    getComputedStyle(track).gap
  ) || 0;

  cardStep = firstCard.offsetHeight + gap;

  isAnimating = false;

  updatePosition(false);

}


  // 5. UPDATE CAROUSEL POSITION

  function updatePosition(animate = true) {

    track.style.transition = animate
      ? "transform 0.3s ease-in-out"
      : "none";

    track.style.transform =
      `translateY(-${currentIndex * cardStep}px)`;

  }


  // 6. MOVE CAROUSEL UP OR DOWN

  function moveCarousel(direction) {

  if (isAnimating || cardStep === 0) return;

  isAnimating = true;

  currentIndex += direction;

  updatePosition(true);

  setTimeout(() => {

    isAnimating = false;

  }, 250);

}


  // 7. HANDLE INFINITE LOOP

  track.addEventListener("transitionend", (event) => {

  if (event.propertyName !== "transform") return;

  if (currentIndex === 0) {

    currentIndex = totalCards;

    updatePosition(false);

  }

  else if (currentIndex === totalCards + 1) {

    currentIndex = 1;

    updatePosition(false);

  }

  isAnimating = false;

});


  // 8. UP BUTTON

  upBtn.addEventListener("click", () => {

    clearInterval(autoPlay);

    moveCarousel(-1);

  });


  // 9. DOWN BUTTON

  downBtn.addEventListener("click", () => {

    clearInterval(autoPlay);

    moveCarousel(1);

  });


  // 10. AUTOMATIC CAROUSEL MOVEMENT

  function startAutoPlay() {

    clearInterval(autoPlay);

    autoPlay = setInterval(() => {

      if (!isAnimating) {

        moveCarousel(1);

      }

    }, 3000);

  }


  // 11. PAUSE WHEN MOUSE ENTERS CAROUSEL

  carousel.addEventListener("mouseenter", () => {

    clearInterval(autoPlay);

  });


  // 12. RESUME WHEN MOUSE LEAVES CAROUSEL

  carousel.addEventListener("mouseleave", () => {

    startAutoPlay();

  });


  // 13. STORE CAROUSEL CONTROLLER

  carouselControllers.push({

    category,

    updateDimensions,

    startAutoPlay

  });


  // 14. INITIALIZE CAROUSEL

  updateDimensions();

  startAutoPlay();

});



// =============================================
// CATEGORY NAVIGATION
// =============================================

const navItems = document.querySelectorAll(".nav-item");

const projectPanels = document.querySelectorAll(".project-panel");


navItems.forEach((item) => {

  item.addEventListener("click", () => {

    // Remove active class from all navigation items
    navItems.forEach((nav) => {

      nav.classList.remove("active");

    });


    // Hide all project panels
    projectPanels.forEach((panel) => {

      panel.classList.remove("active");

    });


    // Activate clicked navigation item
    item.classList.add("active");


    // Get selected category
    const category = item.dataset.category;


    // Display selected project panel
    document.getElementById(category).classList.add("active");


    // Recalculate dimensions of the visible carousel
    const controller = carouselControllers.find(
      (carousel) => carousel.category === category
    );


    // Wait for panel to become visible
    requestAnimationFrame(() => {

      controller?.updateDimensions();

    });

  });

});



// =============================================
// RESPONSIVE CAROUSEL DIMENSIONS
// =============================================

window.addEventListener("resize", () => {

  carouselControllers.forEach((controller) => {

    controller.updateDimensions();

  });

});