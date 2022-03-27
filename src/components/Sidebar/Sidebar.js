import { SidebarContainer } from './styles'
import { MdHomeFilled } from 'react-icons/md'
import { RiSearchLine } from 'react-icons/ri'
import { BiLibrary } from 'react-icons/bi'
import { AiFillPlusSquare } from 'react-icons/ai'
import SidebarChoice from './SidebarChoice'


const Sidebar = () => {
  return (
    <SidebarContainer>
      <img src="https://www.aldeanos.com/wp-content/uploads/2020/06/spotify-logo-branca-white.png" alt="Spotify Logo"/>
      <SidebarChoice title='Home' Icon={MdHomeFilled}/>
      <SidebarChoice title='Search' Icon={RiSearchLine}/>
      <SidebarChoice title='Your Library' Icon={BiLibrary}/>
      <br/>
      <SidebarChoice title='Create Playlist' Icon={AiFillPlusSquare}/>
      <hr/>
      <SidebarChoice title='that pretty MF'/>
      <SidebarChoice title='sushi chill lounge'/>
      <SidebarChoice title='wish you were here'/>
    </SidebarContainer>

  )
}

export default Sidebar