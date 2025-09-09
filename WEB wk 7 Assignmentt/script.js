// Utility function: Toggle class on an element
function toggleClass(el, className) {
  el.classList.toggle(className);
  return el.classList.contains(className); // return whether it's active
}

// Utility function: Add class
function addClass(el, className) {
  el.classList.add(className);
  return true;
}

// Utility function: Remove class
function removeClass(el, className) {
  el.classList.remove(className);
  return true;
}

/* === Box Animation === */
const box = document.getElementById("box");
document.getElementById("animateBoxBtn").addEventListener("click", () => {
  toggleClass(box, "animate");
});

/* === Card Flip === */
const card = document.getElementById("flipCard");
document.getElementById("flipBtn").addEventListener("click", () => {
  toggleClass(card, "flipped");
});

/* === Loader Animation === */
const loader = document.getElementById("loader");
document.getElementById("startLoadingBtn").addEventListener("click", () => {
  addClass(loader, "active");
});
document.getElementById("stopLoadingBtn").addEventListener("click", () => {
  removeClass(loader, "active");
});

/* === Modal Animation === */
const modal = document.getElementById("modal");
document.getElementById("openModalBtn").addEventListener("click", () => {
  addClass(modal, "show");
});
document.getElementById("closeModalBtn").addEventListener("click", () => {
  removeClass(modal, "show");
});
// Close modal when clicking outside content
window.addEventListener("click", (e) => {
  if (e.target === modal) removeClass(modal, "show");
});
