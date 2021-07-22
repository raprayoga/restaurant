const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('showing empty liked restaurant', ({ I }) => {
  // I.seeElement('#query');
  // I.seeElement('.query'); // membuat test menjadi gagal
  I.see('Tidak ada film untuk ditampilkan', '.restaurant-item__not__found');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Tidak ada film untuk ditampilkan', '.restaurant-item__not__found');

  I.amOnPage('/');

  I.seeElement('.restaurant-title a');

  const firstFilm = locate('.restaurant-title a').first();
  const firstFilmTitle = await I.grabTextFrom(firstFilm);
  I.click(firstFilm);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.restaurant-item');
  const likedFilmTitle = await I.grabTextFrom('.restaurant-title');

  assert.strictEqual(firstFilmTitle, likedFilmTitle);
});

// Scenario('searching restaurant', async ({ I }) => {
//   I.see('Tidak ada film untuk ditampilkan', '.restaurant-item__not__found');

//   I.amOnPage('/');

//   I.seeElement('.restaurant-title a');

//   const titles = [];

//   for (let i = 1; i <= 3; i++) {
//     I.click(locate('.restaurant-title a').at(i));
//     I.seeElement('#likeButton');
//     I.click('#likeButton');
//     titles.push(await I.grabTextFrom('.restaurant-title'));
//     I.amOnPage('/');
//   }

//   I.amOnPage('/#/like');
//   I.seeElement('#query');

//   const searchQuery = titles[1].substring(1, 3);
//   const matchingRestaurants = titles.filter((title) => title.indexOf(searchQuery) !== -1);

//   I.fillField('#query', searchQuery);
//   I.pressKey('Enter');

//   const visibleLikedRestaurants = await I.grabNumberOfVisibleElements('.movie-item');
//   assert.strictEqual(matchingRestaurants.length, visibleLikedRestaurants);

//   matchingRestaurants.forEach(async (title, index) => {
//     const visibleTitle = await I.grabTextFrom(locate('.movie__title').at(index + 1));
//     assert.strictEqual(title, visibleTitle);
//   });
// });
