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
import { selectSearch, selectSearchResults, SET_SEARCH_RESULTS } from './features/SearchSlice';


const spotifyApi = new SpotifyWebApi({
  clientId: '791d855bdf4e4930a3584a4443cbe6f4',

});

function App() {
  const token = useSelector(selectToken);
  const dispatch = useDispatch();

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


  return (
    <div>
      { token ? <Player/> : <Login/> }
    </div>
  );
}

export default App;
