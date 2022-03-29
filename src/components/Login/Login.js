import { LoginContainer, LoginButton } from "./styles"
import { loginURL } from "../../spotifyLogic"

const Login = () => {
  return (
    <LoginContainer>
        <img src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg" alt="Spotify Logo"/>
        <LoginButton href={loginURL}>Sign in</LoginButton>
    </LoginContainer>
  )
}

export default Login