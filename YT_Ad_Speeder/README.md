# YTvidSpeedup
Works by setting the playbackRate value of the YouTube video to the maximum value (16.0).\
Speeds up ads too, so can function as a manual YouTube 'adblocker'.\
Once an ad (or video) ends, YouTube plays the subsequent ad or video in a new video element, so playbackRate gets set back to the default value (1.0) automatically.

### TO-DO
- Automatically detect when ad starts playing, speed up video then
- Ads can sometimes not load fast enough, causing buffering
  - One idea is to set quality of video as low as possible
  - Seems to be quite difficult to change quality - only way is to change source of video, and YouTube likely wouldn't send a lower quality version of ad halfway through
