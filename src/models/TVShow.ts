import Show from '@/models/Show';

interface TVShow {
  id: number;
  name: string;
  poster_path: string;
  overview: string;
  first_air_date: string;
}

export const dbToShows = (tvs: TVShow[]) => tvs.map(tv => toShow(tv));

const toShow = (tv: TVShow) => {
  const show: Show = {...tv, title: tv.name, release_date: tv.first_air_date, type: 'tv'};
  return show;
};


export default TVShow;