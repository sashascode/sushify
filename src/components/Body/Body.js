import { BodyContainer } from './styles';
import { Header } from './Header';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { spotifyApi } from '../../spotifyLogic';
import { useDispatch } from 'react-redux';
import { SET_PLAYLIST } from '../../features/PlaylistSlice';
import { PlaylistBody } from './PlaylistBody';

const Body = ({accesToken}) => {
  const {playlistId} = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if(playlistId){
    spotifyApi.setAccessToken(accesToken);
    spotifyApi.getPlaylist(playlistId).then(playlist => dispatch(SET_PLAYLIST(playlist.body)));
    return (() => {
      SET_PLAYLIST();
    });
    }
  }, [playlistId, dispatch]);
  
  return (
    <BodyContainer id='scrollbar'>
      <Header/>
      {playlistId && <PlaylistBody/>}
    </BodyContainer>
  );
}

export default Body