"use strict";var cardPokemon=document.querySelectorAll(".js-open-details-pokemon");function openDetailsPokemon(){document.documentElement.classList.add("open-modal")}cardPokemon.forEach(function(e){e.addEventListener("click",openDetailsPokemon)});