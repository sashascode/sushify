import { useState } from 'react';
import { BsPlayCircleFill, BsPauseCircleFill } from 'react-icons/bs';
import { CardLarge } from './styles';

export const Recommendations = ({img, name}) => {
    const [cardActive, setCardActive] = useState(false);

  return (
    <CardLarge onMouseEnter={() => setCardActive(true)} onMouseLeave={() => setCardActive(false)}>
        <img src={img} alt={name}/>
        <h4>{name}</h4>
        <span>{cardActive && <BsPlayCircleFill/>}</span>
    </CardLarge>     
  
  )
}
