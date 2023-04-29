import axios from 'axios';
const API_KEY = '2312830e6f848d2a7194ede59058ec48';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

// const axios = require('axios');

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  //   timeout: 1000,
});

export const getTrendingMovies = async () => {
  let data;
  try {
    //   const trendingMovies = await api
    await api.get(`/trending/all/day?api_key=${API_KEY}`).then(response => {
      // console.log(response.data.results);
      data = response.data.results;
    });
    // console.log(data);
    return data;
  } catch (error) {
    console.log(error);
  }
};
