import { HeaderContainer, HeaderLeft, HeaderRight } from "./styles"
import { RiSearchLine } from 'react-icons/ri'
import { useSelector } from "react-redux"
import { selectUser } from "../../features/UserSlice"

export const Header = () => {
  const user = useSelector(selectUser);

  return (
    <HeaderContainer>
        <HeaderLeft>
            <RiSearchLine/>
            <input type='text' placeholder="Search for Artist, Songs, or other"/>
        </HeaderLeft>
        <HeaderRight>
          <div>
            <img src={user?.images[0].url} alt='user icon'/>
            <h5>{ user?.display_name}</h5>
          </div>
        </HeaderRight>
    </HeaderContainer>
  )
}

