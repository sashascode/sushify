import { SongRowContainer, SongInfo, SongInfoII, Icons } from "./styles"
import {BsPlayFill} from 'react-icons/bs'
import { useState } from "react";
import {FaHeart} from 'react-icons/fa'
import {IoIosMore} from 'react-icons/io'

const SongRow = ({track, index}) => {
  const [rowActive, setRowActive] = useState(false);

  const convertMs = (s) => {
    function addZ(n) {
	    return (n < 10 ? '0': '') + n;
	  }

	  var ms = s % 1000;
	  s = (s - ms) / 1000;
	  var secs = s % 60;
	  s = (s - secs) / 60;
	  var mins = s % 60;

	  return addZ(mins) + ':' + addZ(secs);
  };

  if(!track?.track) return null;

  return (
    <SongRowContainer onMouseEnter={() => setRowActive(true)} onMouseLeave={() => setRowActive(false)} >
      
      { rowActive ? 
        <BsPlayFill/> :
        <p className="artist" style={{fontSize: '15px', marginRight: '10px'}}>{index + 1}</p>
      }

      <img src={track?.album?.images[2]?.url} alt={track?.album?.name} />

      <SongInfo>
        <h6>{track?.name}</h6>
        <p className="artist">
          {
            track?.artists.map((artist) => artist?.name).join(", ")
          }
        </p>
      </SongInfo>

      <SongInfoII>
        <p className="artist">{track?.album?.name}</p>
        <p className="artist">{convertMs(track?.duration_ms)}</p>
      </SongInfoII>
      

      { rowActive && 
        <Icons>
          <FaHeart/>
          <IoIosMore/>
        </Icons> 
      }
    </SongRowContainer>
  )
}

export default SongRow