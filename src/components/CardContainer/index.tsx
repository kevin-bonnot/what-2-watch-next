import Movie from '@/models/Movie';
import MovieCard from '@/components/MovieCard';
import styles from '@/styles/CardContainer.module.scss';

interface CardContainerProps {
    movies: Movie[];
}

const CardContainer = ({movies}: CardContainerProps) => {
  return <div className={styles.CardContainer}>
    {movies.map((movie) => <MovieCard key={movie.title + movie.id} movie={movie} />)}
  </div>;
};

export default CardContainer;
