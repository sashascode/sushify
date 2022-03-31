import {FooterContainer, FooterLeft, FooterCenter, FooterRight } from './styles'
import {TiArrowShuffle} from 'react-icons/ti'
import {BiRepeat} from 'react-icons/bi'
import {RiPlayListFill} from 'react-icons/ri'
import {BsFillSkipStartFill, BsFillSkipEndFill, BsPlayCircleFill} from 'react-icons/bs'
import Volume from './Volume'

const Footer = () => {
  return (
    <FooterContainer> 
      <FooterLeft>
      <img src="https://upload.wikimedia.org/wikipedia/en/e/e5/ASAP_Rocky_%E2%80%93_Sundress.png" alt="Sundress - A$AP ROCKY"/>
      <div>
        <h6>Sundress</h6>
        <span><p>A$AP Rocky</p></span>
      </div>
      </FooterLeft>
      <FooterCenter>
        <TiArrowShuffle className='shuffle'/>
        <BsFillSkipStartFill className='icon'/>
        <span><BsPlayCircleFill className='icon'/></span>
        <BsFillSkipEndFill className='icon'/>
        <BiRepeat className='repeat'/>
      </FooterCenter>
      <FooterRight>
        <RiPlayListFill/>
        <Volume/>
      </FooterRight>
    </FooterContainer>
  )
}

export default Footer