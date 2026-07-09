document.addEventListener("DOMContentLoaded", () => {
  // Intersection Observer for scroll-reveal animations
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const revealCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        // Once revealed, no need to track it anymore
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(revealCallback, observerOptions);

  // Select all sections/sheets to reveal
  const sheets = document.querySelectorAll(".sheet-section");
  sheets.forEach((sheet) => {
    sheet.classList.add("reveal-on-scroll");
    observer.observe(sheet);
  });
});
