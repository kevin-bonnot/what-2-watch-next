import ShowDetails, {toShow} from '@/models/ShowDetails';
import styles from '@/styles/Movie.module.scss';

export const getServerSideProps = async ({query: {slug}}: {query: {slug: string[]}}) => {
  const res = await fetch(`https://api.themoviedb.org/3/${slug[0]}/${slug[1]}?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=fr-FR`);
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

  const show = toShow(data);

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
      <h2>{show.title}</h2>
      <span className={`${styles.Rating} ${getRateClass(show.vote_average)}`}>{Math.floor(show.vote_average! * 10) / 10}</span>
    </div>
    <div className={styles.BadgeContainer}>
      {show.genres.map(genre => <span className={styles.Badge} key={`genre-${genre.id}`}>{genre.name}</span>)}
    </div>
    <div>
      <img className={styles.DetailsImage} src={`https://image.tmdb.org/t/p/original${show.backdrop_path}`} alt={'img'} />
    </div>
    <p><b>Titre original : </b>{show.original_title}</p>
    <p>{show.overview}</p>

  </div>;
};

export default Movie;
