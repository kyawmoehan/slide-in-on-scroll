function debounce(func, wait = 20, immediate = true) {
var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

const sliderImgs = document.querySelectorAll('.slide-in');

function checkSlide(e) {
    sliderImgs.forEach(img => {
        const slideInAt = (window.scrollY + window.innerHeight) - img.height / 2;
        const imgButton = img.offsetTop + img.height;
        console.log(slideInAt, imgButton);
        const isHalfShow = slideInAt > img.offsetTop;
        const isNotShowHalf = window.scrollY < imgButton;
        if(isHalfShow && isNotShowHalf){
            img.classList.add('active');
        } else {
            img.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', debounce(checkSlide));
