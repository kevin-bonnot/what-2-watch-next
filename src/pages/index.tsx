import { Inter } from 'next/font/google'
import {useState} from "react";
import {useFetch} from "@/hooks/useFetch";
import {AiOutlineSearch} from "react-icons/ai";
import CardContainer from "@/pages/components/CardContainer";
import styles from '@/styles/Home.module.scss';
export default function Home() {
  const [url, setUrl] = useState<string>(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=fr-FR&page=1`);

  const {data, loading, error} = useFetch<any>(url);

  const handleChangeSearch = (event: any) => {
    if (event.target.value === '') {
      setUrl(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&language=fr-FR&page=1`)
    } else  {
      setUrl(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}&query=${event.target.value}&language=fr-FR&page=1&include_adult=false`);
    }
  }

  if (error) {
    return <div>Error</div>;
  }

  return <div className={`Page ${styles.SearchPage}`}>
    <div className={styles.TextInput}>
      <input type="text" className={styles.SearchBar} onChange={handleChangeSearch} />
      <AiOutlineSearch size={25} className={styles.SearchIcon} />
    </div>
    {loading ? <div>Chargement...</div> : <CardContainer movies={data.results} />}
  </div>;
}
