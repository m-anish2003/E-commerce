// catalog.js - Handles all festive bucket catalog functionality

function viewBucket(bucketId) {
  window.location.href = `/bucket/${bucketId}`;
}

async function loadBucketDetails() {
  const bucketId = window.location.pathname.split('/').pop();
  try {
    const response = await fetch('/static/data/buckets.json');
    const buckets = await response.json();
    const bucket = buckets.find(b => b.id === bucketId);

    if (bucket) {
      document.getElementById('bucket-name').textContent = bucket.name;
      
      bucket.items.forEach(item => {
        document.getElementById('items-container').innerHTML += `
          <div class="item-card bg-white p-4 rounded-lg shadow flex justify-between items-center mb-4">
            <div>
              <h3 class="font-bold text-lg">${item.name}</h3>
              <p class="text-maroon">₹${item.price}</p>
            </div>
            <div class="flex items-center gap-2">
              <button class="qty-btn minus px-3 py-1 bg-gray-200 rounded">-</button>
              <span class="quantity">${item.qty}</span>
              <button class="qty-btn plus px-3 py-1 bg-gray-200 rounded">+</button>
            </div>
          </div>
        `;
      });
    }
  } catch (error) {
    console.error("Error loading bucket:", error);
  }
}

// Initialize on page load
if (document.getElementById('items-container')) {
  loadBucketDetails();
}

// Auto-rotate bucket showcase
let currentSlide = 0;
const slides = document.querySelectorAll('.bucket-slider .slide');

function rotateBucket() {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === currentSlide);
    slide.style.transform = `rotateY(${(i - currentSlide) * 90}deg)`;
  });
  currentSlide = (currentSlide + 1) % slides.length;
}

setInterval(rotateBucket, 5000);