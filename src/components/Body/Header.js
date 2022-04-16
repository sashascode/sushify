import { useState, useEffect } from "react";
import { spotifyApi } from "../../spotifyLogic";
import { HeaderContainer, HeaderLeft, HeaderRight } from "./styles";
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti';
import { RiSearchLine } from 'react-icons/ri';
import { useSelector, useDispatch } from "react-redux";
import { selectUser, SET_USER } from "../../features/UserSlice";
import { selectSearch, SET_SEARCH } from "../../features/SearchSlice";
import { SET_SEARCH_RES } from "../../features/SearchResSlice";

export const Header = () => {
  const user = useSelector(selectUser);
  const search = useSelector(selectSearch);
  const dispatch = useDispatch();
  const [selected, setSelected] = useState(false);

  const handleOnClick = () => {
    setSelected(!selected);
  };

  const handleLogout = () => {
    localStorage.removeItem("accesToken");
    window.location = "/";
    dispatch(SET_USER(null));
  };

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
    <HeaderContainer>
        <HeaderLeft>
            <RiSearchLine/>
            <input 
              type='text' 
              placeholder="Search for Artist, Songs, or other" 
              value={search} 
              onChange={({target}) => dispatch(SET_SEARCH(target.value))}
            />
        </HeaderLeft>
        <HeaderRight>
          <div onClick={ handleOnClick }>
            <img src={ user?.images[0].url } alt='user icon'/>
            <h5>{ user?.display_name }</h5>
            { selected ? <TiArrowSortedUp style={{color: '#fff'}}/> : <TiArrowSortedDown style={{color: '#fff'}}/> }
          </div>
          <ul style={{color: '#fff'}} className={selected ? 'show' : 'hidden'}>
            <li> 
              <button onClick={ handleLogout }>Logout</button>
            </li> 
          </ul>
        </HeaderRight>
    </HeaderContainer>
  )
}

