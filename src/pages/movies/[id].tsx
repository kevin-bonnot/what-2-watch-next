import {useFetch} from '@/hooks/useFetch';
import MovieDetails from '@/models/MovieDetails';
import styles from '@/styles/Movie.module.scss';
import {useRouter} from 'next/router';

export const getServerSideProps = async ({query: {id}}: {query: {id: string}}) => {
  const res = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=fr-FR`);
  const data = await res.json();

  return { props: { data } };
};

const Movie = ({ data }: {data: any}) => {

  if (!!data.status_message && !data.success) {
    return <div>Erreur</div>;
  }

  if (!data) {
    return <div>Chargement</div>;
  }

  const movie = data as MovieDetails;

  const getRateClass = (vote_average: number | undefined) => {
    if (vote_average! >= 8) {
      return styles.RatingVeryHigh;
    }
    if (vote_average! >= 7) {
      return styles.RatingHigh;
    }
    if (vote_average! >= 6) {
      return styles.RatingMiddle;
    }
    if (vote_average! >=4) {
      return styles.RatingLow;
    }
    return styles.RatingVeryLow;
  };

  return <div className={styles.Page}>
    <div className={styles.DetailsHeader}>
      <h2>{data?.title}</h2>
      <span className={`${styles.Rating} ${getRateClass(movie.vote_average)}`}>{Math.floor(movie.vote_average! * 10) / 10}</span>
    </div>
    <div className={styles.BadgeContainer}>
      {movie.genres.map(genre => <span className={styles.Badge} key={`genre-${genre.id}`}>{genre.name}</span>)}
    </div>
    <div>
      <img className={styles.DetailsImage} src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={'img'} />
    </div>
    <p><b>Titre original : </b>{movie.original_title}</p>
    <p>{movie.overview}</p>

  </div>;
};

export default Movie;
