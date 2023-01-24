const openModal = document.getElementById("[data-open-modal]");
const closeModal = document.getElementById("[data-close-modal]");
const modal = document.getElementById("[data-modal-new]");

openModal.addEventListener("click", () => {
    modal.classList.remove("display-none");
});

closeModal.addEventListener("click", () => {
    modal.classList.add("display-none");
});