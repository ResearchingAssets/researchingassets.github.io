const FirstElement = document.querySelector('.name-design');
const SecondElement = document.querySelector('.Hello');
const ThirdElement = document.querySelector('.quote');
const FourthElement = document.querySelector('.projects');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
  
    // Adjust opacity based on scroll position (adjust threshold as needed)
    if (scrollPosition > 100) {
      FirstElement.style.opacity = '0';
    } else {
      FirstElement.style.opacity = '1';
    }

    if (scrollPosition < 500 | scrollPosition > 800) {
      SecondElement.style.opacity = 0;
    } else {
      SecondElement.style.opacity = 1;
    }

    if (scrollPosition < 1000 | scrollPosition > 1554) {
      ThirdElement.style.opacity = 0;
    } else {
      ThirdElement.style.opacity = 1;
    }

    if (scrollPosition < 1555| scrollPosition > 2156) {
      FourthElement.style.opacity = 0;
    } else {
      FourthElement.style.opacity = 1;
    }
  });

  const rootElement = document.documentElement;
  const element = document.querySelector('.body-container');
  const icon = document.getElementById('change-icon')
  
  let currentMode = 'dark'; // store the current mode
  
  function modeChange() {
    if (currentMode === 'dark') {
      // Switch to light mode
      rootElement.style.setProperty('--fg-color', getComputedStyle(rootElement).getPropertyValue('--light-fg-color'));
      rootElement.style.setProperty('--bg-color', getComputedStyle(rootElement).getPropertyValue('--light-bg-color'));
      currentMode = 'light';
      icon.textContent = '🌙';
      } else {
      // Switch to dark mode
      rootElement.style.setProperty('--fg-color', getComputedStyle(rootElement).getPropertyValue('--dark-fg-color'));
      rootElement.style.setProperty('--bg-color', getComputedStyle(rootElement).getPropertyValue('--dark-bg-color'));
      currentMode = 'dark';
      icon.textContent = '💡';
    }
  }

// Get the link elements
const socialsLinks = document.querySelectorAll(".socials-link");

// Add an event listener to each link
socialsLinks.forEach(link => {
  link.addEventListener("click", function(event) {
    // Prevent the default link behavior
    event.preventDefault();

    // Get the element with the class of "socials"
    const socialsSection = document.querySelector(".socials");

    // Scroll to the socials section
    socialsSection.scrollIntoView({
      behavior: "smooth"
    });
  });
});

const aboutLink = document.querySelectorAll(".about-link");

// Add an event listener to each link
aboutLink.forEach(link => {
  link.addEventListener("click", function(event) {
    // Prevent the default link behavior
    event.preventDefault();

    // Get the element with the class of "about"
    const aboutSection = document.querySelector(".about");

    // Scroll to the socials section
    aboutSection.scrollIntoView({
      behavior: "smooth"
    });
  });
});

const projectLink= document.querySelectorAll(".project-link");

// Add an event listener to each link
projectLink.forEach(link => {
  link.addEventListener("click", function(event) {
    // Prevent the default link behavior
    event.preventDefault();

    // Get the element with the class of "projects"
    const ProjectSection = document.querySelector(".projects");

    // Scroll to the socials section
    ProjectSection.scrollIntoView({
      behavior: "smooth"
    });
  });
});

const quoteLink= document.querySelectorAll(".quote-link");

// Add an event listener to each link
quoteLink.forEach(link => {
  link.addEventListener("click", function(event) {
    // Prevent the default link behavior
    event.preventDefault();

    // Get the element with the class of "projects"
    const ProjectSection = document.querySelector(".quote");

    // Scroll to the socials section
    ProjectSection.scrollIntoView({
      behavior: "smooth"
    });
  });
});

const show = document.querySelector('.Description')
function hoverOnQuote(){
  show.style.opacity = 1;
}
function dishoverOnQuote(){
  show.style.opacity = 0;
}
