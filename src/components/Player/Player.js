import { SpotifyBody } from './styles'
import Sidebar from '../Sidebar/Sidebar'
import Body from '../Body/Body'
import { FooterContainer } from '../Footer/styles'

const Player = () => {
  return (
    <>
    <SpotifyBody>
        <Sidebar/>
        <Body/>
    </SpotifyBody>
    <FooterContainer/>
    </>
  )
}

export default Player