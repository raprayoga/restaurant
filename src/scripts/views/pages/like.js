import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantListTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
    <div id="title">
      <h2>Your Liked Restaurant</h2>

      <div id="list"></div>
    </div>
    `;
  },

  async afterRender() {
    const restaurant = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantContainer = document.querySelector('#list');
    restaurant.forEach((restaurantData) => {
      restaurantContainer.innerHTML += createRestaurantListTemplate(restaurantData);
    });
  },
};

export default Like;
