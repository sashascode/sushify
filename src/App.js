import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './components/Login/Login'
import Player from './components/Player/Player';
import { spotifyApi } from './spotifyLogic';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SET_USER } from './features/UserSlice'
import { selectToken, SET_TOKEN } from './features/TokenSlice';
import { selectSearch } from "./features/SearchSlice";
import { SET_SEARCH_RES } from "./features/SearchResSlice";
import useAuth from './useAuth' 

function App() {
  const token = useSelector(selectToken);
  const dispatch = useDispatch();
  const search = useSelector(selectSearch);
  const code = new URLSearchParams(window.location.search).get('code');
  const accesToken = useAuth(code);

  useEffect(() => {
    if(accesToken){
      dispatch(SET_TOKEN(accesToken));
      spotifyApi.setAccessToken(accesToken);
      spotifyApi.getMe().then(user => dispatch(SET_USER(user.body)));
    }
  }, [accesToken, dispatch])

  useEffect(() => {
    let cancel = false;
    if(!search) dispatch(SET_SEARCH_RES([]));
    if(search && !cancel){
      spotifyApi.searchTracks(search).then(res => {
        dispatch(SET_SEARCH_RES(res.body.tracks.items));
      });
    };

    return () => cancel = true;
  }, [search, dispatch]);
  
  return (
    <div>
      <BrowserRouter>
        { token ? 
          <Player/>
          : 
          <Login/>
        }
        <Routes>
          <Route path='/playlist/:playlistId' element={<Player/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
