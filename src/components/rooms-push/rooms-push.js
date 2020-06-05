import Swipe from 'swipejs';

const mySwipe = new Swipe(document.querySelector('.rooms-push__slider'), {
    startSlide: 0,
    speed: 200,
    draggable: false,
    continuous: true,
    disableScroll: false,
    stopPropagation: false,
    ignore: ".scroller",
    callback: function(index) {
        document.getElementById(`${index}room`).checked = true;
    }
});

const controls = document.querySelector('.rooms-push .slider__controls');
controls.addEventListener('change', (evt) => {
    mySwipe.slide(evt.target.id[0])
})
