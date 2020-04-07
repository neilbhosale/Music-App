// SONG DATABASE
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

// FOR PLAYER
var song = new Audio();
var currentSong;
var title = document.getElementsByClassName("m-text")[0];
var seekbar = document.getElementsByClassName("fill")[0];

function playSong()
{
  document.getElementsByClassName("foot")[0].style.display = "block";
  song.src = songs[currentSong]["source"];
  title.innerHTML = songs[currentSong]["title"] + " " + Math.ceil(song.currentTime)+"/"+Math.ceil(song.duration);
  seekbar.style.width = "0%";
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
  seekbar.style.width = position*100 + "%";
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

    playSong();
}

function closePlayer()
{
  song.pause();
  document.getElementsByClassName("foot")[0].style.display = "none";
}

// GREETING ACCORDING TO TIME

let d = new Date();
let hours = d.getHours();
if (hours < 12)
{
  document.getElementById("greeting").innerHTML = "Good Morning!";
}
else if (hours >= 12 && hours < 17)
{
  document.getElementById("greeting").innerHTML = "Good After Noon!";
}
else if (hours >=17 && hours <=8)
{
  document.getElementById("greeting").innerHTML = "Good Evening!";
}
else
{
  document.getElementById("greeting").innerHTML = "Sweet Dreams!";
}

// SEARCH

function search() {
  var a, txtValue;
  var input = document.getElementById('myInput');
  var filter = input.value.toUpperCase();
  var li = document.getElementById("list").getElementsByTagName('li');
  for (let i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

