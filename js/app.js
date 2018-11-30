// Release date 
const releaseDate = new Date("Jan 29, 2019 00:00:00").getTime();

// Updates countdown every 1 second
const countDown = setInterval( () => {

    // Get's Today's Date and time
    const currentDate = new Date().getTime();

    // Finds the distance between now and the release date
    const distance = releaseDate - currentDate;

    // Time calculations for days hours minutes and seconds
    const daysLeft = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hoursLeft = Math.floor((distance % (1000 * 60 * 60 * 24 )) / (1000 * 60 * 60))
    const minutesLeft = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const secondsLeft = Math.floor((distance % (1000 * 60)) / 1000);

    // Countdown Container
    const countdownContainer = document.getElementById('countdown');

    // Shows Days
    const showDay = document.getElementById('days');
    showDay.textContent = daysLeft;

    // Shows Hours
    const showHours = document.getElementById('hours');
    showHours.textContent = hoursLeft;
    
    // Shows Minutes
    const showMinutes = document.getElementById('minutes');
    showMinutes.textContent = minutesLeft;

    // Shows Seconds
    const showSeconds = document.getElementById('seconds');
    showSeconds.textContent = secondsLeft;

    // When countdown reaches release date
    if (distance < 0 ) {
        clearInterval(countdownContainer);

        // Displays "Available Now"
        const showAvailability = document.getElementById('available');
        showAvailability.style.display = 'block';

        // Removes Counter
        showDay.style.display = 'none';
        showHours.style.display = 'none';
        showMinutes.style.display = 'none';
        showSeconds.style.display = 'none';

        // Removes Secondary Heading
        const secondaryHeading = document.getElementById('secondary-heading');
        secondaryHeading.style.display = 'none';

        // Hides Counter Text
        const counterDays = document.getElementById('counter-days');
        counterDays.style.display = 'none';

        const counterHours = document.getElementById('counter-hours');
        counterHours.style.display = 'none';

        const counterMins = document.getElementById('counter-mins');
        counterMins.style.display = 'none';

        const counterSecs = document.getElementById('counter-secs');
        counterSecs.style.display = 'none';

        // Button ID
        const buttonText = document.getElementById('container__button');
        buttonText.innerHTML = 'Purchase Now';
    }
}, 1000);

// Background Video
const backgroundVideo = document.getElementById('container__video');
const videoButton = document.getElementById('btn-song');
const isMuted = true;

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