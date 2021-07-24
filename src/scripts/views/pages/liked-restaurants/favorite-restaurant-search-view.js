/* eslint-disable class-methods-use-this */
import { createRestaurantListTemplate } from '../../templates/template-creator';

class FavoriteRestaurantSearchView {
  getTemplate() {
    return `
    <div id="title">
      <h2>Your Liked Restaurant</h2>
      <div id="list"></div>
    </div>
   `;
  }

  showFavoriteRestaurants(restaurants = []) {
    let html;
    if (restaurants.length) {
      html = restaurants.reduce((carry, restaurant) => carry.concat(createRestaurantListTemplate(restaurant)), '');
    } else {
      html = this.getEmptyRestaurantTemplate();
    }

    document.getElementById('list').innerHTML = html;

    document.getElementById('list').dispatchEvent(new Event('list:updated'));
  }

  getEmptyRestaurantTemplate() {
    return '<div class="restaurant-item__not__found restaurants__not__found">Tidak ada film untuk ditampilkan</div>';
  }
}

export default FavoriteRestaurantSearchView;
