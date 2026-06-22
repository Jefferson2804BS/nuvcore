// ============================================
// MOBILE MENU TOGGLE
// ============================================
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuToggle.addEventListener('click', () => {
  mobileMenuToggle.classList.toggle('active');
  mobileMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link-mobile').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenuToggle.classList.remove('active');
    mobileMenu.classList.remove('active');
  });
});

// ============================================
// RENDER SERVICES ACCORDION
// ============================================
function renderServices() {
  const accordion = document.getElementById('servicesAccordion');
  
  servicesData.forEach((service, index) => {
    const item = document.createElement('div');
    item.className = 'accordion-item';
    
    const header = document.createElement('div');
    header.className = `accordion-header ${index === 0 ? 'active' : ''}`;
    header.innerHTML = `
      <h3 class="accordion-title">${service.title}</h3>
      <div class="accordion-toggle">${index === 0 ? '−' : '+'}</div>
    `;
    
    const content = document.createElement('div');
    content.className = `accordion-content ${index === 0 ? 'active' : ''}`;
    content.innerHTML = `
      <div>
        <h3 class="accordion-title">${service.title}</h3>
        <p class="accordion-description">${service.description}</p>
        <div class="accordion-deliverables">
          ${service.deliverables.map(item => `
            <div class="deliverable-item">${item}</div>
          `).join('')}
        </div>
      </div>
      <div class="accordion-visual" data-number="${String(index + 1).padStart(2, '0')}">
        <div class="accordion-visual-content">
          <p class="accordion-visual-label">Serviço</p>
          <p class="accordion-visual-title">${service.title}</p>
        </div>
      </div>
    `;
    
    header.addEventListener('click', () => {
      // Close all other items
      document.querySelectorAll('.accordion-header').forEach(h => {
        if (h !== header) {
          h.classList.remove('active');
          h.nextElementSibling.classList.remove('active');
          h.querySelector('.accordion-toggle').textContent = '+';
        }
      });
      
      // Toggle current item
      header.classList.toggle('active');
      content.classList.toggle('active');
      header.querySelector('.accordion-toggle').textContent = header.classList.contains('active') ? '−' : '+';
    });
    
    item.appendChild(header);
    item.appendChild(content);
    accordion.appendChild(item);
  });
}

// ============================================
// RENDER PROCESS STEPS
// ============================================
function renderProcessSteps() {
  const container = document.getElementById('processSteps');
  
  processStepsData.forEach(step => {
    const stepEl = document.createElement('div');
    stepEl.className = 'process-step';
    stepEl.innerHTML = `
      <div class="process-step-number">${step.number}</div>
      <h3 class="process-step-title">${step.title}</h3>
      <p class="process-step-description">${step.description}</p>
    `;
    container.appendChild(stepEl);
  });
}

// ============================================
// RENDER PORTFOLIO
// ============================================
function renderPortfolio() {
  const container = document.getElementById('portfolioGrid');
  
  portfolioData.forEach(project => {
    const item = document.createElement('div');
    item.className = 'portfolio-item';
    item.innerHTML = `
      <div class="portfolio-image">${project.icon}</div>
      <div class="portfolio-content">
        <h3 class="portfolio-title">${project.title}</h3>
        <p class="portfolio-description">${project.description}</p>
      </div>
    `;
    container.appendChild(item);
  });
}

// ============================================
// RENDER METRICS WITH ANIMATION
// ============================================
function renderMetrics() {
  const container = document.getElementById('metricsGrid');
  
  metricsData.forEach((metric, idx) => {
    const item = document.createElement('div');
    item.className = 'metric-item';
    item.innerHTML = `
      <div class="metric-value">
        <span class="metric-count" data-value="${metric.value}">0</span><span class="metric-suffix">${metric.suffix}</span>
      </div>
      <p class="metric-label">${metric.label}</p>
    `;
    container.appendChild(item);
  });
  
  // Animate metrics on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.animated) {
        entry.target.dataset.animated = 'true';
        animateMetrics();
      }
    });
  }, { threshold: 0.5 });
  
  observer.observe(container);
}

function animateMetrics() {
  const counters = document.querySelectorAll('.metric-count');
  
  counters.forEach(counter => {
    const target = parseInt(counter.dataset.value);
    const increment = target / 50;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        counter.textContent = target;
        clearInterval(timer);
      } else {
        counter.textContent = Math.floor(current);
      }
    }, 30);
  });
}



// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ============================================
// INITIALIZE ALL
// ============================================
document.addEventListener('DOMContentLoaded', () => {
  renderServices();
  renderProcessSteps();
  renderPortfolio();
  renderMetrics();
});

// ============================================
// SCROLL ANIMATIONS
// ============================================
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(20px)';
  section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(section);
});
