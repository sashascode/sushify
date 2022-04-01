import {FooterContainer, FooterLeft, FooterCenter, FooterRight } from './styles'
import {TiArrowShuffle} from 'react-icons/ti'
import {BiRepeat} from 'react-icons/bi'
import {RiPlayListFill} from 'react-icons/ri'
import {BsFillSkipStartFill, BsFillSkipEndFill, BsPlayCircleFill, BsPauseCircleFill} from 'react-icons/bs'
import Volume from './Volume'
import { useState } from 'react'

const Footer = () => {
  const [isShuffleActive, setIsShuffleActive] = useState(false);
  const [isRepeatActive, setIsRepeatActive] = useState(false);
  const [isPlayActive, setIsPlayActive] = useState(false);
  const [isPlaylistActive, setIsPlaylistActive] = useState(false);

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
        <TiArrowShuffle className={isShuffleActive ? 'shuffle-active' : 'shuffle'} onClick={() => setIsShuffleActive(!isShuffleActive)}/>
        <BsFillSkipStartFill className='icon'/>
        <span className='play' onClick={() => setIsPlayActive(!isPlayActive)}>{ isPlayActive ? <BsPauseCircleFill/> : <BsPlayCircleFill/>}</span>
        <BsFillSkipEndFill className='icon'/>
        <BiRepeat className={isRepeatActive ? 'repeat-active' : 'repeat'} onClick={() => setIsRepeatActive(!isRepeatActive)}/>
      </FooterCenter>
      <FooterRight>
        <RiPlayListFill className={isPlaylistActive ? 'playlist-active' : 'playlist'} onClick={() => setIsPlaylistActive(!isPlaylistActive)}/>
        <Volume/>
      </FooterRight>
    </FooterContainer>
  )
}

export default Footer