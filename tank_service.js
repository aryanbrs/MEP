// JavaScript functionality
const services = [
  // Underground Tank Cleaning
  {
    name: "Underground Tank Cleaning (500 to 1000 Gallons)",
    price: 850,
    details:
      "Thorough cleaning of underground tanks from 500 to 1000 gallons, ensuring clean water storage.",
    reviews:
      "Alice Brown: Very detailed and efficient cleaning!<br>David Green: Professional service, very satisfied!",
    image: "images/underground-tank-1000.jpg",
    section: "Underground Tank Cleaning",
  },
  {
    name: "Underground Tank Cleaning (1500 Gallons)",
    price: 1250,
    details:
      "Thorough cleaning of underground tanks up to 1500 gallons, ensuring clean water storage.",
    reviews: "David Green: Professional service, very satisfied!",
    image: "images/underground-tank-1500.jpg",
    section: "Underground Tank Cleaning",
  },
  {
    name: "Underground Tank Cleaning (2000 Gallons)",
    price: 1500,
    details:
      "Thorough cleaning of underground tanks up to 2000 gallons, ensuring clean water storage.",
    reviews: "Emily White: Excellent cleaning service, highly recommend!",
    image: "images/underground-tank-2000.jpg",
    section: "Underground Tank Cleaning",
  },
  // Roof Tank Cleaning
  {
    name: "Roof Tank Cleaning (1000L)",
    price: 999,
    details:
      "Cleaning of roof water tanks up to 1000L capacity, includes sludge removal and sterilization.",
    reviews:
      "John Doe: Excellent service, very thorough!<br>Jane Smith: Highly professional, great job!",
    image: "images/roof-tank-1000.jpg",
    section: "Roof Tank Cleaning",
  },
  {
    name: "Roof Tank Cleaning (2000L)",
    price: 1699,
    details:
      "Cleaning of roof water tanks up to 2000L capacity, includes sludge removal and sterilization.",
    reviews:
      "John Doe: Excellent service, very thorough!<br>Jane Smith: Highly professional, great job!",
    image: "images/roof-tank-2000.jpg",
    section: "Roof Tank Cleaning",
  },
  // Outdoor Tank Cleaning
  {
    name: "Outdoor Tank Cleaning (500 Gallons)",
    price: 499,
    details:
      "Cleaning of outdoor water tanks up to 500 gallons, includes removal of debris and algae.",
    reviews: "Chris Black: Affordable and reliable cleaning service.",
    image: "images/outdoor-tank-500.jpg",
    section: "Outdoor Tank Cleaning",
  },
  {
    name: "Outdoor Tank Cleaning (800 Gallons)",
    price: 749,
    details:
      "Cleaning of outdoor water tanks up to 800 gallons, includes removal of debris and algae.",
    reviews: "Sophia Gray: Very efficient, great value for money.",
    image: "images/outdoor-tank-800.jpg",
    section: "Outdoor Tank Cleaning",
  },
  {
    name: "Outdoor Tank Cleaning (1000 Gallons)",
    price: 949,
    details:
      "Cleaning of outdoor water tanks up to 1000 gallons, includes removal of debris and algae.",
    reviews: "Lucas Blue: Great service and very professional!",
    image: "images/outdoor-tank-1000.jpg",
    section: "Outdoor Tank Cleaning",
  },
];

function loadServices() {
  const container = document.getElementById("service-container");

  const sections = [
    "Underground Tank Cleaning",
    "Roof Tank Cleaning",
    "Outdoor Tank Cleaning",
  ];

  sections.forEach((section) => {
    const sectionTitle = document.createElement("h2");
    sectionTitle.classList.add("service-section-title");
    sectionTitle.innerHTML = `${section} <span>Services</span>`; // Highlight section name with color
    container.appendChild(sectionTitle);

    services
      .filter((service) => service.section === section)
      .forEach((service) => {
        const serviceHTML = `
            <div class="service-strip">
              <div class="service-image-container">
                <img src="${service.image}" alt="${service.name}" class="service-image" />
                <button class="know-more-btn" onclick="toggleDetails(this)">
                  Know More
                </button>
              </div>
              <div class="service-info">
                <h3>${service.name}</h3>
                <p class="price">AED ${service.price}</p>
                <div class="details" style="display:none;">
                  <p>${service.details}</p>
                  <p><strong>Customer Reviews:</strong><br>${service.reviews}</p>
                </div>
                <button class="book-now-btn" onclick="redirectToContact(this)" data-service="${service.name}" data-price="${service.price}">
                  Book Now
                </button>
              </div>
            </div>
          `;
        container.innerHTML += serviceHTML;
      });
  });
}

function toggleDetails(button) {
  const details = button.closest(".service-strip").querySelector(".details");
  if (details.style.display === "none" || details.style.display === "") {
    details.style.display = "block"; // Show details
  } else {
    details.style.display = "none"; // Hide details
  }
}

function redirectToContact(button) {
  const serviceName = button.getAttribute("data-service");
  const servicePrice = button.getAttribute("data-price");

  const query = new URLSearchParams({
    service: serviceName,
    price: servicePrice,
  }).toString();

  window.location.href = `contact.html?${query}`;
}

document.addEventListener("DOMContentLoaded", loadServices);
