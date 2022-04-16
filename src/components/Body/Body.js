import { BodyContainer } from './styles';
import { Header } from './Header';
import { useParams } from 'react-router-dom';
import { PlaylistBody } from './PlaylistBody';
import { HomeBody } from './HomeBody';

const Body = () => {
  const {playlistId} = useParams();
  
  return (
    <BodyContainer id='scrollbar'>
      <Header/>
      
      {playlistId ? <PlaylistBody/> : <HomeBody/>}
    </BodyContainer>
  );
}

export default Body