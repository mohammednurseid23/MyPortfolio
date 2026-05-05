document.addEventListener('DOMContentLoaded', () => {
    const reveals = document.querySelectorAll('.reveal');

    const revealOnScroll = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // Reveal only once
            }
        });
    }, {
        threshold: 0.1
    });

    reveals.forEach(reveal => {
        revealOnScroll.observe(reveal);
    });

    // Subtle parallax effect for bento items
    document.addEventListener('mousemove', (e) => {
        const bentoItems = document.querySelectorAll('.bento-item');
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        bentoItems.forEach(item => {
            const rect = item.getBoundingClientRect();
            const itemX = (rect.left + rect.width / 2) / window.innerWidth;
            const itemY = (rect.top + rect.height / 2) / window.innerHeight;
            
            const moveX = (x - itemX) * 10;
            const moveY = (y - itemY) * 10;
            
            // Only apply on hover or subtlely? 
            // For now, let's keep it simple to avoid performance issues
        });
    });
});
