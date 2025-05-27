/* =====================
   Puja & Festive Hub - Main JS
   Handles all index page functionality
   ===================== */

// Debug check
console.log("Puja & Festive Hub JS loaded");

document.addEventListener("DOMContentLoaded", function () {
    // ===== Hero Slider =====
    const initSlider = () => {
        const slides = document.querySelectorAll(".slider .slide");
        let currentSlide = 0;
        
        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.toggle("active", i === index);
            });
        }
        
        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }
        
        // Initial setup
        showSlide(0);
        setInterval(nextSlide, 5000);
    };

    // ===== Cart Functionality =====
    const setupCartButtons = () => {
        document.querySelectorAll("#products button").forEach(button => {
            button.addEventListener("click", function () {
                const productName = this.parentElement.querySelector("h4").textContent;
                alert(`${productName} added to cart!`);
                // Future: Add actual cart logic here
            });
        });
    };

    // ===== Mobile Menu =====
    const initMobileMenu = () => {
        const menuButton = document.getElementById("mobile-menu-button");
        if (menuButton) {
            menuButton.addEventListener("click", () => {
                document.querySelector("nav ul").classList.toggle("active");
            });
        }
    };

    // Initialize all functionality
    initSlider();
    setupCartButtons();
    initMobileMenu();
});

// Fetch and display buckets
async function loadBuckets() {
  const response = await fetch('/static/data/buckets.json');
  const buckets = await response.json();
  
  const container = document.getElementById('bucket-container');
  buckets.forEach(bucket => {
    container.innerHTML += `
      <div class="bg-white rounded-lg shadow-md overflow-hidden">
        <img src="${bucket.image}" alt="${bucket.name}" class="w-full h-48 object-cover">
        <div class="p-4">
          <h3 class="text-xl font-bold">${bucket.name}</h3>
          <button onclick="viewBucket('${bucket.id}')" 
                  class="bg-saffron text-white px-4 py-2 mt-3 rounded">
            Explore
          </button>
        </div>
      </div>
    `;
  });
}

// Call on catalog page load
if (document.getElementById('bucket-container')) {
  loadBuckets();
}