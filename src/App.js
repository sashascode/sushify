import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Login from './components/Login/Login'
import Player from './components/Player/Player';
import { getTokenFromURL } from './spotifyLogic';
import { selectUser, SET_USER } from './features/UserSlice'
import SpotifyWebApi from 'spotify-web-api-js';
import { SET_TOKEN } from './features/TokenSlice';
import { SET_PLAYLIST } from './features/PlaylistSlice';


const spotify = new SpotifyWebApi();

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const hash = getTokenFromURL();
    const _token = hash.access_token;

    if(_token){
      dispatch(SET_TOKEN(_token));
      spotify.setAccessToken(_token);
      spotify.getMe().then(user => dispatch(SET_USER(user)));
      spotify.getPlaylist('7sEvpJXGCeofCh4O5i2vf9').then(playlist => dispatch(SET_PLAYLIST(playlist)))
    }
    
  }, [dispatch])

  return (
    <div>
      { user ? <Player/> : <Login/> }
    </div>
  );
}

export default App;
