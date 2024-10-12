const portfolioItems = document.querySelectorAll('.portfolio-item');

const revealOnScroll = () => {
    const triggerBottom = window.innerHeight / 5 * 4;

    portfolioItems.forEach(item => {
        const itemTop = item.getBoundingClientRect().top;
        if (itemTop < triggerBottom) {
            item.classList.add('reveal');
        } else {
            item.classList.remove('reveal');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
