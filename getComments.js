import axios from 'axios';

const baseUrl = 'https://www.googleapis.com/youtube/v3/commentThreads';
const API_KEY = process.env.YOUTUBE_KEY;

export async function getComments(videoId) {
  if (videoId === '') {
    console.log('hola');
  }

  console.log('INSIDE getComments: ', { videoId });

  const url =
    baseUrl + `?part=snippet&key=${API_KEY}&videoId=${videoId}&maxResults=100`;

  console.log('INSIDE getComments: ', { url });
  try {
    const response = await axios.get(url);
    console.log({ response });
    return response;
  } catch (e) {
    console.log(e);
  }
}
