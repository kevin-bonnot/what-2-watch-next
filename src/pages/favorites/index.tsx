import {useAppSelector} from '@/utils/hooks';
import CardContainer from '@/components/CardContainer';

const Favorites = () => {
  const favorites = useAppSelector((state) => state.favorites.value);
  return <div className="Page FavoritePage">
    <CardContainer movies={favorites} />
  </div>;
};

export default Favorites;
