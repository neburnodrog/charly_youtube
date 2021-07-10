import axios from 'axios';

const baseUrl = 'https://www.googleapis.com/youtube/v3/commentThreads.list';
const API_KEY = process.env.API_KEY;

export async function getComments(videoId) {
  if (videoId === '') {
    console.log('no videoId provided');
  }

  const url =
    baseUrl +
    `?part=snippet,replies&key=${API_KEY}&videoId=${videoId}&maxResults=100`;

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (e) {
    console.log(e);
  }
}
