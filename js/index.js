import { playlistArr } from "./playlist.js";
const playlistHtml = playlistArr.map(function(el){
   return `<section class="card">
    <div class="card-start">
        <img src="/img/${el.albumArt}">
    </div>
        <div class="card-mid">
            <h4 class="card-title">${el.title}</h4>
            <p class="card-artist">${el.artist}</p>
        </div>
    <div class="card-end">
        <p class="card-menu">...</p>
    </div>
</section>
    `
}).join('');
document.getElementById('container').innerHTML = playlistHtml;