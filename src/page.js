// sections
const sections = [
    document.getElementById("about"),
    document.getElementById("tools"),
    document.getElementById("projects")
];

// sidebar ids
let aboutbar = document.getElementById("about-bar");
let toolbar = document.getElementById("tools-bar");
let projectbar = document.getElementById("projects-bar");

const show = function (s) {
    sections.forEach(e => {
        e.style.display = "none";
    }); 
    sections[s].style.display = "block";
    document.querySelectorAll(".nav-link2").forEach(e => {
        e.style.color = "#fff";
    });
    
}


show(0)
aboutbar.style.color = "#FFD700";
aboutbar.addEventListener("click", function() {
    show(0)
    aboutbar.style.color = "#FFD700";
})

toolbar.addEventListener("click", function() {
    show(1)
    toolbar.style.color = "#FFD700";
})

projectbar.addEventListener("click", function() {
    show(2)
    projectbar.style.color = "#FFD700";
})
const songs = [
    {
        name: "Poor Boxer Shorts",
        artists: "Mom Jeans",
        album: "./assets/img/album/bud.jpg",
        song: "./assets/songs/box.mp3"
    },
    {
        name: "Everlong",
        artists: "Foo Fighters",
        album: "./assets/img/album/foo.jpg",
        song: "./assets/songs/everlong.mp3"
    },
        {
        name: "Funny You Should Ask",
        artists: "The Front Bottoms",
        album: "./assets/img/album/talon.jpg",
        song: "./assets/songs/funny.mp3"
    }
];

let toggle = false;
let audio = new Audio(); 
let current = Math.floor(Math.random() * songs.length); 

function loadSong(index) {
    audio.src = songs[index].song;
    document.querySelector(".player-image").src = songs[index].album;
    document.querySelector(".song-name").textContent = songs[index].name;
    document.querySelector(".song-author").textContent = `Artist(s): ${songs[index].artists}`;
}

function skip () {
    pauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
    if (current < songs.length - 1) {
        current++; 
    } else {
        current = 0;
    }
}
loadSong(current);

pauseBtn = document.getElementById("pause");
pauseBtn.addEventListener("click", function () {
    if (toggle) {
        audio.pause(); 
        pauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
    } else {
        audio.play();
        pauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
    }
    toggle = !toggle; 
});

audio.addEventListener("ended", function () {
    skip()
    loadSong(current); 
    audio.play();

})

document.getElementById("skip").addEventListener("click", function () {
    skip()
    loadSong(current); 
    audio.play();
});

