// Internationalization (i18n) Setup
const translations = {
    es: {
        // Navigation
        'nav.home': 'Inicio',
        'nav.argentina': 'Argentina',
        'nav.services': 'Servicios',
        'nav.contact': 'Contacto',
        
        // Hero Section
        'hero.title1': 'Convierte tu pasión en',
        'hero.title2': 'profesión',
        'hero.subtitle': 'Llevamos jóvenes talentos a las mejores academias de tenis de Argentina. Todo incluido para que te enfoques solo en tu desarrollo profesional.',
        'hero.stats.players': 'Jugadores',
        'hero.stats.years': 'Años',
        'hero.stats.success': 'Éxito',
        'hero.button': 'Programa Argentina',
        
        // Argentina Section
        'argentina.title': 'Programa Argentina - Blengino Academy',
        'argentina.subtitle': 'Entrenamiento profesional en la Academia Blengino con preparación física en SportsLab',
        
        // Programs
        'programs.2weeks.title': '2 Semanas',
        'programs.2weeks.subtitle': 'Programa Intensivo',
        'programs.1month.title': '1 Mes',
        'programs.1month.subtitle': 'Programa Premium',
        'programs.2months.title': '2 Meses',
        'programs.2months.subtitle': 'Programa Elite',
        'programs.price': 'Consultar',
        'programs.moreInfo': 'Más Información',
        
        // Program Features
        'programs.features.tennis': 'Entrenamiento de tenis en Blengino Academy',
        'programs.features.physical': 'Entrenamiento físico en SportsLab',
        'programs.features.accommodation': 'Alojamiento en Palermo/Núñez',
        'programs.features.coaching': 'Coaching de tiempo completo',
        'programs.features.tournaments': 'Preparación para torneos',
        'programs.features.strategy': 'Sesiones de estrategia personalizadas',
        'programs.features.logistics': 'Logística (transfers del aeropuerto)',
        'programs.features.meals': 'Comidas incluidas',
        'programs.features.nutritionist': 'Nutricionista',
        'programs.features.hours55': 'Programa integral de 55 horas',
        'programs.features.hours110': 'Programa integral de 110 horas',
        'programs.features.hours220': 'Programa integral de 220 horas',
        
        // Partners
        'partners.title': 'Nuestros Socios Estratégicos',
        'partners.subtitle': 'Trabajamos con las mejores instituciones para garantizar tu desarrollo profesional',
        'partners.blengino.title': 'Blengino Tennis Academy',
        'partners.blengino.description1': 'Blengino Tennis es reconocida como una de las academias de tenis más prestigiosas de Argentina. Con una trayectoria marcada por la excelencia, la academia ha sido el lugar de entrenamiento de numerosos jugadores profesionales que alcanzaron el circuito ATP y WTA.',
        'partners.blengino.description2': 'Entre sus filas pasaron talentos de la talla de Guido Pella, Camilo Ugo Carabelli, Hugo Dellien, Tomás Etcheverry, y varios jugadores que llegaron a estar al mejor nivel del mundo, consolidando a la academia como un verdadero semillero de alto rendimiento.',
        'partners.blengino.features.atp': 'Circuito ATP/WTA',
        'partners.blengino.features.performance': 'Alto Rendimiento',
        'partners.blengino.features.excellence': 'Excelencia',
        'partners.sportslab.title': 'SportsLab',
        'partners.sportslab.description1': 'SportsLab se ha consolidado como la academia de preparación física más avanzada de Argentina, reconocida por su excelencia en entrenamiento deportivo de alto rendimiento. Con la última tecnología y metodologías de vanguardia, ofrece un enfoque integral que potencia la fuerza, resistencia, agilidad y recuperación de los jugadores.',
        'partners.sportslab.description2': 'Muchos de los Top 100 del mundo que viven en Argentina confían en SportsLab para mantenerse en su mejor nivel competitivo. Entre ellos se encuentran Sebastián Báez, Francisco Cerúndolo, Hugo Dellien, Juan Manuel Cerúndolo, Diego Schwartzman, Cristian Garin y Juan Martín del Potro, consolidando su reputación como el centro de preparación física líder del país.',
        'partners.sportslab.features.physical': 'Preparación Física',
        'partners.sportslab.features.analysis': 'Análisis Científico',
        'partners.sportslab.features.injury': 'Prevención de Lesiones',
        
        // Services
        'services.title': 'Nuestros Servicios',
        'services.subtitle': 'Todo lo que necesitas para convertirte en profesional',
        'services.training.title': 'Entrenamiento Intensivo Profesional',
        'services.training.description': 'Programas de entrenamiento de tenis y físico diseñados específicamente para el desarrollo profesional.',
        'services.evaluation.title': 'Evaluaciones Físicas',
        'services.evaluation.description': 'Evaluaciones médicas y físicas regulares para optimizar el rendimiento y prevenir lesiones.',
        'services.mentoring.title': 'Asesoramiento Personal',
        'services.mentoring.description': 'Un mentor personal te acompañará durante todo el proceso de desarrollo.',
        'services.progress.title': 'Seguimiento de Progreso',
        'services.progress.description': 'Reportes regulares del avance deportivo y académico de tu hijo.',
        'services.support.title': 'Soporte 24/7',
        'services.support.description': 'Asistencia completa durante toda la estadía en el extranjero.',
        
        // Contact
        'contact.title': '¿Listo para comenzar tu carrera profesional?',
        'contact.subtitle': 'Contáctanos para más información sobre nuestros programas y cómo podemos ayudarte a alcanzar tus metas.',
        
        // Form
        'form.name': 'Nombre completo',
        'form.email': 'Email',
        'form.phone': 'Teléfono',
        'form.startDate': 'Fecha de inicio deseada',
        'form.age': 'Edad',
        'form.experience': 'Años de experiencia en tenis',
        'form.nationality': 'Nacionalidad',
        'form.selectProgram': 'Selecciona un programa',
        'form.programs.2weeks': '2 Semanas - Programa Intensivo',
        'form.programs.1month': '1 Mes - Programa Premium',
        'form.programs.2months': '2 Meses - Programa Elite',
        'form.admission': 'Cuéntanos sobre tu proceso de admisión y objetivos deportivos',
        'form.submit': 'Solicitar Programa',
        
        // Footer
        'footer.rights': 'Todos los derechos reservados.'
    },
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.argentina': 'Argentina',
        'nav.services': 'Services',
        'nav.contact': 'Contact',
        
        // Hero Section
        'hero.title1': 'Turn your passion into',
        'hero.title2': 'profession',
        'hero.subtitle': 'We take young talents to the best tennis academies in Argentina. Everything included so you can focus only on your professional development.',
        'hero.stats.players': 'Players',
        'hero.stats.years': 'Years',
        'hero.stats.success': 'Success',
        'hero.button': 'Argentina Program',
        
        // Argentina Section
        'argentina.title': 'Argentina Program - Blengino Academy',
        'argentina.subtitle': 'Professional training at Blengino Academy with physical preparation at SportsLab',
        
        // Programs
        'programs.2weeks.title': '2 Weeks',
        'programs.2weeks.subtitle': 'Intensive Program',
        'programs.1month.title': '1 Month',
        'programs.1month.subtitle': 'Premium Program',
        'programs.2months.title': '2 Months',
        'programs.2months.subtitle': 'Elite Program',
        'programs.price': 'Inquire',
        'programs.moreInfo': 'More Information',
        
        // Program Features
        'programs.features.tennis': 'Tennis training at Blengino Academy',
        'programs.features.physical': 'Physical training at SportsLab',
        'programs.features.accommodation': 'Accommodation in Palermo/Núñez',
        'programs.features.coaching': 'Full-time coaching',
        'programs.features.tournaments': 'Tournament preparation',
        'programs.features.strategy': 'Personalized strategy sessions',
        'programs.features.logistics': 'Logistics (airport transfers)',
        'programs.features.meals': 'Meals included',
        'programs.features.nutritionist': 'Nutritionist',
        'programs.features.hours55': 'Comprehensive 55-hour program',
        'programs.features.hours110': 'Comprehensive 110-hour program',
        'programs.features.hours220': 'Comprehensive 220-hour program',
        
        // Partners
        'partners.title': 'Our Strategic Partners',
        'partners.subtitle': 'We work with the best institutions to guarantee your professional development',
        'partners.blengino.title': 'Blengino Tennis Academy',
        'partners.blengino.description1': 'Blengino Tennis is recognized as one of the most prestigious tennis academies in Argentina. With a track record marked by excellence, the academy has been the training ground for numerous professional players who reached the ATP and WTA circuits.',
        'partners.blengino.description2': 'Among its ranks have passed talents such as Guido Pella, Camilo Ugo Carabelli, Hugo Dellien, Tomás Etcheverry, and several players who reached the best level in the world, consolidating the academy as a true high-performance breeding ground.',
        'partners.blengino.features.atp': 'ATP/WTA Circuit',
        'partners.blengino.features.performance': 'High Performance',
        'partners.blengino.features.excellence': 'Excellence',
        'partners.sportslab.title': 'SportsLab',
        'partners.sportslab.description1': 'SportsLab has established itself as the most advanced physical preparation academy in Argentina, recognized for its excellence in high-performance sports training. With the latest technology and cutting-edge methodologies, it offers a comprehensive approach that enhances strength, endurance, agility and player recovery.',
        'partners.sportslab.description2': 'Many of the world\'s Top 100 who live in Argentina trust SportsLab to stay at their best competitive level. Among them are Sebastián Báez, Francisco Cerúndolo, Hugo Dellien, Juan Manuel Cerúndolo, Diego Schwartzman, Cristian Garin and Juan Martín del Potro, consolidating its reputation as the country\'s leading physical preparation center.',
        'partners.sportslab.features.physical': 'Physical Preparation',
        'partners.sportslab.features.analysis': 'Scientific Analysis',
        'partners.sportslab.features.injury': 'Injury Prevention',
        
        // Services
        'services.title': 'Our Services',
        'services.subtitle': 'Everything you need to become a professional',
        'services.training.title': 'Intensive Professional Training',
        'services.training.description': 'Tennis and physical training programs specifically designed for professional development.',
        'services.evaluation.title': 'Physical Evaluations',
        'services.evaluation.description': 'Regular medical and physical evaluations to optimize performance and prevent injuries.',
        'services.mentoring.title': 'Personal Mentoring',
        'services.mentoring.description': 'A personal mentor will accompany you throughout the development process.',
        'services.progress.title': 'Progress Tracking',
        'services.progress.description': 'Regular reports on your child\'s sports and academic progress.',
        'services.support.title': '24/7 Support',
        'services.support.description': 'Complete assistance throughout your stay abroad.',
        
        // Contact
        'contact.title': 'Ready to start your professional career?',
        'contact.subtitle': 'Contact us for more information about our programs and how we can help you achieve your goals.',
        
        // Form
        'form.name': 'Full name',
        'form.email': 'Email',
        'form.phone': 'Phone',
        'form.startDate': 'Desired start date',
        'form.age': 'Age',
        'form.experience': 'Years of tennis experience',
        'form.nationality': 'Nationality',
        'form.selectProgram': 'Select a program',
        'form.programs.2weeks': '2 Weeks - Intensive Program',
        'form.programs.1month': '1 Month - Premium Program',
        'form.programs.2months': '2 Months - Elite Program',
        'form.admission': 'Tell us about your admission process and sports goals',
        'form.submit': 'Apply for Program',
        
        // Footer
        'footer.rights': 'All rights reserved.'
    }
};

let currentLanguage = 'es';

// Translation function
function translate(key) {
    return translations[currentLanguage][key] || key;
}

// Update page content with translations
function updateContent() {
    // Update elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        element.textContent = translate(key);
    });
    
    // Update elements with data-translate-placeholder attribute
    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
        const key = element.getAttribute('data-translate-placeholder');
        element.placeholder = translate(key);
    });
    
    // Update HTML lang attribute
    document.documentElement.lang = currentLanguage;
}

// Language switching function
function switchLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('preferredLanguage', lang);
    updateContent();
    
    // Update language selector buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-lang="${lang}"]`).classList.add('active');
}

// Initialize language from localStorage or default to Spanish
function initializeLanguage() {
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'es';
    switchLanguage(savedLanguage);
}

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (navToggle && mobileMenu) {
        navToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            navToggle.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        document.querySelectorAll('.mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                // Add closing animation
                mobileMenu.style.transform = 'translateX(-100%)';
                navToggle.classList.remove('active');
                
                setTimeout(() => {
                    mobileMenu.classList.remove('active');
                    mobileMenu.style.transform = '';
                }, 300);
            });
        });
    } else {
        console.log('Nav elements not found:', { navToggle, mobileMenu });
    }
});

// Language selector event listeners
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const lang = btn.getAttribute('data-lang');
        switchLanguage(lang);
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Enhanced navbar scroll animation
let lastScrollTop = 0;
let ticking = false;
const header = document.querySelector('.header');

function updateNavbar() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollThreshold = 100;
    const mobileMenu = document.querySelector('.mobile-menu');
    const navToggle = document.querySelector('.nav-toggle');
    
    if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
        // Scrolling down - hide navbar
        header.classList.add('scrolled');
        header.style.transform = 'translateY(-100%)';
        
        // Close mobile menu if open
        if (mobileMenu && mobileMenu.classList.contains('active')) {
            mobileMenu.style.transform = 'translateX(-100%)';
            navToggle.classList.remove('active');
            
            setTimeout(() => {
                mobileMenu.classList.remove('active');
                mobileMenu.style.transform = '';
            }, 300);
        }
    } else {
        // Scrolling up - show navbar
        header.classList.remove('scrolled');
        header.style.transform = 'translateY(0)';
    }
    
    // Add background when scrolled
    if (scrollTop > 50) {
        header.classList.add('scrolled-bg');
    } else {
        header.classList.remove('scrolled-bg');
    }
    
    lastScrollTop = scrollTop;
    ticking = false;
}

function requestTick() {
    if (!ticking) {
        requestAnimationFrame(updateNavbar);
        ticking = true;
    }
}

window.addEventListener('scroll', requestTick, { passive: true });

// Form submission with Formspree
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.horizontal-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Get form data for validation
            const name = this.querySelector('input[name="nombre"]').value;
            const email = this.querySelector('input[name="email"]').value;
            const phone = this.querySelector('input[name="telefono"]').value;
            const startDate = this.querySelector('input[name="fecha_inicio"]').value;
            const age = this.querySelector('input[name="edad"]').value;
            const experience = this.querySelector('input[name="experiencia"]').value;
            const nationality = this.querySelector('input[name="nacionalidad"]').value;
            const program = this.querySelector('select[name="programa"]').value;
            
            // Simple validation
            if (!name || !email || !phone || !startDate || !age || !experience || !nationality || !program) {
                e.preventDefault();
                const message = currentLanguage === 'es' 
                    ? 'Por favor, completa todos los campos obligatorios.'
                    : 'Please fill in all required fields.';
                alert(message);
                return;
            }
            
            // Show loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            const sendingText = currentLanguage === 'es' 
                ? '<i class="fas fa-spinner fa-spin"></i> <span>Enviando...</span>' 
                : '<i class="fas fa-spinner fa-spin"></i> <span>Sending...</span>';
            submitBtn.innerHTML = sendingText;
            submitBtn.disabled = true;
            
            // Reset button after form submission (Formspree will handle the actual submission)
            setTimeout(() => {
                const successMessage = currentLanguage === 'es' 
                    ? '¡Gracias por tu solicitud! Revisaremos tu aplicación y nos pondremos en contacto contigo pronto para el proceso de admisión.'
                    : 'Thank you for your application! We will review your application and contact you soon for the admission process.';
                
                // Show success message
                alert(successMessage);
                
                // Reset form
                this.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }, 1000);
        });
    }
});

// Intersection Observer for animations
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

// Counter animation function
function animateCounter(element, target, duration = 2000, suffix = '+') {
    let start = 0;
    const increment = target / (duration / 16);
    
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + suffix;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start) + suffix;
        }
    }, 16);
}

// Stats animation observer
const statsObserverOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
};

const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statNumber = entry.target.querySelector('.stat-number');
            const statLabel = entry.target.querySelector('.stat-label');
            
            // Add animation classes
            statNumber.classList.add('animate');
            statLabel.classList.add('animate');
            
            // Start counter animation
            const text = statNumber.textContent;
            const number = parseInt(text.replace(/\D/g, ''));
            const suffix = text.includes('%') ? '%' : '+';
            
            if (number) {
                statNumber.textContent = '0' + suffix;
                setTimeout(() => {
                    animateCounter(statNumber, number, 2000, suffix);
                }, 300);
            }
            
            // Stop observing this element
            statsObserver.unobserve(entry.target);
        }
    });
}, statsObserverOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.program-card, .service-card, .program-details');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Observe stats elements for counter animation
    const statsElements = document.querySelectorAll('.stat');
    statsElements.forEach(el => {
        statsObserver.observe(el);
    });
});

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    initializeLanguage();
});
