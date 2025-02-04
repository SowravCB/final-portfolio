// Select the modal and buttons
const openModal = document.getElementById("openModal");
const closeModal = document.getElementById("closeModal");
const modal = document.getElementById("myModal");
const navbar = document.getElementById("navbar");
const overlay = document.getElementById("overlay");
const socialicons = document.getElementById("social-icons");
const downarrowline = document.getElementById("down-arrow-line");
const downArrow = document.getElementById("down-arrow");
const latestWorks = document.getElementById("latest-works-link");
const workSection = document.getElementById("work-section");
const mainSection = document.getElementById("main-section");
const body = document.body;

openModal.addEventListener("click", () => {
  modal.classList.remove("hidden");
  openModal.classList.add("active");
  openModal.classList.add("animate-[modalOpen_0.3s_ease-out]");
  overlay.classList.remove("hidden");
  navbar.classList.add("hidden");
  socialicons.classList.add("hidden");
  body.classList.add("overflow-hidden"); // Show the modal
  disableScroll(body);
});

// Add event listener to close the modal
closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
  openModal.classList.remove("active");
  overlay.classList.add("hidden");
  navbar.classList.remove("hidden");
  socialicons.classList.remove("hidden");
  body.classList.remove("overflow-hidden"); // Hide the modal
  enableScroll(body);
});

// Optional: Close modal when clicking outside the content
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal.classList.remove("active");
  }
});

latestWorks.addEventListener("click", (e) => {
  scrollTo(0, mainSection.clientHeight);
});

downArrow.addEventListener("click", (e) => {
  scrollTo(0, mainSection.clientHeight);
});

workSection.addEventListener("click", (e) => {
  scrollTo(0, mainSection.clientHeight);
});
