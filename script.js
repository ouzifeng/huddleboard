// Mobile navigation toggle
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Toggle hamburger to X
            const icon = navToggle.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
        
        // Close menu when clicking on links
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const icon = navToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            });
        });
    }
    
    // Form validation for signup
    const signupForm = document.querySelector('form[action="#"]');
    const passwordField = document.getElementById('password');
    const confirmPasswordField = document.getElementById('confirmPassword');
    
    if (signupForm && passwordField && confirmPasswordField) {
        signupForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Check password match
            if (passwordField.value !== confirmPasswordField.value) {
                alert('Passwords do not match!');
                confirmPasswordField.focus();
                return;
            }
            
            // Check password strength
            if (passwordField.value.length < 8) {
                alert('Password must be at least 8 characters long!');
                passwordField.focus();
                return;
            }
            
            // If validation passes, show success message
            alert('Account created successfully! (This is a demo - no actual account was created)');
        });
        
        // Real-time password confirmation
        confirmPasswordField.addEventListener('input', function() {
            if (passwordField.value && confirmPasswordField.value) {
                if (passwordField.value === confirmPasswordField.value) {
                    confirmPasswordField.style.borderColor = '#10b981';
                } else {
                    confirmPasswordField.style.borderColor = '#ef4444';
                }
            } else {
                confirmPasswordField.style.borderColor = '#e5e7eb';
            }
        });
    }
    
    // Login form handling
    const loginForm = document.querySelector('form[action="#"]');
    if (loginForm && !signupForm) { // Only if it's the login form
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Login successful! (This is a demo - no actual authentication)');
        });
    }
    
    // Contact form handling
    const contactForm = document.querySelector('form[method="POST"]');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Message sent successfully! (This is a demo - no actual message was sent)');
        });
    }
    
    // Smooth scrolling for anchor links
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
    
    // Add fade-in animation on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements that should fade in
    document.querySelectorAll('.feature-card, .pricing-card, .team-card, .screenshot-item').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Add hover effects for social login buttons
    const socialButtons = document.querySelectorAll('button[type="button"]');
    socialButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.borderColor = '#2563eb';
            this.style.transform = 'translateY(-1px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.borderColor = '#e2e8f0';
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Navbar scroll effect
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            navbar.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
        
        // Add shadow on scroll
        if (scrollTop > 0) {
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        }
    });
});

// Add mobile styles for navigation
const style = document.createElement('style');
style.textContent = `
    @media (max-width: 768px) {
        .nav-menu {
            position: fixed;
            top: 70px;
            left: -100%;
            width: 100%;
            height: calc(100vh - 70px);
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(10px);
            flex-direction: column;
            justify-content: flex-start;
            align-items: center;
            padding-top: 50px;
            transition: left 0.3s ease;
            gap: 20px;
        }
        
        .nav-menu.active {
            left: 0;
        }
        
        .nav-menu li {
            margin: 0;
        }
        
        .nav-link {
            font-size: 18px;
            padding: 15px 20px;
        }
    }
`;
document.head.appendChild(style); 