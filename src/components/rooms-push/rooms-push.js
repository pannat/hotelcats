import Swipe from 'swipejs';

const mySwipe = new Swipe(document.querySelector('.rooms-push__slider'), {
    startSlide: 0,
    speed: 400,
    // auto: 3000,
    draggable: false,
    continuous: true,
    disableScroll: false,
    stopPropagation: false,
    ignore: ".scroller",
    callback: function(index, elem, dir) {
        document.getElementById(`${index}` + "room").checked = true;
    },
    transitionEnd: function(index, elem) {}
});

const controls = document.querySelector('.rooms-push .slider__controls');
controls.addEventListener('change', (evt) => {
    mySwipe.slide(evt.target.id[0])
})