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

// Background Video
var backgroundVideo = document.getElementById('container__video');
var videoButton = document.getElementById('btn-song');
var isMuted = true;

videoButton.onclick = () => {
    if (backgroundVideo.muted) {

        backgroundVideo.muted = false;
        backgroundVideo.volume = 0.2;
        videoButton.classList.remove('fas', 'fa-volume-off')
        videoButton.classList.add('fas', 'fa-volume-up')
        videoButton.style.color = '#99A1FF';

    } else {
        backgroundVideo.muted = true;
        videoButton.classList.remove('fas', 'fa-volume-up');
        videoButton.classList.add('fas', 'fa-volume-off');
        videoButton.style.color = '#fff';
    }
};