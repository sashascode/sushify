import './App.css';
import Login from './components/Login/Login';
import Player from './components/Player/Player';
import useAuth from './useAuth' ;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { spotifyApi } from './spotifyLogic';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { SET_USER } from './features/UserSlice'
import { selectToken, SET_TOKEN } from './features/TokenSlice';

function App() {
  const token = useSelector(selectToken);
  const dispatch = useDispatch();
  const code = new URLSearchParams(window.location.search).get('code');
  const accesToken = useAuth(code);

  useEffect(() => {
    if(accesToken){
      dispatch(SET_TOKEN(accesToken));
      spotifyApi.setAccessToken(accesToken);
      spotifyApi.getMe().then(user => dispatch(SET_USER(user.body)));
    }
  }, [accesToken, dispatch])

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
