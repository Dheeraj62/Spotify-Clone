console.log("Welcome to Spotify!! | Play it , Feel it");
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");
let masterSongName = document.getElementById("songBanner");
let mainPlay = document.getElementById("mainPlay");
let progressBar = document.getElementById("progressBar");
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName("songItem"));
let songs = [
    { songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "DEAF KEV - Invincible [NCS Release]", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Different Heaven & EH!DE - My Heart", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Janji-Heroes-Tonight", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Rabba - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/6.jpg" },
    { songName: "Sakhiyaan - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/7.jpg" },
    { songName: "Bhula Dena - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/8.jpg" },
    { songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/9.jpg" },
    { songName: "Na Jaana - Salam-e-Ishq", filePath: "songs/4.mp3", coverPath: "covers/10.jpg" },
]
songItems.forEach((element, i) => {

    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});
mainPlay.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        mainPlay.classList.remove("fa-play-circle");
        mainPlay.classList.add("fa-pause-circle");
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        mainPlay.classList.add("fa-play-circle");
        mainPlay.classList.remove("fa-pause-circle");
        gif.style.opacity = 0;
    }
})
audioElement.addEventListener("timeupdate", () => {

    //Update Seekbar
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    progressBar.value = progress;

    progressBar.addEventListener("change", () => {
        audioElement.currentTime = (progressBar.value * audioElement.duration) / 100;
    })

})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName("miniPlay")).forEach((element) => {
        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-play-circle");
    })
}

let miniPlay = Array.from(document.getElementsByClassName("miniPlay"));
miniPlay.forEach((element) => {
    element.addEventListener("click", (e) => {
        songIndex = parseInt(e.target.id);
        if (audioElement.paused || audioElement.currentTime <= 0)
        {    
        
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");
        gif.style.opacity = 1;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();

        mainPlay.classList.remove("fa-play-circle");
        mainPlay.classList.add("fa-pause-circle");
        }
        else{
        e.target.classList.add("fa-play-circle");
        e.target.classList.remove("fa-pause-circle");
        mainPlay.classList.add("fa-play-circle");
        mainPlay.classList.remove("fa-pause-circle");
        audioElement.pause();
        gif.style.opacity = 0; 
        }
    })
});

let mainNext = document.getElementById("mainNext");
let mainPrevious = document.getElementById("mainPrevious");
mainNext.addEventListener("click", () => {
    if (songIndex >= 9) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    makeAllPlays();
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    audioElement.currentTime = 0;
    console.log('Playing', songIndex + 1);
    mainPlay.classList.remove('fa-play-circle');
    mainPlay.classList.add('fa-pause-circle');
    gif.style.opacity = 1;
    audioElement.play();
})

mainPrevious.addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 9;
    }
    else {
        songIndex -= 1;

    }
    makeAllPlays();
   
   
    audioElement.currentTime = 0;
    console.log('Playing', songIndex + 1);
    gif.style.opacity = 1;
    audioElement.play();
    masterSongName.innerText = songs[songIndex].songName;
    mainPlay.classList.remove('fa-play-circle');
    mainPlay.classList.add('fa-pause-circle');
})

