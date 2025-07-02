window.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("netflix-intro");

  if (audio) {
    // Try playing audio (some browsers block autoplay)
    audio.play().catch((err) => {
      console.warn("Autoplay blocked", err);
    });
  }

  setTimeout(() => {
    const intro = document.querySelector(".intro-screen");
    const profile = document.querySelector(".profile-select");

    intro?.classList.add("hidden");
    profile?.classList.add("visible");
  }, 3000); // Adjust duration here if needed
});


