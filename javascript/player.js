
var songs = [
    {
        source: "songs/city of stars.m4a",
        poster: "photographs/citystars.png",
        title: "City Of Stars - Ryan Gosling, Emma Stone"
    },
    {
        source: "songs/18.m4a",
        poster: "photographs/182.jpg",
        title: "18 - One Direction"
    },
    {
        source: "songs/a lovely night.m4a",
        poster: "photographs/lovelynight.jpg",
        title: "A Lovely Night - Ryan Gosling, Emma Stone"
    },
    {
        source: "songs/If I Could Fly.m4a",
        poster: "photographs/ificouldfly.jpg",
        title: "If I Could Fly - One Direction"
    },
    {
        source: "songs/Night Changes.m4a",
        poster: "photographs/nightchanges.jfif",
        title: "Night Changes - One Direction"
    },
    {
        source: "songs/Stockholm Syndrome.m4a",
        poster: "photographs/stockholm.jpg",
        title: "Stockholm Syndrome - One Direction"
    }
]
var currentSong = Math.floor(Math.random()*songs.length);

var song = new Audio();

var title = document.getElementsByClassName("img-text")[0];
var fillbar = document.getElementsByClassName("fill")[0];
var poster = document.getElementsByClassName("poster")[0];

window.onload = playSong();

function playSong()
{
    song.src = songs[currentSong]["source"];
    title.innerHTML = songs[currentSong]["title"] + " " + Math.ceil(song.currentTime)+"/"+Math.ceil(song.duration);
    poster.src = songs[currentSong]["poster"];
    fillbar.style.width = "0%";
    song.play();
}


function playOrPause()
{
    if(song.paused)
    {
        song.play();
        document.getElementsByClassName("play")[0].src = "photographs/Pause.png"
    }
    else
    {
        song.pause();
        document.getElementsByClassName("play")[0].src = "photographs/Play.png"
    }
}

song.addEventListener("timeupdate", function(){
    var position = song.currentTime/song.duration;
    fillbar.style.width = position*100 + "%";
    title.innerHTML = songs[currentSong]["title"] + " | " + Math.ceil(song.currentTime)+"/"+Math.ceil(song.duration) +"s";
});

function pre()
{
    currentSong--;
    if (currentSong < 0)
    {
        currentSong = songs.length-1;
    }
    
    song.src = songs[currentSong]["source"];
    title.innerHTML = songs[currentSong]["title"];
    poster.src = songs[currentSong]["poster"];
    playSong();
}

function next()
{
    currentSong++;
    if (currentSong >= songs.length)
    {
        currentSong = 0;
    }

    song.src = songs[currentSong]["source"];
    title.innerHTML = songs[currentSong]["title"];
    poster.src = songs[currentSong]["poster"];
    playSong();
}


