import {useRouter} from 'next/router';

const Movie = () => {
  const { query: { id } } = useRouter();

  return <div>{id}</div>;
};

export default Movie;
