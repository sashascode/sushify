import { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectPlaylist } from '../../features/PlaylistSlice';
import { Info, InfoText, StartPlaylist, Songs } from './styles';
import SongRow from './SongRow';
import { BsPlayCircleFill, BsPauseCircleFill } from 'react-icons/bs';

export const PlaylistBody = () => {
  const playlist = useSelector(selectPlaylist);
  const [playActive, setPlayActive] = useState(false);

  return (
    <>
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
            playlist?.tracks?.items?.map((song, index) => {
                return <SongRow track={song?.track} index={index} key={song?.track?.id}/> 
            })
            }
        </Songs>
      </>
  )
}
