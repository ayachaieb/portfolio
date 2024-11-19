document.addEventListener("DOMContentLoaded", () => {
  const projectsCarousel = document.getElementById("projects-carousel");
  const dotsContainer = document.getElementById("projects-dots");

  const carouselItems = projectsCarousel.querySelectorAll(".carousel-item");
  const itemsCount = carouselItems.length;
  const itemWidth = projectsCarousel.offsetWidth; // The width of one visible item
  let currentIndex = 0;

  // Create dots dynamically based on the number of items
  for (let i = 0; i < 3; i++) {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if (i === 0) dot.classList.add("active");
    dot.dataset.index = i;
    dotsContainer.appendChild(dot);

    // Add click event to dots
    dot.addEventListener("click", () => {
      currentIndex = i;
      updateCarouselPosition();
    });
  }

  function updateCarouselPosition() {
    // Slide carousel to the selected item
    projectsCarousel.style.transform = `translateX(-${currentIndex * itemWidth}px)`;

    // Update active dot
    dotsContainer.querySelectorAll(".dot").forEach((dot) => {
      dot.classList.remove("active");
    });
    dotsContainer.querySelector(`[data-index="${currentIndex}"]`).classList.add("active");
  }
});
