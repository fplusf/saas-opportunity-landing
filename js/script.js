// Placeholder for future interactivity
// Currently, the landing page relies primarily on CSS for animations and interactions.
// This file can be extended to add features such as slider navigation, analytics or dynamic content loading.

document.addEventListener('DOMContentLoaded', () => {
  // Example: highlight selected pricing plan (optional demonstration)
  const pricingCards = document.querySelectorAll('.pricing-card');
  pricingCards.forEach((card) => {
    card.addEventListener('mouseenter', () => {
      card.classList.add('active');
    });
    card.addEventListener('mouseleave', () => {
      card.classList.remove('active');
    });
  });
});
