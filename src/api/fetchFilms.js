import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = { api_key: "aef9cffb51e8fe7e1c3e621e64df0279" };

export const fetchTrendings = async () => {
  const { data } = await axios.get("/trending/movie/day?");
  return data.results;
};

export const searchMovies = async (query) => {
  const { data } = await axios.get(
    `/search/movie?language=en-US&query=${query}&page=1`
  );
  return data.results;
};

export const fetchMoviesDetails = async (id) => {
  const { data } = await axios.get(`/movie/${id}?language=en-US`);
  return data;
};

export const fetchCast = async (id) => {
  const { data } = await axios.get(`/movie/${id}/credits?language=en-US`);
  return data;
};

export const fetchReviews = async (id) => {
  const { data } = await axios.get(`/movie/${id}/reviews?page=1`);
  return data.results;
};
