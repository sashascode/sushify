import { LoginContainer, LoginButton } from "./styles"

const endpoint = 'https://accounts.spotify.com/authorize';
const clientID = '791d855bdf4e4930a3584a4443cbe6f4';
const redirectUri = 'http://localhost:3000/';
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state"
];
const loginURL = `${endpoint}?client_id=${clientID}&response_type=token&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&show_dialog=true`;

const Login = () => {
  return (
    <LoginContainer>
        <img src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg" alt="Spotify Logo"/>
        <LoginButton href={loginURL}>Sign in</LoginButton>
    </LoginContainer>
  )
}

export default Login