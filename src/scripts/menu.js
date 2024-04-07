const menu = (buttonSelector, menuSelector) => {
    const openBtn = document.querySelector(buttonSelector);
    const menu = document.querySelector(menuSelector);

    menu.addEventListener('click', e => {
        const target = e.target.tagName;

        if (target === 'A' || target === 'IMG' || target === 'I') {
            menu.classList.add('animate__fadeOutRight');
            setTimeout(() => {
                menu.classList.add('none');
                menu.classList.remove('animate__fadeInRight');
            }, 300);
        }
    });

    openBtn.addEventListener('click', () => {
        menu.classList.toggle('none');
        menu.classList.toggle('animate__fadeInRight');
        menu.classList.remove('animate__fadeOutRight');
    });
};

export default menu;
