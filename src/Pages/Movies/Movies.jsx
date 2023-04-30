import { useSearchParams, useLocation } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import { useEffect, useState } from 'react';
import { searchMovie } from 'api/api';
import MoviesSection from 'components/MoviesSection/MoviesSection';

const Movies = () => {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams('');
  const location = useLocation();
  // const searchedName = searchParams.get('query') ?? '';

  const updateQueryString = query => {
    if (!query) {
      return;
    }
    const nextParams = query !== '' ? { query } : {};
    // return nextParams;
    setSearchParams(nextParams);
  };

  useEffect(() => {
    if (!searchParams.get('query')) {
      return;
    }
    try {
      const getSearch = async () => {
        console.log('fetching');
        setSearchedMovies(await searchMovie(searchParams));
      };
      getSearch();
    } catch (error) {
      console.log(error);
    }
  }, [searchParams]);

  return (
    <main>
      <h2>Movies</h2>
      <Formik
        initialValues={{ query: '' }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            updateQueryString(String(values.query.trim().toLocaleLowerCase()));
            // setSearchParams(updateQueryString().trim().toLocaleLowerCase());
            setSubmitting(false);
          }, 200);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field
              type="text"
              name="query"
              // value={searchedName}
              // onChange={e => updateQueryString(e.target.value)}
            />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
      <MoviesSection movies={searchedMovies} location={location} />
    </main>
  );
};

export default Movies;
