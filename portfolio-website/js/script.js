
// Responsive Hamburger Menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

const themeToggle = document.getElementById("themeToggle");

// Load saved theme on page load
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  themeToggle.textContent = "☀️";
}

// Toggle theme on click
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");

  // Save theme
  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem("theme", "dark");
    themeToggle.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    themeToggle.textContent = "🌙";
  }
});

// Dynamic Project Loading
const projectContainer = document.getElementById("projectContainer");

if (projectContainer) {
  const projects = [
    {
      title: "CHURCH FLICKS SERIES",
      images: [
        "images/churchflicks-11.jpg",
"images/churchflicks-12.jpg" ,
"images/churchflicks-13.jpg" ,
"images/churchflicks-14.jpg" ,
"images/churchflicks-15.jpg" ,
"images/churchflicks-20.jpg" ,
"images/churchflicks-22.jpg" ,
"images/churchflicks-23.jpg" ,
"images/churchflicks-24.jpg" ,
"images/churchflicks-25.jpg" ,
"images/churchflicks-26.jpg" ,
"images/churchflicks-27.jpg" ,
"images/churchflicks-28.jpg" ,
"images/churchflicks-29.jpg" ,
"images/churchflicks-30.jpg" ,
"images/churchflicks-31.jpg" ,
"images/churchflicks-32.jpg" ,
"images/churchflicks-33.jpg" ,
"images/churchflicks-34.jpg" ,
"images/churchflicks-38.jpg" ,
"images/churchflicks-39.jpg" ,
"images/churchflicks-40.jpg" 
      ],
      description: "This series is a project I did with and for my friends for a costume party.",
      link: "#"
    },
    {
      title: "BOY'S DAY OUT",
      images: [
        "images/IMG_2182.JPG",
"images/IMG_2185.JPG",
"images/IMG_2473.JPG",
"images/IMG_2477.JPG",
"images/IMG_2478.JPG",
"images/IMG_2481.JPG",
"images/IMG_2482.JPG",
"images/IMG_2489.JPG",
"images/IMG_2490.JPG",
"images/IMG_2546.JPG",
"images/IMG_2930.JPG",
"images/IMG_3006.JPG"
      ],
      description: "This series is a project I did with and for my friends while we were out having fun.",
      link: "#"
    },
    {
      title: "I AM DAME",
      images: [
        "images/IMG_3426.jpg",
"images/IMG_3435.jpg",
"images/IMG_3443.jpg",
"images/IMG_3444.jpg",
"images/IMG_3446.jpg",
"images/IMG_3456.jpg"
      ],
      description: "This series is a project I did with and for my friend while we were at the library.",
      link: "#"
    }
  ];

  projects.forEach((proj, index) => {
    const card = document.createElement("div");
    card.classList.add("project-card");

    // Create image carousel container
    const carousel = document.createElement("div");
    carousel.classList.add("carousel");

    carousel.innerHTML = `
      <button class="prev">&#10094;</button>
      <div class="carousel-images">
        ${proj.images.map(img => `<img src="${img}" alt="${proj.title}">`).join("")}
      </div>
      <button class="next">&#10095;</button>
    `;

    // Add project info below carousel
    const info = document.createElement("div");
    info.classList.add("project-info");
    info.innerHTML = `
      <h3>${proj.title}</h3>
      <p>${proj.description}</p>
    `;

    card.appendChild(carousel);
    card.appendChild(info);
    projectContainer.appendChild(card);

    // Carousel functionality
    const images = carousel.querySelectorAll("img");
    let currentIndex = 0;

    function showImage(i) {
      images.forEach((img, idx) => {
        img.style.display = idx === i ? "block" : "none";
      });
    }

    carousel.querySelector(".prev").addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage(currentIndex);
    });

    carousel.querySelector(".next").addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    });

    showImage(currentIndex);
  });
}


// Contact Form Validation
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", e => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();
    const formMsg = document.getElementById("formMsg");

    if (!name || !email || !subject || !message) {
      formMsg.textContent = "Please fill out all fields.";
      formMsg.style.color = "red";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formMsg.textContent = "Please enter a valid email.";
      formMsg.style.color = "red";
    } else {
      formMsg.textContent = "Message sent successfully! (demo only)";
      formMsg.style.color = "green";
      contactForm.reset();
    }
  });
}