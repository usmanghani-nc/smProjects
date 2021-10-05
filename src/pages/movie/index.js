import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { movieContext } from 'context';

export default function Movie({}) {
  const [state, setState] = useState({
    loading: false,
    error: null,
    movie: '',
  });

  const ctx = movieContext();

  const router = useRouter();
  const getData = async (e) => {
    e.preventDefault();

    try {
      setState({
        ...state,
        loading: true,
        error: null,
      });

      //   const { data } = await axios.get(
      //     `https://api.themoviedb.org/3/search/movie?api_key=d0a135171d58c78f1c69bcca1de4b35d&query=${state.movie}`,
      //   );

      //   ctx.setState({ data: data.results });
      //   router.push('/movie/overview');

      // router.push({
      //   pathname: '/movie/overview',
      //   query: {
      //     data: JSON.stringify(data.results),
      //   },
      // });

      router.push({
        pathname: '/movie/overview',
        query: {
          str: state.movie,
        },
      });
    } catch (e) {
      console.log(e, 'error <=== get data movies');
    }
  };

  return (
    <div>
      <form onSubmit={getData}>
        <input
          value={state.movie}
          onChange={(e) => setState({ ...state, movie: e.target.value })}
        />
        <button>Search</button>
      </form>
    </div>
  );
}
