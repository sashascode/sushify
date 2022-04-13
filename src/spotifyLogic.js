import SpotifyWebApi from 'spotify-web-api-node';

const endpoint = 'https://accounts.spotify.com/authorize';
const clientID = '791d855bdf4e4930a3584a4443cbe6f4';
const redirectUri = 'http://localhost:3000/';
const scopes = [
  "streaming",
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
  "user-read-email",
  "user-read-private",
  "user-library-read",
  "user-library-modify",
];

export const spotifyApi = new SpotifyWebApi({
  clientId: clientID,
});

//Login

export const loginURL = `${endpoint}?client_id=${clientID}&response_type=code&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&show_dialog=true`;


