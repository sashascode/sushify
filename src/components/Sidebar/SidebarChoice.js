import { Choices } from "./styles"
import { spotifyApi  } from "../../spotifyLogic"
import { SET_PLAYLIST } from '../../features/PlaylistSlice'
import { useDispatch } from 'react-redux'

const SidebarChoice = ({title, Icon = null, id}) => {
  const dispatch = useDispatch();

  const handleClick = (id) => {
    if(id){
      spotifyApi.getPlaylist(id).then(playlist => dispatch(SET_PLAYLIST(playlist.body)))
    }
  }

  return (
    <Choices>
      { Icon && <Icon/> }
      { Icon ? <h5>{title}</h5> : <p onClick={() => handleClick(id)}>{title}</p>} 
    </Choices>
  )
}

export default SidebarChoice