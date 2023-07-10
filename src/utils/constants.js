// export const GOOGLE_API_KEY = "AIzaSyDkYrGxa5dFoiOKcoVo3QcmFwX2lYUuisc";
// export const GOOGLE_API_KEY = "AIzaSyAZiH3k1_sIoDwH2XCljER9wBBFVx8tj-Q";
export const GOOGLE_API_KEY = "AIzaSyCZCJf7tbkYMQdkHAsUQvrMhLuCyogC-FU";
// export const GOOGLE_API_KEY = "AIzaSyD8xUZK2ORbSdJJgD8tDpVoKEmZLFyUtEY";
export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=48&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
export const YOUTUBE_VIDEO_SEARCH_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=video&key=${GOOGLE_API_KEY}&q=`;
export const LIVE_CHAT_COUNT = 10;
export const YOUTUBE_VIDEO_INFO_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=`
export const SUGGESTED_VIDEO_LIST_API = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=video&key=${GOOGLE_API_KEY}&relatedToVideoId=`
// https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=india&key=AIzaSyDkYrGxa5dFoiOKcoVo3QcmFwX2lYUuisc
