module.exports = {
  serverRuntimeConfig: {
    // Will only be available on the server side
    SOME_SECRET: 'secret',
    API_KEY: process.env.YOUTUBE_KEY, // Pass through env variables
  },
  publicRuntimeConfig: {
    // Will be available on both server and client
    staticFolder: '/static',
  },
  env: {
    API_KEY: 'AIzaSyBrlc2GA4DzCiiEIYk4Al485Z9ADtt9ojQ',
  },
};
