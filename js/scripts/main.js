const cardPokemon = document.querySelectorAll('.js-open-details-pokemon');

function openDetailsPokemon() {
  document.documentElement.classList.add('open-modal');
}

cardPokemon.forEach(card => {
  card.addEventListener('click', openDetailsPokemon);
})