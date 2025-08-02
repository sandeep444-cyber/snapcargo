document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission handling — optional only if not using FormSubmit
    // You can REMOVE this whole block if using FormSubmit
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function (e) {
            alert('Submitting form...');
            // DO NOT use e.preventDefault() if you're submitting to FormSubmit!
        });
    });

    // FAQ Toggle Functionality
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            question.classList.toggle('active');
            answer.classList.toggle('active');
        });
    });

    // Hero Resizing
    function resizeHero() {
        const hero = document.getElementById('home');
        const windowHeight = window.innerHeight;
        hero.style.height = `${Math.max(windowHeight * 0.8, 300)}px`; // minimum 300px
    }

    // Run on load and on resize
    resizeHero();
    window.addEventListener('resize', resizeHero); // ✅ FIXED
});

document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('header');
    let lastScrollPosition = 0;
    const scrollThreshold = 100; // Pixels to scroll before minimizing
    
    // Store original header height for restoration
    const originalHeight = header.offsetHeight;
    const minimizedHeight = originalHeight * 0.7; // Reduce height by 30%
    
    // Store original logo size
    const logo = document.querySelector('.logo');
    const originalLogoFontSize = window.getComputedStyle(logo).fontSize;
    const originalLogoImgHeight = document.querySelector('.logo-icon').offsetHeight;
    
    window.addEventListener('scroll', function() {
        const currentScrollPosition = window.pageYOffset;
        
        if (currentScrollPosition > scrollThreshold && currentScrollPosition > lastScrollPosition) {
            // Scrolling down - minimize header
            header.style.padding = '5px 0';
            header.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
            
            // Scale down logo
            logo.style.fontSize = 'calc(' + originalLogoFontSize + ' * 0.8)';
            document.querySelector('.logo-icon').style.height = (originalLogoImgHeight * 0.8) + 'px';
            
        } else if (currentScrollPosition < lastScrollPosition || currentScrollPosition <= scrollThreshold) {
            // Scrolling up or at top - restore header
            header.style.padding = '15px 0';
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
            
            // Restore logo size
            logo.style.fontSize = originalLogoFontSize;
            document.querySelector('.logo-icon').style.height = originalLogoImgHeight + 'px';
        }
        
        lastScrollPosition = currentScrollPosition;
    });
});