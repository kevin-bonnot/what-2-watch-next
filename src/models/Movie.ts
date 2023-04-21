interface Movie {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
}

export const movieEquals = (movie1: Movie, movie2: Movie) => {
  return movie1.id === movie2.id;
};

export default Movie;