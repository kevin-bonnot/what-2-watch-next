import {useState} from 'react';
import {useFetch} from '@/hooks/useFetch';
import {AiOutlineSearch} from 'react-icons/ai';
import CardContainer from '@/components/CardContainer';
import styles from '@/styles/Home.module.scss';
import {dbToShows} from '@/models/TVShow';
import {moviesToShows} from '@/models/Show';
export default function Home() {
  const initialMovieURL = `https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=fr-FR&page=1`;
  const initialTvURL = `https://api.themoviedb.org/3/trending/tv/week?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=fr-FR&page=1`;

  const [movieURL, setMovieURL] = useState<string>(initialMovieURL);
  const [tvURL, setTvURL] = useState<string>(initialTvURL);

  const fetchMovie = useFetch<any>(movieURL);
  const fetchTV = useFetch<any>(tvURL);

  const handleChangeSearch = (event: any) => {
    if (event.target.value === '') {
      setMovieURL(initialMovieURL);
      setTvURL(initialTvURL);
    } else  {
      setMovieURL(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&query=${event.target.value}&language=fr-FR&page=1&include_adult=false`);
      setTvURL(`https://api.themoviedb.org/3/search/tv?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&query=${event.target.value}&language=fr-FR&page=1&include_adult=false`);
    }
  };

  if (fetchMovie.error) {
    return <div>Error</div>;
  }

  return <div className={`Page ${styles.SearchPage}`}>
    <div className={styles.TextInput}>
      <input type="text" className={styles.SearchBar} onChange={handleChangeSearch} />
      <AiOutlineSearch size={25} className={styles.SearchIcon} />
    </div>
    <div className={styles.MainContainer}>
      <div className={styles.TVShows}>
        <h2>Séries</h2>
        {fetchTV.loading ? <p>Chargement ...</p> : <CardContainer movies={dbToShows(fetchTV.data.results)}/>}
      </div>
      <div className={styles.Movies}>
        <h2>Films</h2>
        {fetchMovie.loading ? <p>Chargement ...</p> : <CardContainer movies={moviesToShows(fetchMovie.data.results)}/>}
      </div>
    </div>
  </div>;
}
