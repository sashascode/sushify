import './App.css';
import Login from './components/Login/Login';
import Player from './components/Player/Player';
import useAuth from './useAuth' ;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { spotifyApi } from './spotifyLogic';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { SET_USER } from './features/UserSlice'
import { SET_ACCESS_TOKEN } from './features/AccessTokenSlice';

function App() {
  const dispatch = useDispatch();
  const code = new URLSearchParams(window.location.search).get('code');
  const accesToken = useAuth(code);

  useEffect(() => {
    if(accesToken){
      spotifyApi.setAccessToken(accesToken);
      dispatch(SET_ACCESS_TOKEN(accesToken));
      spotifyApi.getMe().then(user => dispatch(SET_USER(user.body)));
    }
  }, [accesToken, dispatch]);
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={accesToken ? <Player/> : <Login/>}/>
          <Route path='/playlist/:playlistId' element={<Player accesToken={accesToken}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
