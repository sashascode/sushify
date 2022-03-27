import { HeaderContainer, HeaderLeft, HeaderRight } from "./styles"
import { RiSearchLine } from 'react-icons/ri'
import { BsPersonCircle } from 'react-icons/bs'

export const Header = () => {
  return (
    <HeaderContainer>
        <HeaderLeft>
            <RiSearchLine/>
            <input type='text' placeholder="Search for Artist, Songs, or other"/>
        </HeaderLeft>
        <HeaderRight>
            <BsPersonCircle/>
            <h5>Sushi Racagni</h5>
        </HeaderRight>
    </HeaderContainer>
  )
}

