import { SongRowContainer, SongInfo } from "./styles"
import {BsPlayFill} from 'react-icons/bs'
// import {FaHeart} from 'react-icons/fa'
// import {IoIosMore} from 'react-icons/io'

const SongRow = ({track}) => {
  return (
    <SongRowContainer>
      <BsPlayFill/>
      <img src={track.album.images[0].url} alt={track.album.name} />
      <SongInfo>
        <h6>{track.name}</h6>
        <p className="artist">
          {
            track.artists.map(artist => artist.name).join(", ")
          }
        </p>
      </SongInfo>
      {/* <Icons>
          <FaHeart/>
          <IoIosMore/>
      </Icons> */}
    </SongRowContainer>
  )
}

export default SongRow