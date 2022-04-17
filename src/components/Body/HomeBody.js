import { HomeContainer, CardContainer } from './styles';
import { useSelector } from 'react-redux';
import { selectRecommendations } from '../../features/RecommendationsSlice';
import { Recommendations } from './Recommendations';

export const HomeBody = () => {
    const recommendations = useSelector(selectRecommendations);

  return (
    <HomeContainer>
        <h1>Buenos días</h1>
        <CardContainer>
            {
                recommendations?.recommendations?.map(track => 
                    <Recommendations key={track?.id} img={track?.album?.images[2]?.url} name={track?.name}/>   
                )
            }
        </CardContainer>
    </HomeContainer>
  )
}
