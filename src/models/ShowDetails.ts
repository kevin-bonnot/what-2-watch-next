import Genre from './Genre';

interface ShowDetails {
  backdrop_path: string;
  genres: Genre[];
  original_title: string;
  overview: string;
  release_date: Date;
  vote_average: number;
  title: string;
}

interface TvDetails {
  backdrop_path: string;
  genres: Genre[];
  original_name: string;
  overview: string;
  first_air_date: Date;
  vote_average: number;
  name: string;
}

export const toShow = (tv: TvDetails) => {
  const show: ShowDetails = {...tv, title: tv.name, release_date: tv.first_air_date, original_title: tv.original_name};
  return show;
};

export default ShowDetails;