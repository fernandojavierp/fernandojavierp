document.addEventListener('DOMContentLoaded', () => {
  // 1. PDF / Print Action
  const btnPdf = document.getElementById('btn-pdf');
  if (btnPdf) {
    btnPdf.addEventListener('click', () => {
      window.print();
    });
  }

  // 2. Project Filtering
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      // Add active class to clicked button
      button.classList.add('active');

      const filterValue = button.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          // Add a simple entrance animation trigger
          card.style.opacity = '0';
          setTimeout(() => {
            card.style.transition = 'opacity 0.4s ease';
            card.style.opacity = '1';
          }, 50);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 3. Navigation Link Highlighting on Scroll (Intersection Observer)
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav ul li a');

  const observerOptions = {
    root: null,
    rootMargin: '-50% 0px -50% 0px', // Trigger when section occupies the center of the viewport
    threshold: 0
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const activeId = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${activeId}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    sectionObserver.observe(section);
  });

  // 4. Contact Form Handling
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const messageInput = document.getElementById('message');
      
      const name = nameInput ? nameInput.value.trim() : '';
      const email = emailInput ? emailInput.value.trim() : '';
      const message = messageInput ? messageInput.value.trim() : '';
      
      // Send message to FormSubmit AJAX endpoint
      fetch('https://formsubmit.co/ajax/fpatetegonzalez@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          Nombre: name,
          Email: email,
          Mensaje: message
        })
      })
      .then(response => {
        if (response.ok) {
          showToast(`¡Gracias, ${name}! He recibido tu mensaje correctamente.`);
          contactForm.reset();
        } else {
          showToast('Error al enviar el mensaje. Inténtalo de nuevo.');
        }
      })
      .catch(error => {
        showToast('Error de conexión. Inténtalo de nuevo.');
        console.error('Error de red:', error);
      });
    });
  }

  function showToast(message) {
    let toast = document.querySelector('.toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'toast';
      document.body.appendChild(toast);
    }
    
    // XSS Prevention: Safe text content assignment
    toast.textContent = message;
    
    // Show toast with slide-in transition
    setTimeout(() => toast.classList.add('show'), 50);
    
    // Hide toast after 4 seconds
    setTimeout(() => {
      toast.classList.remove('show');
    }, 4000);
  }
});
