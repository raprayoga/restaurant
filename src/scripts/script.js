import * as datajson from "../DATA.json";
const datas = datajson.restaurants;

console.log(datas);

let html = "";
datas.map((data) => {
  html += `
    <div class="card-item" data-id="${data.id}">
      <div class="image-wrap">
        <img tabindex="0" alt="${data.name} image" src="${data.pictureId}">
        <p tabindex="0">${data.city}</p>
      </div>
      <p tabindex="0">Rating: ${data.rating}</p>
      <h3 tabindex="0">${data.name}</h3>
      <p class="desc" tabindex="0">${data.description}</p>
    </div>
  `;
});

const listElement = document.getElementById("list");
listElement.innerHTML = html;
