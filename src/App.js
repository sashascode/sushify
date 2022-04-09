import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Login from './components/Login/Login'
import Player from './components/Player/Player';
import { getTokenFromURL } from './spotifyLogic';
import { SET_USER } from './features/UserSlice'
import SpotifyWebApi from 'spotify-web-api-node';
import { selectToken, SET_TOKEN } from './features/TokenSlice';
import { SET_PLAYLIST } from './features/PlaylistSlice';
import { selectSearch } from "./features/SearchSlice";
import { SET_SEARCH_RES } from "./features/SearchResSlice";

export const spotifyApi = new SpotifyWebApi({
  clientId: '791d855bdf4e4930a3584a4443cbe6f4',

});

function App() {
  const token = useSelector(selectToken);
  const dispatch = useDispatch();
  const search = useSelector(selectSearch);

  useEffect(() => {
    const hash = getTokenFromURL();
    window.location.hash = "";
    const _token = token ? token : hash.access_token;

    if(_token){
      dispatch(SET_TOKEN(_token));
      spotifyApi.setAccessToken(_token);
      spotifyApi.getMe().then(user => dispatch(SET_USER(user.body)));
      spotifyApi.getPlaylist('7sEvpJXGCeofCh4O5i2vf9').then(playlist => dispatch(SET_PLAYLIST(playlist.body)))
    }

    setTimeout(() => {
      dispatch(SET_TOKEN(null));
      localStorage.removeItem("token");
    }, 3600000)
    
  }, [dispatch, token]);

  useEffect(() => {
    let cancel = false;
    if(!search) dispatch(SET_SEARCH_RES([]));
    if(search && !cancel){
      spotifyApi.searchTracks(search).then(res => {
        dispatch(SET_SEARCH_RES(res.body.tracks.items));
        console.log(res);
      });
    };

    return () => cancel = true;
  }, [token, search, dispatch]);

  return (
    <div>
      { token ? <Player/> : <Login/> }
    </div>
  );
}

export default App;
