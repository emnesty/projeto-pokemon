"use strict";var slide_hero=new Swiper(".slide-hero",{effect:"fade",pagination:{el:""}}),cardPokemon=document.querySelectorAll(".js-open-details-pokemon"),bntCloseModal=document.querySelector(".js-close-modal-details-pokemon");function openDetailsPokemon(){document.documentElement.classList.add("open-modal")}function closeDetailsPokemon(){document.documentElement.classList.remove("open-modal")}cardPokemon.forEach(function(e){e.addEventListener("click",openDetailsPokemon)}),bntCloseModal.addEventListener("click",closeDetailsPokemon);