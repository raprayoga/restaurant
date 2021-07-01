import CONFIG from '../../globals/config'

const createRestaurantListTemplate = (restaurant) => `
  <div class="card-item" data-id="${restaurant.id}">
    <div class="image-wrap">
      <img tabindex="0" alt="${restaurant.name} image" src="${
  restaurant.pictureId
    ? CONFIG.BASE_URL + '/images/medium/' + restaurant.pictureId
    : 'https://picsum.photos/id/666/800/450?grayscale'
}">
      <p tabindex="0">${restaurant.city}</p>
    </div>
    <p tabindex="0">Rating: ${restaurant.rating}</p>
    <h3 tabindex="0"><a href="${`/#/detail/${restaurant.id}`}">${
  restaurant.name
}</a></h3>
    <p class="desc" tabindex="0">${restaurant.description}</p>
  </div>
`

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="title">${restaurant.name}</h2>
  <div class="image-info-wrap">
    <img tabindex="0" alt="${restaurant.name} image" src="${
  restaurant.pictureId
    ? CONFIG.BASE_URL + '/images/large/' + restaurant.pictureId
    : 'https://picsum.photos/id/666/800/450?grayscale'
}">
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
  <div class="movie__overview">
    <h3>Description</h3>
    <p>${restaurant.description}</p>
  </div>
`

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`

export {
  createRestaurantListTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
}
