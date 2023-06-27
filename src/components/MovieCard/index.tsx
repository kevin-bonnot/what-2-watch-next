import Movie, {movieEquals} from '@/models/Movie';
import {useAppDispatch, useAppSelector} from '@/utils/hooks';
import {addOrRemoveFavorite} from '@/utils/reducers/favorites/favoritesSlice';
import Link from 'next/link';
import {AiFillHeart, AiOutlineHeart} from 'react-icons/ai';
import styles from '@/styles/MovieCard.module.scss';
import Image from 'next/image';

type CardProps = {
    movie: Movie,
}

const MovieCard = ({movie}: CardProps) => {
  const favorites = useAppSelector((state: any) => state.favorites.value);
  let favorite: boolean = favorites.findIndex((m: any) => movieEquals(movie, m)) >= 0;
  const dispatch = useAppDispatch();

  const clickLike = (e: any) => {
    dispatch(addOrRemoveFavorite(movie));

    e.preventDefault();
  };

  return (
    <Link href={`/movies/${movie.id}`} key={movie.id} className={styles.Link}>
      <div className={styles.Card}>
        <Image className={styles.Image} width={500} height={500} src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie.title + '-poster'}/>
        <div className={styles.CardInfo}>
          <p className={styles.title}>{movie.title}</p>
          <p className={styles.overview}>{movie.overview}</p>
          <p>{movie.release_date}</p>
        </div>
        <div className={styles.LikeButton} onClick={clickLike}>{favorite ? <AiFillHeart color='red' /> : <AiOutlineHeart />}</div>
      </div>
    </Link>
  );
};

export default MovieCard;
