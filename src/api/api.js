import axios from 'axios';
const API_KEY = '2312830e6f848d2a7194ede59058ec48';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  //   timeout: 1000,
});

export const getTrendingMovies = async () => {
  let data;
  try {
    //   const trendingMovies = await api
    await api.get(`/trending/movie/week?api_key=${API_KEY}`).then(response => {
      // console.log(response.data.results);
      data = response.data.results;
    });
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieByID = async id => {
  let data;
  try {
    await api
      .get(
        `/movie/${id}?api_key=${API_KEY}&language=en-US&append_to_response=videos`
      )
      .then(response => {
        data = response;
      });
    // console.log(data.data);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieCast = async id => {
  let data;
  try {
    await api
      .get(`/movie/${id}/credits?api_key=${API_KEY}&language=en-US`)
      .then(response => (data = response.data.cast));
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getMovieReviews = async id => {
  let data;
  try {
    await api
      .get(`/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`)
      .then(response => {
        data = response.data.results;
      });
    return data;
    // console.log(data);
  } catch (error) {
    console.log(error);
  }
};
