import { HeaderContainer, HeaderLeft, HeaderRight } from "./styles"
import { TiArrowSortedDown, TiArrowSortedUp } from 'react-icons/ti'
import { RiSearchLine } from 'react-icons/ri'
import { useSelector } from "react-redux"
import { selectUser } from "../../features/UserSlice"
import { useState } from "react"

export const Header = () => {
  const user = useSelector(selectUser);
  const [selected, setSelected] = useState(false);

  const handleOnClick = () => {
    setSelected(!selected);
  }

  return (
    <HeaderContainer>
        <HeaderLeft>
            <RiSearchLine/>
            <input type='text' placeholder="Search for Artist, Songs, or other"/>
        </HeaderLeft>
        <HeaderRight>
          <div onClick={ handleOnClick}>
            <img src={user?.images[0].url} alt='user icon'/>
            <h5>{ user?.display_name}</h5>
            { selected ? <TiArrowSortedUp style={{color: '#fff'}}/> : <TiArrowSortedDown style={{color: '#fff'}}/> }
          </div>
          <ul style={{color: '#fff'}} className={selected ? 'show' : 'hidden'}>
            <li> 
              <button>Logout</button>
            </li> 
          </ul>
        </HeaderRight>
    </HeaderContainer>
  )
}

