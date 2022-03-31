import { BodyContainer, Info, InfoText, Songs } from './styles'
import { Header } from './Header'
import { selectPlaylist } from '../../features/PlaylistSlice';
import { useSelector } from 'react-redux';
import SongRow from './SongRow'

const Body = () => {
  const playlist = useSelector(selectPlaylist);

  return (
    <BodyContainer>
      <Header/>
      <Info>
        <img src={playlist?.images[0]?.url} alt={playlist?.name} />
        <InfoText>
          <h6>PLAYLIST</h6>
          <h1>{playlist?.name}</h1>
          <p>{playlist?.description}</p>
          <p>{playlist?.owner.display_name} &#8226; {playlist?.followers.total} me gusta &#8226; {playlist?.tracks.total} canciones </p>
        </InfoText>
      </Info>

      <Songs>
        
        {
          playlist?.tracks?.items?.map((song) => {
            return <SongRow track={song.track} key={song.track.id}/> 
          })
        }
      </Songs>
    </BodyContainer>
  )
}

export default Body