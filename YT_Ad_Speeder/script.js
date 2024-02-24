getVidElement();

// Gets video element in which YT vid is playing
function getVidElement () {
    intervalId1 = setInterval( () => {
            videoElement = document.querySelectorAll('video');
            // TO-DO - Find more elegant solution to this
            if (videoElement.length != 1) {
                console.log("REFRESH THE PAGE");
            }
            else {
                // clearInterval(intervalId1);
                prepareToFF(videoElement[0]);
            }
    }, 500);
}


// Interval in this function runs on a loop while a video is playing
function prepareToFF(videoElement) {

    videoElement = document.querySelector('video');

    // console.log("Waiting to fastforward when an ad plays");

    // Regularly checks if an ad is playing
    intervalId2 = setInterval( () => {
        
        videoElement.playbackRate = 1.0;

        adElement = document.getElementsByClassName("video-ads");
        // console.log(adElement[0]);

        // If below is true, an ad is playing, so fast-forward the video until it gets back to video
        if (adElement[0].childElementCount != 0) {
            clearInterval(intervalId2);
            // console.log("Beginning FF");
            ffAd(videoElement);
        }
    }, 500);
}

// Sets playbackrate of video to 16.0, and regularly checks if it can skip the ad, skipping it whenever possible
// CURRENTLY, CHECKS FOR ADS BY SEEING IF THERE IS A SKIP AD BUTTON - BUT IF IT'S AN UNSKIPPABLE AD, THERE IS NO BUTTON
function ffAd (videoElement) {
    // videoElement.playbackRate = 16.0;
    // console.log("Yo so this is in function wehre ad wil be skipped");

    // Checks if ad can be skipped, if so, skips it
    intervalId3 = setInterval( () => {

        videoElement.playbackRate = 16.0;

        skipButton = document.getElementsByClassName("ytp-ad-skip-button-modern");

        adElement = document.getElementsByClassName("video-ads");

        // If a video is playing and not an ad, sends program back to prepareToFF
        if (adElement[0].childElementCount == 0) {
            clearInterval(intervalId3);
            // console.log("Going to ff mode");
            prepareToFF(videoElement);
        }
        else {
            skipButton[0].click();
            // console.log("Trying to skip")
        }
    }, 500);

}