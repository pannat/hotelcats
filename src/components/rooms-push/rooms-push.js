import Swipe from 'swipejs';

const controls = document.querySelector('.js-dots-rooms');
const nextButton = document.querySelector('.js-button-next-rooms');
const prevButton = document.querySelector('.js-button-prev-rooms');

const mySwipe = new Swipe(document.querySelector('.rooms-push__slider'), {
    startSlide: 0,
    speed: 200,
    draggable: false,
    continuous: true,
    disableScroll: false,
    stopPropagation: true,
    ignore: ".scroller",
    callback: function(index) {
        document.getElementById(`${index}room`).checked = true;
    }
});

controls.addEventListener('change', (evt) => {
    mySwipe.slide(evt.target.id[0]);
})

nextButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    mySwipe.next();
})

prevButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    mySwipe.prev();
})
