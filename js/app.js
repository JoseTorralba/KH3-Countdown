// Release date 
var releaseDate = new Date("Jan 29, 2019 00:00:00").getTime();

// Updates countdown every 1 second
var countDown = setInterval( () => {

    // Get's Today's Date and time
    var currentDate = new Date().getTime();

    // Finds the distance between now and the release date
    var distance = releaseDate - currentDate;

    // Time calculations for days hours minutes and seconds
    var daysLeft = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hoursLeft = Math.floor((distance % (1000 * 60 * 60 *24 )) / (1000 * 60 *60))
    var minutesLeft = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var secondsLeft = Math.floor((distance % (1000 * 60)) / 1000);

    // Shows countdown on page
    var showCountdown = document.getElementById('countdown');
    showCountdown.innerHTML = 
        daysLeft + 'd ' + 
        hoursLeft + 'h ' +
        minutesLeft + 'm ' +
        secondsLeft + 's ';

    // When countdown reaches release date
    if (distance < 0 ) {
        clearInterval(countDown);
        showCountdown.innerHTML = 'Available Now';
        showCountdown.style.fontStyle = 'italic';
    }
}, 1000);

// Music
var backgroundMusic = new Audio('../media/chikai.mp3');
var btnSong = document.getElementById('btn-song');

btnSong.onclick = () => {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        btnSong.classList.remove('fas', 'fa-volume-off')
        btnSong.classList.add('fas', 'fa-volume-up')
        btnSong.style.color = '#99A1FF';

    } else {
        backgroundMusic.pause();
        btnSong.classList.remove('fas', 'fa-volume-up');
        btnSong.classList.add('fas', 'fa-volume-off');
        btnSong.style.color = '#fff';
    }
};