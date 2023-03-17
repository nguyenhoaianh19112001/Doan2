document.addEventListener("DOMContentLoaded", function() {
    const btn__size = document.querySelectorAll('.size .select__item-content');
    btn__size.forEach((btn, index) => {
        btn.onclick = function() {
            if (this.classList.contains('select__item-active')) {
                return
            }
            const btn__close = document.querySelector('.size .select__item-content.select__item-active');
            btn__close.classList.remove('select__item-active');
            this.classList.add('select__item-active');
        }
    })
    const btn__font = document.querySelectorAll('.font .select__item-content');
    const img = document.querySelectorAll('.slide__item');
    btn__font.forEach((btn, index) => {
        btn.onclick = function() {
            if (this.classList.contains('select__item-active')) {
                return
            }
            const btn__close = document.querySelector('.font .select__item-content.select__item-active');
            const img__close = document.querySelector('.slide__item.slide__item-active');
            img__close.classList.remove('slide__item-active');
            btn__close.classList.remove('select__item-active');
            img[index].classList.add('slide__item-active');
            this.classList.add('select__item-active');
        }
    })
    const item = document.querySelectorAll('.show__img-item');
    item.forEach((itemClick, index) => {
        itemClick.onclick = function() {
            const btn__close = document.querySelector('.font .select__item-content.select__item-active');
            btn__close.classList.remove('select__item-active');
            btn__font[index].classList.add('select__item-active');
            const img__close = document.querySelector('.slide__item.slide__item-active');
            img__close.classList.remove('slide__item-active');
            img[index].classList.add('slide__item-active');
        }
    })
    const btn__number = document.querySelectorAll('.btn__number');
    console.log(btn__number);
    const input = document.querySelector('.btn__input');
    btn__number[0].onclick = function() {
        if (input.value == 1) {
            return
        }
        input.value--;
    }
    btn__number[1].onclick = function() {
        input.value++;
    }
}, false)

$(document).ready(function() {
    $('.TTBTN .btn').Click(function() {

    });
})