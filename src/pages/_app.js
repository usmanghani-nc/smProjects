import '../../scss/app.scss';
import MovieContext from 'context';

function MyApp({ Component, pageProps }) {
  return (
    <MovieContext>
      <Component {...pageProps} />
    </MovieContext>
  );
}

export default MyApp;
