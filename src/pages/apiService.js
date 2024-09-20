// const API_KEY = 'YOUR_TMDB_API_KEY';84db7072f27cac86d7067294c8ec6850
const API_KEY = '84db7072f27cac86d7067294c8ec6850';
const BASE_URL = 'https://api.themoviedb.org/3';



export const fetchTrendingMovies = async () => {
  const response = await fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const fetchNowPlayingMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const fetchTopRatedMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/top_rated?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const fetchPopularTvShows = async () => {
  const response = await fetch(`${BASE_URL}/tv/popular?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const fetchOnTheAirTvShows = async () => {
  const response = await fetch(`${BASE_URL}/tv/on_the_air?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};
