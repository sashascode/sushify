import { SidebarContainer, PlaylistsContainer } from './styles';
import { MdHomeFilled } from 'react-icons/md';
import { RiSearchLine } from 'react-icons/ri';
import { BiLibrary } from 'react-icons/bi';
import { AiFillPlusSquare } from 'react-icons/ai';
import SidebarChoice from './SidebarChoice';
import { useSelector } from 'react-redux';
import { selectPlaylists } from '../../features/PlaylistsSlice';
import { Link, NavLink } from 'react-router-dom';

const Sidebar = () => {
  const playlists = useSelector(selectPlaylists);

  return(
    <SidebarContainer>
      <img src="https://www.aldeanos.com/wp-content/uploads/2020/06/spotify-logo-branca-white.png" alt="Spotify Logo"/>

      <NavLink to={'/'} activestyle={{fontWeight: 'bold'}}>
        <SidebarChoice title='Home' Icon={MdHomeFilled}/>
      </NavLink>

      <SidebarChoice title='Search' Icon={RiSearchLine}/>

      <SidebarChoice title='Your Library' Icon={BiLibrary}/>

      <br/>

      <SidebarChoice title='Create Playlist' Icon={AiFillPlusSquare}/>
      <hr/>
      <PlaylistsContainer id='scrollbar'>
        { 
          playlists.map(playlist => {
            return(
              <Link to={`/playlist/${playlist.id}`} key={playlist?.id}>
                <SidebarChoice title={playlist?.name}/>
              </Link>
            )
          })
        }
      </PlaylistsContainer>
    </SidebarContainer>
  );
};

export default Sidebar



