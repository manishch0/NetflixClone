const API_kEY = "a814f0fe6742acc0df7a36cbcfde9078";
// const API_kEY = "19f84e11932abbc79e6d83f82d61045";
// const API_KEY = "0501b4ae8587ab7d28d999e6535290b5";
// const API_kEY = "0501b4ae8587ab7d28d999e6535290b5";

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_kEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_kEY}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_kEY}&language=en-Us`,
  fetchActionMovies: `/discover/movie?api_key=${API_kEY}&with_genres=28`,
  fetchComdeyMovies: `/discover/movie?api_key=${API_kEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_kEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_kEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_kEY}&with_genres=28`,
};
export default requests;
