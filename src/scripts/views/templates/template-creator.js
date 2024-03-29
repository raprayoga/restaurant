import CONFIG from '../../globals/config';

const createRestaurantListTemplate = (restaurant) => `
  <div class="card-item restaurant-item" data-id="${restaurant.id}">
    <div class="image-wrap">
      <img class="lazyload" tabindex="0" alt="${restaurant.name} image" data-src="${
  restaurant.pictureId
    ? `${CONFIG.BASE_URL}/images/small/${restaurant.pictureId}`
    : 'https://picsum.photos/id/666/800/450?grayscale'
}">
      <p tabindex="0">${restaurant.city}</p>
    </div>
    <p tabindex="0">Rating: ${restaurant.rating}</p>
    <h3 class="restaurant-title" tabindex="0"><a href="${`/#/detail/${restaurant.id}`}">${
  restaurant.name
}</a></h3>
    <p class="desc" tabindex="0">${restaurant.description}</p>
  </div>
`;

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant-title">${restaurant.name}</h2>
  <div class="image-info-wrap">
  <picture>
  <source class="lazyload" tabindex="0" alt="${
  restaurant.name
} image" srcset="${
  restaurant.pictureId
    ? `${CONFIG.BASE_URL}/images/small/${restaurant.pictureId}`
    : 'https://picsum.photos/id/666/800/450?grayscale'
}"
type="image/jpeg">
    <img class="lazyload" tabindex="0" alt="${restaurant.name} image" src="${
  restaurant.pictureId
    ? `${CONFIG.BASE_URL}/images/medium/${restaurant.pictureId}`
    : 'https://picsum.photos/id/666/800/450?grayscale'
}">
  </picture>
    <div class="restaurant-info">
      <h3>Information</h3>
      <h4>City</h4>
      <p>${restaurant.city}</p>
      <h4>Address</h4>
      <p>${restaurant.address}</p>
      <h4>Rating</h4>
      <p>${restaurant.rating}</p>
    </div>
  </div>
  <div>
    <h5>Menu</h5>
    <p>foods : ${restaurant.menus.foods.map((food) => ` ${food.name}`)} </p>
    <p>drinks : ${restaurant.menus.drinks.map((drink) => ` ${drink.name}`)} </p>
  </div>
  <div>
    <h3>Description</h3>
    <p>${restaurant.description}</p>
  </div>
  <div>
    <h3>Review</h3>
    <div id="list">
    ${restaurant.customerReviews.map(
    (review) => `
        <div class="card-item" style="height: 120px;">
          <h3 tabindex="0" arial-label="nama reviewer ${review.name}">${review.name}</h3>
          <small>${review.date}</small>
          <p class="desc" style="margin-top: 0.3rem" tabindex="0" arial-label="review ${review.review}">${review.review}</p>
        </div>
        `,
  )}
    </div>
  </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantListTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
