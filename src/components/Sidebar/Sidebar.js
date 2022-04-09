import { useEffect } from 'react'
import { SidebarContainer } from './styles'
import { MdHomeFilled } from 'react-icons/md'
import { RiSearchLine } from 'react-icons/ri'
import { BiLibrary } from 'react-icons/bi'
import { AiFillPlusSquare } from 'react-icons/ai'
import SidebarChoice from './SidebarChoice'
import { useDispatch, useSelector } from 'react-redux'
import { selectPlaylists, SET_PLAYLISTS } from '../../features/PlaylistsSlice'
import { selectUser } from '../../features/UserSlice'
import { spotifyApi } from '../../App'

const Sidebar = () => {
  const dispatch = useDispatch();
  const playlists = useSelector(selectPlaylists);
  const user = useSelector(selectUser);
  console.log(user)
  console.log(playlists)

  useEffect(() => {
    spotifyApi.getUserPlaylists(user?.id)
    .then(res => dispatch(SET_PLAYLISTS(res.body.items)))
  }, [user, dispatch])

  return (
    <SidebarContainer>
      <img src="https://www.aldeanos.com/wp-content/uploads/2020/06/spotify-logo-branca-white.png" alt="Spotify Logo"/>
      <SidebarChoice title='Home' Icon={MdHomeFilled}/>
      <SidebarChoice title='Search' Icon={RiSearchLine}/>
      <SidebarChoice title='Your Library' Icon={BiLibrary}/>
      <br/>
      <SidebarChoice title='Create Playlist' Icon={AiFillPlusSquare}/>
      <hr/>
      { playlists.map(playlist => {
        return <SidebarChoice key={playlist.id} title={playlist?.name}/>
      }) 
      } 
      
    </SidebarContainer>

  )
}

export default Sidebar