import './App.css';
import { spotifyApi } from './spotifyLogic';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Login from './components/Login/Login'
import Player from './components/Player/Player';
import { getTokenFromURL } from './spotifyLogic';
import { SET_USER } from './features/UserSlice'
import { selectToken, SET_TOKEN } from './features/TokenSlice';
import { selectSearch } from "./features/SearchSlice";
import { SET_SEARCH_RES } from "./features/SearchResSlice";

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
