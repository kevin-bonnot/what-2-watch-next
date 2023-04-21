import Genre from "./Genre";

interface MovieDetails {
  adult: boolean;
  backdrop_path: string;
  budget: number;
  genres: Genre[];
  homepage: string;
  original_language: string;
  original_title: string;
  overview: string;
  release_date: Date;
  revenue: number;
  runtime: number;
  status: string;
  tagline: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  title: string;
}

export default MovieDetails;