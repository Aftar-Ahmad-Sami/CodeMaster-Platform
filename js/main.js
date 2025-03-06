// js/main.js
document.addEventListener('DOMContentLoaded', () => {
    // Hamburger menu toggle (for all pages)
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Contact page specific features
    if (document.querySelector('.contact-hero')) {
        // Form submission
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const submitBtn = contactForm.querySelector('.submit-btn');
                submitBtn.innerHTML = 'Sending... <i class="fas fa-spinner fa-spin"></i>';
                submitBtn.disabled = true;

                setTimeout(() => {
                    alert('Thank you for your message! We\'ll get back to you soon.');
                    contactForm.reset();
                    submitBtn.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
                    submitBtn.disabled = false;
                }, 1000);
            });
        }

        // Scroll animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.contact-form, .contact-info').forEach(element => {
            observer.observe(element);
        });
    }

    // Resources page specific features
    if (document.querySelector('.resources-hero')) {
        const searchInput = document.querySelector('.search-bar input');
        const resourceCards = document.querySelectorAll('.resource-card');

        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                const searchTerm = e.target.value.toLowerCase();
                resourceCards.forEach(card => {
                    const title = card.querySelector('h3').textContent.toLowerCase();
                    const description = card.querySelector('p').textContent.toLowerCase();
                    if (title.includes(searchTerm) || description.includes(searchTerm)) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        }

        const faqItems = document.querySelectorAll('.faq-item');
        faqItems.forEach(item => {
            item.addEventListener('click', () => {
                item.classList.toggle('active');
            });
        });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, { threshold: 0.1 });

        resourceCards.forEach(card => observer.observe(card));
        faqItems.forEach(item => observer.observe(item));
    }

    // About page specific features
    if (document.querySelector('.about-hero')) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.team-member').forEach(member => {
            observer.observe(member);
        });

        const teamButton = document.querySelector('.team-button');
        if (teamButton) {
            teamButton.addEventListener('mouseover', () => {
                teamButton.style.transform = 'scale(1.05)';
            });
            teamButton.addEventListener('mouseout', () => {
                teamButton.style.transform = 'scale(1)';
            });
        }
    }

    // Index page specific features
    if (document.querySelector('.hero')) {
        const progressBars = document.querySelectorAll('.progress-bar');
        progressBars.forEach(bar => {
            const progress = bar.getAttribute('data-progress');
            setTimeout(() => {
                bar.style.width = progress;
            }, 500);
        });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.feature-card').forEach(card => {
            observer.observe(card);
        });

        const ctaButton = document.querySelector('.cta-button');
        if (ctaButton) {
            ctaButton.addEventListener('mouseover', () => {
                ctaButton.style.transform = 'scale(1.05)';
            });
            ctaButton.addEventListener('mouseout', () => {
                ctaButton.style.transform = 'scale(1)';
            });
        }
    }

    // Course page specific features
    const courseSearchInput = document.querySelector('.course-search input');
    const courseCards = document.querySelectorAll('.course-card');

    if (courseSearchInput && courseCards) {
        courseSearchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            courseCards.forEach(card => {
                const title = card.querySelector('h2').textContent.toLowerCase();
                const description = card.querySelector('p').textContent.toLowerCase();
                if (title.includes(searchTerm) || description.includes(searchTerm)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }

    const enrollButtons = document.querySelectorAll('.enroll-button');
    enrollButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const courseName = button.parentElement.querySelector('h2').textContent;
            button.classList.add('enrolled');
            button.textContent = 'Enrolled!';
            setTimeout(() => {
                alert(`Thank you for enrolling in ${courseName}!`);
                button.classList.remove('enrolled');
                button.textContent = 'Enroll Now';
            }, 1000);
        });
    });
});