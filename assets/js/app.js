"use strict";var $=document;window.addEventListener("load",function(){headerMenu(),$.querySelector(".product")&&sliders.product(),$.querySelector(".slider")&&sliders.slider(),$.querySelector(".product-card__galery")&&sliders.productGalery(),$.querySelector(".galery")&&sliders.productGaleryPopup(),$.querySelector(".center-slider")&&sliders.center(),$.querySelector(".about-slider")&&sliders.about(),$.querySelector(".filter")&&filter.init(),$.querySelector(".popup-bg")&&closePopup(),$.querySelector(".faq__item")&&faqAccordion()}),window.addEventListener("click",function(e){$.querySelector(".filter-form__select.-active")&&-1===e.target.getAttribute("class").indexOf("filter-form__input")&&$.querySelector(".filter-form__select.-active").classList.remove("-active")});var faqAccordion=function(){$.querySelectorAll(".faq__item-head").forEach(function(e){e.onclick=function(){e.parentElement.classList.toggle("-active")}})},closePopup=function(){var e=null;$.querySelectorAll(".popup-close").forEach(function(t){t.onclick=function(){for(e=t;!e.parentElement.classList.contains("popup-bg");)e=e.parentElement;e.parentElement.classList.remove("-active")}})},headerMenu=function(){var e=$.querySelector(".menu__toggle"),t=$.querySelector(".menu__close"),r=$.querySelector(".menu__box");e.onclick=function(){r.classList.toggle("-active"),e.classList.toggle("-active")},t.onclick=function(){r.classList.toggle("-active"),e.classList.toggle("-active")}},filter=function(){var e,t=function(){e.querySelector(".filter-form__wrap").classList.add("-active")},r=function(){e.querySelector(".filter-form__wrap").classList.remove("-active")},l=function(){$.querySelectorAll("div.filter-form__group").forEach(function(e){e.querySelector("input.filter-form__input").onclick=function(){if($.querySelector(".filter-form__select.-active")&&$.querySelector(".filter-form__select.-active").classList.remove("-active"),e.querySelector("label.filter-form__group"))return!1;e.querySelector(".filter-form__select").classList.toggle("-active")}})};return{init:function(){e=$.querySelector(".filter"),e.querySelector(".filter-form"),l(),$.querySelector(".filter__open").onclick=function(){return t()},$.querySelector(".filter__close").onclick=function(){return r()}},open:t,close:r,optionOpen:l}}(),sliders={slider:function(){new Swiper(".slider__list-wrap",{wrapperClass:"slider__list",slideClass:"product",slideActiveClass:"-active",slideNextClass:"-next",slidePrevClass:"-prev",slidesPerView:"auto",navigation:{prevEl:".slider-btn.-prev",nextEl:".slider-btn.-next"},breakpoints:{540:{initialSlide:1,centeredSlides:!0}}})},product:function(){new Swiper(".product__img-box",{wrapperClass:"product__img-list",slideClass:"product__img",slideActiveClass:"-active",slideNextClass:"-next",slidePrevClass:"-prev",slidesPerView:1,navigation:{prevEl:".product__img-control.-prev",nextEl:".product__img-control.-next"}})},productGalery:function(){var e,t=function(){$.querySelector(".product-card__preview.-active")&&$.querySelector(".product-card__preview.-active").classList.remove("-active")},r=new Swiper(".product-card__galery-wrap",{wrapperClass:"product-card__photo-list",slideClass:"product-card__photo",slideActiveClass:"-active",slideNextClass:"-next",slidePrevClass:"-prev",slidesPerView:"auto",navigation:{prevEl:".product-card__preview-btn.-prev",nextEl:".product-card__preview-btn.-next"},on:{init:function(){$.querySelectorAll(".product-card__preview")[this.activeIndex].classList.add("-active")},slideChange:function(){t(),l.slideTo(this.activeIndex),$.querySelectorAll(".product-card__preview")[this.activeIndex].classList.add("-active")}}}),l=new Swiper(".product-card__preview-list",{wrapperClass:"product-card__preview-wrap",slideClass:"product-card__preview",slideNextClass:"-next",slidePrevClass:"-prev",slidesPerView:"auto"});$.querySelector(".product-card__preview-btn.-next").onclick=function(){0!==l.activeIndex&&l.setTranslate(l.getTranslate()-106)},$.querySelector(".product-card__preview-btn.-prev").onclick=function(){0!==l.activeIndex&&0!==l.getTranslate()&&l.setTranslate(l.getTranslate()+106)},$.querySelectorAll(".product-card__preview").forEach(function(i,s){i.onclick=function(){e=l.getTranslate(),t(),r.slideTo(s),l.setTranslate(e),i.classList.add("-active")}})},productGaleryPopup:function(){new Swiper(".galery__wrap",{wrapperClass:"galery__wrap-inner",slideClass:"galery__photo",slideActiveClass:"-active",slideNextClass:"-next",slidePrevClass:"-prev",slidesPerView:"auto",navigation:{prevEl:".galery__preview-btn.-prev",nextEl:".galery__preview-btn.-next"},pagination:{el:".galery__preview-wrap",type:"bullets",bulletElement:"img",bulletClass:"galery__preview",bulletActiveClass:"-active",clickable:!0}}),new Swiper(".galery__preview-list",{wrapperClass:"galery__preview-wrap",slideClass:"galery__preview",slideActiveClass:"-active",slideNextClass:"-next",slidePrevClass:"-prev",slidesPerView:"auto"})},center:function(){new Swiper(".center-slider__wrap-inner",{wrapperClass:"center-slider__list",slideClass:"center-slider__item-box",slideActiveClass:"-active",slideNextClass:"-next",slidePrevClass:"-prev",slidesPerView:1,navigation:{prevEl:".slider-btn.-prev",nextEl:".slider-btn.-next"},pagination:{el:".center-slider__nav",type:"bullets",bulletElement:"li",bulletActiveClass:"-active",clickable:!0}})},about:function(){new Swiper(".about-slider__wrap",{wrapperClass:"about-slider__list",slideClass:"about-slider__item-box",slideActiveClass:"-active",slideNextClass:"-next",slidePrevClass:"-prev",slidesPerView:1,navigation:{prevEl:".slider-btn.-prev",nextEl:".slider-btn.-next"},pagination:{el:".about-slider__nav",type:"bullets",bulletElement:"li",bulletClass:"about-slider__nav-item",bulletActiveClass:"-active",clickable:!0}})}};