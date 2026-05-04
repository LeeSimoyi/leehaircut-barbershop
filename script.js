// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 80);
});

// ===== MOBILE NAV =====
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navClose = document.getElementById("nav-close");
const navOverlay = document.getElementById("nav-overlay");

menuToggle.addEventListener("click", () => {
  navLinks.classList.add("active");
  navOverlay.classList.add("active");
});

navClose.addEventListener("click", () => {
  navLinks.classList.remove("active");
  navOverlay.classList.remove("active");
});

navOverlay.addEventListener("click", () => {
  navLinks.classList.remove("active");
  navOverlay.classList.remove("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    navOverlay.classList.remove("active");
  });
});

// ===== HERO BACKGROUND SLIDER =====
const hero = document.querySelector(".hero");

const heroImages = [
  "imgs/hero1.png",
  "imgs/hero2.png",
  "imgs/hero3.png"
];

let currentIndex = 0;

hero.style.backgroundImage = `url(${heroImages[currentIndex]})`;

setInterval(() => {
  currentIndex = (currentIndex + 1) % heroImages.length;
  hero.style.backgroundImage = `url(${heroImages[currentIndex]})`;
}, 4000);



// ===== BOOKING MODAL =====
const bookingModal = document.getElementById("bookingModal");
const bookingClose = document.getElementById("bookingClose");
const bookingOverlay = document.querySelector(".booking-overlay");

// OPEN BUTTONS
document.querySelectorAll("#openBooking, .openBooking").forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    bookingModal.classList.add("active");
    document.body.style.overflow = "hidden";
  });
});

// CLOSE FUNCTION
function closeBooking() {
  bookingModal.classList.remove("active");
  document.body.style.overflow = "auto";
}

// EVENTS
bookingClose.addEventListener("click", closeBooking);
bookingOverlay.addEventListener("click", closeBooking);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeBooking();
});


// MESSAGE TOAST
const bookingForm = document.querySelector(".booking-form");
const successBox = document.getElementById("bookingSuccess");

bookingForm.addEventListener("submit", function(e) {
  e.preventDefault();

  // Close modal
  bookingModal.classList.remove("active");

  // Show success notification
  successBox.classList.add("active");

  document.body.style.overflow = "hidden";

  // Auto close after 3s
  setTimeout(() => {
    successBox.classList.remove("active");
    document.body.style.overflow = "auto";
    bookingForm.reset();
  }, 3000);
});


// ===== SERVICE DATA =====
const servicesData = {
  haircut: {
    title: "Classic Haircut",
    duration: "30 mins",
    price: "$3.23",
    ideal: "All face shapes",
    desc: "A precision haircut tailored to enhance your facial structure and personal style.",
    features: [
      "Face shape consultation",
      "Precision cutting",
      "Professional styling finish",
      "Neck & edge cleanup"
    ],
    note: "Perfect for a clean, professional everyday look."
  },

  beard: {
    title: "Beard Styling",
    duration: "20 mins",
    price: "$2.10",
    ideal: "Beard grooming & shaping",
    desc: "Expert beard trimming and shaping for a sharp, masculine finish.",
    features: [
      "Detailed beard shaping",
      "Razor sharp edges",
      "Hot towel finish",
      "Skin soothing treatment"
    ],
    note: "Enhances jawline and overall appearance."
  },

  spa: {
    title: "Hair Spa",
    duration: "40 mins",
    price: "$7.55",
    ideal: "Dry or damaged hair",
    desc: "Deep nourishing treatment designed to restore scalp health and hair strength.",
    features: [
      "Deep conditioning therapy",
      "Relaxing scalp massage",
      "Hair strengthening formula",
      "Stress relief experience"
    ],
    note: "Best for relaxation and hair rejuvenation."
  },

  facial: {
    title: "Face Clean-up",
    duration: "25 mins",
    price: "$4.00",
    ideal: "Skin cleansing & glow",
    desc: "A refreshing facial treatment that cleanses, hydrates, and brightens your skin.",
    features: [
      "Deep pore cleansing",
      "Exfoliation treatment",
      "Hydration mask",
      "Instant glow boost"
    ],
    note: "Great before events or special occasions."
  }
};

// ===== MODAL ELEMENTS =====
const modal = document.getElementById("serviceModal");
const modalBody = document.getElementById("modalBody");
const closeModalBtn = document.querySelector(".modal-close");
const modalOverlay = document.querySelector(".modal-overlay");

// ===== OPEN MODAL =====
document.querySelectorAll(".read-more").forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    const type = btn.dataset.service;
    const data = servicesData[type];

    if (!data) return;

    modalBody.innerHTML = `
      <div class="modal-header">
        <h2>${data.title}</h2>
        <span class="modal-badge">${data.duration}</span>
      </div>

      <p class="modal-desc">${data.desc}</p>

      <div class="modal-info">
        <div><strong>Price:</strong> ${data.price}</div>
        <div><strong>Ideal For:</strong> ${data.ideal}</div>
      </div>

      <ul class="modal-features">
        ${data.features.map(f => `<li><i class="fa-solid fa-check"></i> ${f}</li>`).join("")}
      </ul>

      <div class="modal-footer">
        <p>${data.note}</p>
      </div>
    `;

    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  });
});

// ===== CLOSE MODAL =====
function closeModal() {
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
}

closeModalBtn.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});


// ===== TESTIMONIAL SLIDER =====
const track = document.querySelector(".testimonial-track");

let index = 0;

function slideTestimonials() {
  const cards = document.querySelectorAll(".testimonial-card");
  const cardWidth = cards[0].offsetWidth + 25;

  index = (index + 1) % (cards.length - 2);

  track.style.transform = `translateX(-${index * cardWidth}px)`;
}

setInterval(slideTestimonials, 3500);


// ===== FAQ ACCORDION =====
document.querySelectorAll(".faq-item").forEach(item => {
  const btn = item.querySelector(".faq-question");
  const icon = item.querySelector(".faq-icon i");

  btn.addEventListener("click", () => {
    item.classList.toggle("active");

    icon.classList.toggle("fa-plus");
    icon.classList.toggle("fa-minus");
  });
});


// ===== CONTACT FORM =====
const contactForm = document.querySelector(".contact-form");
const toast = document.getElementById("toast");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Show toast
    toast.classList.add("show");

    // Auto hide after 3s
    setTimeout(() => {
      toast.classList.remove("show");
    }, 3000);

    contactForm.reset();
  });
}