let images = document.querySelector('.slider__images'),
    dotBlock = document.querySelector('.slider__dots'),
    btnBlock = document.querySelector('.slider__control-btns'),
    position = 0;

// Добавление точек снизу по кол-ву изображений в блоке .slider__img
for (let i = 0; i < images.childElementCount; i++) {
    dotBlock.appendChild(document.createElement('div'))
        .classList.add('slider__dot');
}

let dots = document.querySelectorAll('.slider__dot');

// Активация первого слайда
changeSlide(position);

// Обработка нажатий боковых клавиш
btnBlock.addEventListener('click', function (event) {
    if (event.target && event.target.classList.contains('slider__btn-prev')) {
        position -= 1;
        checkPosition();
        changeSlide(position);
    } else if (event.target && event.target.classList.contains('slider__btn-next')) {
        position += 1;
        checkPosition();
        changeSlide(position);
        event.preventDefault();
    }
});

// Обработка нажатий дот элементов
dotBlock.addEventListener('click', function (event) {
    dotBlock.childNodes.forEach(function (item, index) {
        if (event.target === item) {
            changeSlide(index);
        }
    });
});

// Проверка позиции на выход за пределы размера массива изображений
function checkPosition() {
    if (position < 0) {
        position = (images.childElementCount - 1);
    } else if(position > (images.childElementCount - 1)){
        position = 0;
    }
}

// Смена слайда
function changeSlide(position) {
    images.style.transform = `translateX(-${position * 100}%)`;
    dots.forEach(function (item) {
        item.classList.remove('slider__dot--active');
    });
    dots[position].classList.add('slider__dot--active');
}




