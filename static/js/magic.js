// Flower cursor effect
document.addEventListener('DOMContentLoaded', () => {
  const colors = ['#FF9933', '#FFD700', '#800000', '#FFFFFF'];
  const body = document.body;

  body.addEventListener('mousemove', (e) => {
    const flower = document.createElement('div');
    flower.className = 'flower';
    flower.style.left = `${e.clientX}px`;
    flower.style.top = `${e.clientY}px`;
    flower.style.color = colors[Math.floor(Math.random() * colors.length)];
    
    // Flower characters (unicode)
    const flowers = ['✿', '❀', '✾', '❁'];
    flower.textContent = flowers[Math.floor(Math.random() * flowers.length)];
    
    body.appendChild(flower);
    
    // Remove after animation
    setTimeout(() => {
      flower.remove();
    }, 1000);
  });
});