import { useRouter } from 'next/router';
import { movieContext } from 'context';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Overview({}) {
  const router = useRouter();

  // const data = JSON.parse(router.query.data) ? JSON.parse(router.query.data) : [];

  // const ctx = movieContext();
  // console.log(ctx.state, '???');

  const [state, setState] = useState({
    loading: true,
    error: null,
    data: [],
  });

  const getData = async () => {
    if (!router.query?.str) return;

    try {
      setState({
        ...state,
        error: null,
      });

      const { data } = await axios.get(
        decodeURI(
          `https://api.themoviedb.org/3/search/movie?api_key=d0a135171d58c78f1c69bcca1de4b35d&query=${router.query.str}`,
        ),
      );

      setState({
        ...state,
        loading: false,
        error: null,
        data: data.results,
      });
    } catch (e) {
      setState({
        ...state,
        loading: false,
        error: e.message + ' error <=== get data movies',
        data: [],
      });
      console.log(e, 'error <=== get data movies');
    }
  };

  useEffect(() => {
    getData();
  }, [router.query?.str]);

  return (
    <div>
      {state.loading ? (
        <>Loading...</>
      ) : (
        state.data?.map((el) => {
          return <h1 key={Math.random()}>{el.original_title}</h1>;
        })
      )}
    </div>
  );
}
