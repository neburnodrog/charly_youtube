const baseUrl = 'https://www.googleapis.com/youtube/v3/commentThreads';
const API_KEY = process.env.YOUTUBE_KEY;

export const getComments = async (videoId: string) => {
  if (videoId === '') {
    console.log('hola');
  }

  const url =
    baseUrl + `?part=snippet&key=${API_KEY}&videoId=${videoId}&maxResults=100`;

  const response = await fetch(url);
  const data = response.json();

  return data;
};
