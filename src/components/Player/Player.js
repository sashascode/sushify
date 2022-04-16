import { SpotifyBody } from './styles'
import Sidebar from '../Sidebar/Sidebar'
import Body from '../Body/Body'
import Footer from '../Footer/Footer'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { spotifyApi } from '../../spotifyLogic'
import { SET_PLAYLIST } from '../../features/PlaylistSlice'
import { SET_PLAYLISTS } from '../../features/PlaylistsSlice'
import { selectUser } from '../../features/UserSlice'
import { useSelector } from 'react-redux'

const Player = ({accesToken}) => {
  const dispatch = useDispatch();
  const {playlistId} = useParams();
  const user = useSelector(selectUser);

  useEffect(() => {
    if(playlistId){
    spotifyApi.setAccessToken(accesToken);
    spotifyApi.getPlaylist(playlistId).then(playlist => dispatch(SET_PLAYLIST(playlist.body)));
    return (() => {
      SET_PLAYLIST();
    });
    }
  }, [playlistId, dispatch, accesToken]);

  useEffect(() => {
    spotifyApi.getUserPlaylists(user?.id)
    .then(res => dispatch(SET_PLAYLISTS(res.body.items)));
  }, [user, dispatch]);

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