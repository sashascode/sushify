import { useEffect, useState } from 'react';
import './App.css';
import Login from './components/Login/Login'
import Player from './components/Player/Player';
import { getTokenFromURL } from './spotifyLogic'

function App() {
  const [token, setToken] = useState('');

  useEffect(() => {
    const hash = getTokenFromURL();
    window.location.hash = "";
    const _token = hash.access_token;
    setToken(_token);
    console.log(token);
  }, [])

  return (
    <div>
      { token ? <Player/> : <Login/> }
    </div>
  );
}

export default App;
