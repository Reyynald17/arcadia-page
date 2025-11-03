document.addEventListener('DOMContentLoaded', () => {
    const REGISTRATION_URL = 'https://chat.whatsapp.com/IPkmFZ61OCoHm68EIUVNcV?mode=wwt'; 
    const HUB_URL = 'https://reyynald17.github.io/arcadia-hub/'; 

    const navLinks = document.querySelectorAll('.main-nav a, .secondary-cta-btn');
    const joinCta = document.querySelector('.cta-button');
    const registerCta = document.querySelector('.main-cta-btn');
    const hubCta = document.querySelector('.cta-hub');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
           
            if (this.classList.contains('cta-button') || this.classList.contains('main-cta-btn') || this.classList.contains('cta-hub')) {
                return;
            }

            e.preventDefault();

            let targetId = '';
            if (this.textContent.includes('Home')) {
                targetId = '.hero-section';
            } else if (this.textContent.includes('Lore')) {
                targetId = '.lore-section';
            } else if (this.textContent.includes('Peta')) {
                targetId = '.map-section';
            }

            if (targetId) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    if (joinCta) {
        joinCta.addEventListener('click', () => {
            window.open(REGISTRATION_URL, '_blank');
        });
    }

    if (registerCta) {
        registerCta.addEventListener('click', () => {
            window.open(REGISTRATION_URL, '_blank');
        });
    }


    if (hubCta) {
        hubCta.addEventListener('click', (e) => {
            e.preventDefault(); 
            window.open(HUB_URL, '_blank');
        });
    }
    
    const revealElements = document.querySelectorAll('.scroll-reveal');

    function handleScroll() {
        const windowHeight = window.innerHeight;
        
        revealElements.forEach(el => {
            const elTop = el.getBoundingClientRect().top;
            const revealPoint = 150;

            if (elTop < windowHeight - revealPoint) {
                el.classList.add('visible');
            } else {
                el.classList.remove('visible');
            }
        });
    }

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    const splashScreen = document.getElementById('splash-screen');

    window.addEventListener('load', () => {
        setTimeout(() => {
            if (splashScreen) {
                splashScreen.classList.add('hidden');
            }
        }, 1500);
    });

    setTimeout(() => {
        if (splashScreen && !splashScreen.classList.contains('hidden')) {
            splashScreen.classList.add('hidden');
        }
    }, 4000);
});