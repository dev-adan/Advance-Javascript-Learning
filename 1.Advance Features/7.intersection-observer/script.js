
const cards = document.querySelectorAll('.card')

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle('show',entry.isIntersecting);
        if(entry.isIntersecting) observer.unobserve(entry.target)
    })
}, {
    threshold : 1,
    // rootMargin : '-300px',
});


const lastCardObserver = new IntersectionObserver(entries => {
    const lastCard = entries[0];
    if(!lastCard.isIntersecting) return;
    loadNewCards();
}, {});

lastCardObserver.observe(document.querySelector('.card:last-child'))


cards.forEach(card => {
    observer.observe(card)
})
