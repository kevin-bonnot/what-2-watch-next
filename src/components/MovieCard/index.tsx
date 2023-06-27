import Show, {movieEquals} from '@/models/Show';
import {useAppDispatch, useAppSelector} from '@/utils/hooks';
import {addOrRemoveFavorite} from '@/utils/reducers/favorites/favoritesSlice';
import Link from 'next/link';
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai';
import styles from '@/styles/MovieCard.module.scss';
import Image from 'next/image';

type CardProps = {
  show: Show
}

const MovieCard = ({show}: CardProps) => {
  const favorites = useAppSelector((state: any) => state.favorites.value);
  let favorite: boolean = favorites.findIndex((m: any) => movieEquals(show, m)) >= 0;
  const dispatch = useAppDispatch();

  const clickLike = (e: any) => {
    dispatch(addOrRemoveFavorite(show));

    e.preventDefault();
  };

  return (
    <Link href={`/shows/${show.type}/${show.id}`} key={show.id} className={styles.Link}>
      <div className={styles.Card}>
        <Image className={styles.Image} width={500} height={500} src={`https://image.tmdb.org/t/p/original${show.poster_path}`} alt={show.title + '-poster'}/>
        <div className={styles.CardInfo}>
          <p className={styles.title}>{show.title}</p>
          <p className={styles.overview}>{show.overview}</p>
          <p>{show.release_date}</p>
        </div>
        <div className={styles.LikeButton} onClick={clickLike}>{favorite ? <AiFillHeart color='red' /> : <AiOutlineHeart />}</div>
      </div>
    </Link>
  );
};

export default MovieCard;
