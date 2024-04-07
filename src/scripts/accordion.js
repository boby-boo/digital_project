const accordion = (triggersSelector, listSelector) => {
    const triggers = document.querySelectorAll(triggersSelector);
    const list = document.querySelectorAll(listSelector);

    const toggleVisible = element => {
        list.forEach(item => (item.style.display = 'none'));
        element.style.display = 'flex';
        element.classList.add('animate__fadeIn');
    };

    triggers.forEach((trigger, index) => {
        trigger.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                toggleVisible(list[index]);
            }
        });
    });
};

export default accordion;
