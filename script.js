// Simple JS animation enhancement
document.addEventListener("DOMContentLoaded", () => {
    const card = document.querySelector(".letter-card");
    card.style.opacity = "0";

    setTimeout(() => {
        card.style.opacity = "1";
    }, 200);
});