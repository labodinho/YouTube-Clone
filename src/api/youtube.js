import axios from 'axios';


export default axios.create( {
    baseURL: 'https://www.googleapis.com/youtube/v3', //can add 'part=snippet' after that or do below in the params due to "axios"
    // //params: {
    //     // part: 'snippet', //it will return videos
    //     // maxResults: 5, //max numbers of videos 
    //     // key: '||' //API Key
    // }
})