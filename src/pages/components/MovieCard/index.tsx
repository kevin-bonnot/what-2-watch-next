import Movie, {movieEquals} from "@/models/Movie";
import {useAppDispatch, useAppSelector} from "@/utils/hooks";
import {addOrRemoveFavorite} from "@/utils/reducers/favorites/favoritesSlice";
import Link from "next/link";
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";
import styles from '@/styles/MovieCard.module.scss'

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
  }

  return (
    <Link href={`/movies/${movie.id}`} key={movie.id} className={styles.Link}>
      <div className={styles.Card}>
        <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt=""/>
        <p className={styles.title}>{movie.title}</p>
        <p className={styles.overview}>{movie.overview}</p>
        <p>{movie.release_date}</p>
        <div className={styles.LikeButton} onClick={clickLike}>{favorite ? <AiFillHeart color='red' /> : <AiOutlineHeart />}</div>
      </div>
    </Link>
  );
};

export default MovieCard;
