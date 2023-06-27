interface Show {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
  type: 'movie' | 'tv';
}

export const movieEquals = (movie1: Show, movie2: Show) => {
  return movie1.id === movie2.id;
};

export const moviesToShows = (movies: Show[]) => movies.map(movie => {
  movie.type= 'movie';
  return movie;
});

export default Show;