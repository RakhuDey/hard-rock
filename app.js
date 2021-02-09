/*
const searchSongs = () => {
    const searchText = document.getElementById("search-field").value;
    const url = ` https://api.lyrics.ovh/suggest/${searchText}`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => displaySongs(data.data));
};
*/
const searchSongs = async() => {
    const searchText = document.getElementById("search-field").value;
    const url = ` https://api.lyrics.ovh/suggest/${searchText}`;
    const res = await fetch(url);
    const data = await res.json();
    displaySongs(data.data);
};

const displaySongs = (songs) => {
    const songsContainer = document.getElementById("songs-container");
    songsContainer.innerHTML = "";
    songs.forEach((song) => {
        const songsDiv = document.createElement("div");
        songsDiv.className = "search-result col-md-8 mx-auto py-4";
        songsDiv.innerHTML = `
        <div class="single-result row align-items-center my-3 p-3">
                <div class="col-md-9">
                    <h3 class="lyrics-name">${song.title}</h3>
                    <p class="author lead">Album by <span>${song.artist.name}</span></p>
                    <audio controls>
                        <source src="${song.preview}" type="audio/mpeg">
                    </audio> 
                </div>
                <div class="col-md-3 text-md-right text-center">
                    <button onclick="getLyrics('${song.artist.name}','${song.title}')" class="btn btn-success">Get Lyrics</button>
                </div>
        </div>
        `;
        songsContainer.appendChild(songsDiv);
    });
};
/*
const getLyrics = async(artist, title) => {
    const url = `https://api.lyrics.ovh/v1/${artist}/${title}`;
    const res = await fetch(url);
    const data = await res.json();
    displayLyrics(data.lyrics);
};
*/

const getLyrics = (artist, title) => {
    const url = `https://api.lyrics.ovh/v1/${artist}/${title}`;
    fetch(url)
        .then((res) => res.json())
        .then((data) => displayLyrics(data.lyrics));
};
const displayLyrics = (lyrics) => {
    const lyricsDiv = document.getElementById("song-lyrics");
    lyricsDiv.innerText = lyrics;
};