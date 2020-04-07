// song database: 
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

var song = new Audio();
var currentSong;
var prevSong;
function playOrPause()
{
    if(song.paused)
    {
        if (prevSong == undefined)
        {
            song.src = songs[currentSong]["source"];
            document.getElementsByClassName("title")[currentSong].innerHTML = songs[currentSong]["title"];
        }
        song.play();
        document.getElementsByClassName("play")[currentSong].src = "photographs/Pause.png";
        if ((prevSong || prevSong == 0) && prevSong != currentSong)
        {
            document.getElementsByClassName("title")[prevSong].innerHTML = songs[prevSong]["title"];
            document.getElementsByClassName("play")[prevSong].src = "photographs/Play.png";
        }
    }
    else if(song.played)
    {
        document.getElementsByClassName("play")[currentSong].src = "photographs/Play.png";
        if (prevSong == currentSong){
            song.pause();
        }
        else
        {
            song.src = songs[currentSong]["source"];
            document.getElementsByClassName("title")[prevSong].innerHTML = songs[prevSong]["title"];
            document.getElementsByClassName("play")[currentSong].src = "photographs/Pause.png";
            song.play();
            document.getElementsByClassName("title")[prevSong].innerHTML = songs[prevSong]["title"];
            document.getElementsByClassName("play")[prevSong].src = "photographs/Play.png";
        }
    }
}

song.addEventListener("timeupdate", function(){
    var position = song.currentTime/song.duration;
    document.getElementsByClassName("title")[currentSong].innerHTML = songs[currentSong]["title"] + " | " + Math.ceil(song.currentTime)+"/"+Math.ceil(song.duration) +"s";
});
