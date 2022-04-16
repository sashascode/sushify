import { SpotifyBody } from './styles'
import Sidebar from '../Sidebar/Sidebar'
import Body from '../Body/Body'
import Footer from '../Footer/Footer'

const Player = ({accesToken}) => {
  return (
    <>
    <SpotifyBody>
        <Sidebar/>
        <Body accesToken={accesToken}/>
    </SpotifyBody>
    <Footer/>
    </>
  )
}

export default Player