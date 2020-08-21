import axios from 'axios'
const KEY = 'AIzaSyDyNdz6KFlytSlBHDKUS-3UmccNOhC3MIo'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        order: 'viewCount',
        type: 'channel',
        key: KEY
    }
})
// return gapi.client.youtube.search.list({
//     "part": [
//       "snippet"
//     ],
//     "order": "viewCount",
//     "type": [
//       "channel"
//     ]
//   })