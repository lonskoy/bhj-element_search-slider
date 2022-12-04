const btn = document.getElementsByClassName('slider__arrow');
let sliderCount = 0;
const arrDots = Array.from(document.querySelectorAll('.slider__dot'));
const arrGallery = Array.from(document.querySelectorAll('.slider__image'));

function slideActive() {  //Отображает эллементы массивов arrDots и arrGllerey, со значением = sliderCount. 
    arrGallery[sliderCount].parentElement.className = 'slider__item slider__item_active';
    arrDots[sliderCount].className ='slider__dot slider__dot_active';
}

function slideDeActive() { //Скрывает эллементы массивов arrDots и arrGllerey, со значением = sliderCount.
    arrGallery[sliderCount].parentElement.className = 'slider__item';
    arrDots[sliderCount].className ='slider__dot';
}

arrDots.forEach((elem) => {
    elem.onclick = function() {
        if(elem.className === 'slider__dot') {
            slideDeActive();
            sliderCount = arrDots.indexOf(elem); //Устанавливаем счетчик слайдов на значение индекса кликнутой точки
            slideActive();
        }
    }
})

const btnLeft = btn[0].onclick = function() {
    if(sliderCount === 0) { //Если долистали до первого слайда
        slideDeActive();
        sliderCount = arrGallery.length - 1; //Устанавливаем счетчик слайдов на последний слайд
        slideActive();
    }
    else {
        slideDeActive();
        sliderCount -= 1; //Листаем влево
        slideActive();
    }
}

const btnRight= btn[1].onclick = function() {
    if(sliderCount === arrGallery.length - 1) { //Если долистали до последнего слайда
        slideDeActive();
        sliderCount = 0; //Устанавливаем счетчик слайдов на первый слайд
        slideActive(); 
    }
    else {
        slideDeActive();
        sliderCount += 1; //Листаем вправо
        slideActive();
    }
}

