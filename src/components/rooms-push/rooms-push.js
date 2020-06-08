import Swipe from 'swipejs';

const controls = document.querySelector('.slider__dots');
const nextButton = document.querySelector('.slider__button--next');
const prevButton = document.querySelector('.slider__button--prev');

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
