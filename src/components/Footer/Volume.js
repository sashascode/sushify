import { FiVolume1, FiVolumeX } from "react-icons/fi"
import { useState } from 'react'
import { Input } from "./styles";

const Volume = () => {
    const [volume, setVolume] = useState(1);
    const [muted, setMuted] = useState(false);
    const finalVolume = muted ? 0 : volume ** 2;

  return (
    <>
        {muted ?  <FiVolumeX onClick={() => setMuted(false)}/> : <FiVolume1 onClick={() => setMuted(true)}/> }  
        <Input 
            type="range"
            min={0}
            max={1}
            step={0.02}
            value={volume}
            onChange={event => {
                setVolume(event.target.valueAsNumber)
            }}
        />
    </>
  )
}

export default Volume