const navBar = document.getElementById("navbar");
const navLinks = document.querySelectorAll(".nav-link");
const heroImg = document.querySelector(".hero-image");
const heroText = document.querySelector(".first-hero-container");
const heroSpans = document.querySelectorAll(".ruber-band-anim");
const cardContainer = document.querySelector(".first-card-container");

// Gives boxshadow to navbar when window is scrolled
window.addEventListener("scroll", (e) => {
  if (scrollY > 0) {
    navBar.style.boxShadow = "0 0 5px black";
  } else {
    navBar.style.boxShadow = "none";
  }
});

// Animations with gsap
gsap.from(navBar, { duration: 1, y: "-100%", ease: "bounce" });
gsap.from(navLinks, { duration: 1, opacity: 0, delay: 0.7, stagger: 0.3 });
gsap.from(heroImg, { duration: 1.5, x: "-100vw", delay: 1, ease: "power2.in" });
gsap.from(heroText, { duration: 1.5, delay: 2, x: "-110%" });

heroSpans.forEach((e) => {
  e.addEventListener("mouseenter", () => {
    e.classList.add("span-animation");
  });

  e.addEventListener("mouseleave", () => {
    e.classList.remove("span-animation");
  });
});

// Observer
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("first-card-container-show");
      } else {
        entry.target.classList.remove("first-card-container-show");
      }
    });
  },
  {
    threshold: .7,
  }
);

observer.observe(cardContainer);
