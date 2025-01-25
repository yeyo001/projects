  // Animación al hacer scroll (fade in)
  const elements = document.querySelectorAll('.animate-on-scroll');
  window.addEventListener('scroll', () => {
    elements.forEach(element => {
      if (element.getBoundingClientRect().top <= window.innerHeight) {
        element.classList.add('fade-in');
      }
    });
  });

  // Hover Animation para los planes de precios
  const pricingPlans = document.querySelectorAll('.plan');
  pricingPlans.forEach(plan => {
    plan.addEventListener('mouseenter', () => {
      plan.classList.add('scale-up');
    });
    plan.addEventListener('mouseleave', () => {
      plan.classList.remove('scale-up');
    });
  });
