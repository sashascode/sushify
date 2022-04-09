import { BodyContainer, Info, InfoText, Songs, StartPlaylist } from './styles'
import { Header } from './Header';
import { selectPlaylist } from '../../features/PlaylistSlice';
import { useSelector } from 'react-redux';
import SongRow from './SongRow';
import { BsPlayCircleFill, BsPauseCircleFill } from 'react-icons/bs';
import { useState } from 'react';

const Body = () => {
  const playlist = useSelector(selectPlaylist);
  const [playActive, setPlayActive] = useState(false);

  return (
    <BodyContainer id='style-4'>
      <Header/>
      <Info>
        <img src={playlist?.images[0]?.url} alt={playlist?.name} />
        <InfoText>
          <h6>PLAYLIST</h6>
          <h1>{playlist?.name}</h1>
          <p>{playlist?.description}</p>
          <span>{playlist?.owner.display_name} &#8226; {playlist?.followers.total} me gusta &#8226; {playlist?.tracks.total} canciones </span>
        </InfoText>
      </Info>

      <StartPlaylist onClick={() => setPlayActive(!playActive)}>
        {playActive ? <BsPauseCircleFill/> : <BsPlayCircleFill/>}
      </StartPlaylist>

      <Songs>
        
        {
          playlist?.tracks?.items?.map((song) => {
            return <SongRow track={song?.track} key={song?.track?.id}/> 
          })
        }
      </Songs>
    </BodyContainer>
  )
}

export default Body