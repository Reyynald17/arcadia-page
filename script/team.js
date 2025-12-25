const devData = {
    "Fari": {
        pfp: "style/assets/fari-pfp.png",
        bio: "Owner & Developer dengan fokus pada sistem backend dan integrasi logika Roleplay.",
        skills: ["Web Development", "Game Logic Design", "Server Management"],
        projects: ["Arcadia Core Engine", "Automated Calculation System"]
    },
    "Josef Schlau": {
        pfp: "style/assets/josef-pfp.png",
        bio: "Spesialis operasional yang memastikan seluruh infrastruktur berjalan tanpa hambatan.",
        skills: ["Operations Management", "Policy Making", "Crisis Handling"],
        projects: ["Operational Guidelines v2", "Staff Training Program"]
    },
    "Yata_the_Torena": {
        pfp: "style/assets/yata-pfp.png",
        bio: "Pakar keamanan informasi yang berfokus pada intelijen sumber terbuka.",
        skills: ["OSINT", "Information Security", "Strategic Analysis"],
        projects: ["Intel Intelligence Framework", "Security Audit 2025"]
    }
};

const modal = document.getElementById('portfolio-modal');
const modalBody = document.getElementById('modal-body');
const closeModal = document.querySelector('.close-modal');

window.addEventListener('load', () => {
    const splash = document.getElementById('splash-screen');
    setTimeout(() => { splash.classList.add('hidden'); }, 1000);
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('visible'); }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));

document.querySelectorAll('.dev-card').forEach(card => {
    card.addEventListener('click', () => {
        const name = card.querySelector('.dev-name').innerText;
        const data = devData[name];
        
        if (data) {
            modalBody.innerHTML = `
                <div class="portfolio-header">
                    <div class="modal-pfp-container">
                        <img src="${data.pfp}" alt="${name}" class="modal-pfp">
                    </div>
                    <h2 class="dev-name">${name}</h2>
                    <p style="color: var(--color-cta-main); letter-spacing: 2px;">${card.querySelector('.dev-id').innerText}</p>
                </div>
                <div class="portfolio-content" style="text-align: left;">
                    <p style="margin-bottom: 25px; line-height: 1.8; color: #ccc;">${data.bio}</p>
                    <div class="portfolio-grid-modal">
                        <div>
                            <h4 style="color: var(--color-cta-main); margin-bottom: 10px;">EXPERTISE</h4>
                            <ul style="list-style: none; font-size: 0.9em; padding: 0;">
                                ${data.skills.map(s => `<li style="margin-bottom: 5px;">• ${s}</li>`).join('')}
                            </ul>
                        </div>
                        <div>
                            <h4 style="color: var(--color-cta-main); margin-bottom: 10px;">KEY PROJECTS</h4>
                            <ul style="list-style: none; font-size: 0.9em; padding: 0;">
                                ${data.projects.map(p => `<li style="margin-bottom: 5px;">• ${p}</li>`).join('')}
                            </ul>
                        </div>
                    </div>
                </div>
            `;
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
    });
});

closeModal.onclick = () => { 
    modal.style.display = 'none'; 
    document.body.style.overflow = 'auto'; 
};

window.onclick = (event) => { 
    if (event.target == modal) { 
        modal.style.display = 'none'; 
        document.body.style.overflow = 'auto'; 
    } 
};