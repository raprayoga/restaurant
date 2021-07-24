import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantListTemplate } from '../templates/template-creator';

const List = {
  async render() {
    let fileName = null;
    const x = window.matchMedia('(max-width: 768px)');
    if (x.matches) {
      fileName = 'hero-image_2-small.jpg';
    } else {
      fileName = 'hero-image_2-large.jpg';
    }

    return `
      <div
        class="hero-component"
        style="background-image: url('./images/heros/${fileName}');"
      >
        <div class="overlay"></div>
        <div class="hero">
          <img
            src="./images/logo/ngemlLogo.png"
            alt="ngemeal logo brand"
            class="logo-brand"
          />
          <h1 tabindex="0">Ngemeal Yuk!</h1>
          <p tabindex="0">
            Temukan berbagai macam rekomendasi restoran dengan terbaik
          </p>
        </div>
      </div>
      <div id="title">
        <h2>Explore Restaurant</h2>

        <div id="list"></div>
      </div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.list();
    const restaurantsContainer = document.querySelector('#list');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantListTemplate(restaurant);
    });
  },
};

export default List;
