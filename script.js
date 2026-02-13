// ===============================
// 💌 TYPEWRITER EFFECT
// ===============================
const text = "My heart belongs only to you ❤️";
let index = 0;
const speed = 70;

function typeWriter() {
    if (index < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    }
}

window.onload = typeWriter;


// ===============================
// 🎵 MULTI SONG PLAYER
// ===============================

const songs = [
    { src: "music/music.mp3", title: "Your Fav ❤️" },
    { src: "music/music1.mp3", title: "Miss You Always 🥺" },
    { src: "music/music2.mp3", title: "Eternal ❤️ " }
];

let currentSongIndex = 0;
const music = document.getElementById("bgMusic");
const playBtn = document.getElementById("playBtn");
const songTitle = document.getElementById("songTitle");

music.src = songs[currentSongIndex].src;
songTitle.innerText = "Now Playing: " + songs[currentSongIndex].title;

function toggleMusic() {
    if (music.paused) {
        music.play();
        playBtn.innerText = "⏸";
    } else {
        music.pause();
        playBtn.innerText = "▶";
    }
}

function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    updateSong();
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    updateSong();
}

function updateSong() {
    music.src = songs[currentSongIndex].src;
    songTitle.innerText = "Now Playing: " + songs[currentSongIndex].title;
    music.play();
    playBtn.innerText = "⏸";
}

// Auto play next when song ends
music.addEventListener("ended", nextSong);


// ===============================
// ⏳ COUNTDOWN TIMER
// ===============================
const meetDate = new Date("July 1, 2026 10:00:00").getTime();

setInterval(() => {
    const now = new Date().getTime();
    const distance = meetDate - now;

    if (distance < 0) {
        document.getElementById("days").innerText = "0";
        document.getElementById("hours").innerText = "0";
        document.getElementById("minutes").innerText = "0";
        document.getElementById("seconds").innerText = "0";
        return;
    }

    document.getElementById("days").innerText =
        Math.floor(distance / (1000 * 60 * 60 * 24));

    document.getElementById("hours").innerText =
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    document.getElementById("minutes").innerText =
        Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("seconds").innerText =
        Math.floor((distance % (1000 * 60)) / 1000);
}, 1000);


// ===============================
// 💍 YES BUTTON
// ===============================
function yesClicked() {
    const overlay = document.getElementById("loveOverlay");
    overlay.classList.add("active");

    // Optional: pause background music
    if (music && isPlaying) {
        music.pause();
    }

}
function closeOverlay() {
    const overlay = document.getElementById("loveOverlay");
    overlay.classList.remove("active");

    // Resume music if it was playing
    if (music && isPlaying) {
        music.play();
    }
}



// ===============================
// 😈 NO BUTTON RUNS AWAY
// ===============================
const noBtn = document.getElementById("noBtn");

if (noBtn) {
    noBtn.addEventListener("mouseover", function() {
        const x = Math.random() * (window.innerWidth - 100);
        const y = Math.random() * (window.innerHeight - 50);
        noBtn.style.position = "absolute";
        noBtn.style.left = x + "px";
        noBtn.style.top = y + "px";
    });
}


// ===============================
// 🔽 SMOOTH SCROLL
// ===============================
function scrollToSection() {
    window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth"
    });
}
// ===============================
// 📸 CAROUSEL FUNCTIONALITY
// ===============================

const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const dotsContainer = document.querySelector(".dots");

let currentIndex = 0;

// Create dots dynamically
slides.forEach((_, index) => {
    const dot = document.createElement("span");
    if (index === 0) dot.classList.add("active");
    dot.addEventListener("click", () => moveToSlide(index));
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dots span");

function updateDots(index) {
    dots.forEach(dot => dot.classList.remove("active"));
    dots[index].classList.add("active");
}

function moveToSlide(index) {
    track.style.transform = `translateX(-${index * 100}%)`;
    currentIndex = index;
    updateDots(index);
}

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    moveToSlide(currentIndex);
});

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    moveToSlide(currentIndex);
});

// Auto Slide Every 4 Seconds
setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    moveToSlide(currentIndex);
}, 4000);

// ===============================
// 💌 SCREEN LOVE LETTER TYPEWRITER
// ===============================

const screenLoveMessage = `Dear Priyanka,
Tui sudhu amar partner nos...
tui amay sob kichu
ami je chithi ta toke 18 tarikh debo,
bhbebechilam seta ekhon dicchi <3.

Toke khub khub miss kori ami, 
toke chara amar din gulo legit 
1 masher moto kore katee..

Ajke 14th feb Tui amar diye 430km
Dure ami toke khub miss korchi
tor touch, tor gayer gondho sob
ami khub ekaaa toke charaaaa

Okkane khub moja kor khub bhalo kore
lekha pora kor, FTE pakka tor <3.

I will always love youu MOMO ❤️
Will do everything we planned!!!!
Always be your "JORU KAA GULAAM!"

Lekha sesh korchi duto line diyee--
Irshaddd--

"No matter how far the roads stretch,
No matter how many nights we miss each other...

It will always be you.
Only you.
Forever ❤️"`;

let screenIndex = 0;
let screenSpeed = 80;

function typeScreenLetter() {
    const element = document.getElementById("loveLetterScreen");

    if (screenIndex < screenLoveMessage.length) {
        element.innerHTML += screenLoveMessage.charAt(screenIndex);
        screenIndex++;
        setTimeout(typeScreenLetter, screenSpeed);
    }
}

// Start typing when section becomes visible
window.addEventListener("scroll", function() {
    const section = document.querySelector(".love-letter-section");
    const position = section.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (position < screenHeight - 100 && screenIndex === 0) {
        typeScreenLetter();
    }
});

// ===============================
// 🔐 OTP SYSTEM
// ===============================

function checkOTP() {
    const userInput = document.getElementById("otpInput").value;

    if (userInput === "143") {
        document.getElementById("otpOverlay").style.display = "none";
    } else {
        alert("Bal bhalobasis 😏 Try Again!");
        document.getElementById("otpInput").value = "";
    }
}

// Allow Enter key to submit
document.getElementById("otpInput").addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        checkOTP();
    }
});
