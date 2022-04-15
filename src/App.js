import './App.css';
import Login from './components/Login/Login';
import Player from './components/Player/Player';
import useAuth from './useAuth' ;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { spotifyApi } from './spotifyLogic';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { SET_USER } from './features/UserSlice'

function App() {
  const dispatch = useDispatch();
  const code = new URLSearchParams(window.location.search).get('code');
  const accesToken = useAuth(code);

  useEffect(() => {
    if(accesToken){
      spotifyApi.setAccessToken(accesToken);
      spotifyApi.getMe().then(user => dispatch(SET_USER(user.body)));
    }
  }, [accesToken, dispatch])
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={accesToken ? <Player/> : <Login/>}/>
          <Route path='/playlist/:playlistId' element={<Player/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
