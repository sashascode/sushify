import { BsPlayCircleFill, BsPauseCircleFill } from 'react-icons/bs';
import { HomeContainer, CardContainer, CardLarge } from './styles';
import { selectPlaylists } from '../../features/PlaylistsSlice';
import { useSelector } from 'react-redux';

export const HomeBody = () => {
    const playlists = useSelector(selectPlaylists);
    console.log(playlists);

  return (
    <HomeContainer>
        <h1>Buenos días</h1>
        <CardContainer>
            {
                playlists.map(playlist => {
                    <CardLarge key={playlist.id}>
                        <img src={playlist.images[0].url} alt=""/>
                        <h4>{playlist.name}</h4>
                        <BsPlayCircleFill/>
                    </CardLarge>
                })
            }

        </CardContainer>
    </HomeContainer>
  )
}
