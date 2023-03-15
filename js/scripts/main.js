//Scripts do slide principal
var slide_hero = new Swiper(".slide-hero", {
  effect: 'fade',
  pagination: {
    el: "",
  },
});



const cardPokemon = document.querySelectorAll('.js-open-details-pokemon');
const bntCloseModal = document.querySelector('.js-close-modal-details-pokemon')

function openDetailsPokemon() {
  document.documentElement.classList.add('open-modal');
}

function closeDetailsPokemon() {
  document.documentElement.classList.remove('open-modal');
}

cardPokemon.forEach(card => {
  card.addEventListener('click', openDetailsPokemon);
})

bntCloseModal.addEventListener('click', closeDetailsPokemon);

