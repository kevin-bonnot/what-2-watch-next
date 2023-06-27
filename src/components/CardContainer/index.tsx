import Show from '@/models/Show';
import MovieCard from '@/components/MovieCard';
import styles from '@/styles/CardContainer.module.scss';

interface CardContainerProps {
    movies: Show[];
}

const CardContainer = ({movies}: CardContainerProps) => {
  return <div className={styles.CardContainer}>
    {movies.map((movie) => <MovieCard key={movie.title + movie.id} show={movie} />)}
  </div>;
};

export default CardContainer;
