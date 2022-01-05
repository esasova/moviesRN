import axios from "axios";

const api_url = process.env.API_URL
const api_key = 'api_key=' + process.env.API_KEY

export const getPopularMovies = async () => {
  const result = await axios.get(
    `${api_url}/movie/popular?${api_key}`
  );
  return result.data.results;
};


export const getUpcomingMovies = async () => {
  const result = await axios.get(
    `${api_url}/movie/upcoming?${api_key}`
  );
  return result.data.results;
};
export const getPopularTv = async () => {
  const result = await axios.get(
    `${api_url}/tv/popular?${api_key}`
  );
  return result.data.results;
};
// Get Family Movies
export const getFamilyMovies = async () => {
  const resp = await axios.get(
    `${api_url}/discover/movie?${api_key}&with_genres=10751`,
  );
  return resp.data.results;
};

// Get Documnetery Movies
export const getDocumentaryMovies = async () => {
  const resp = await axios.get(
    `${api_url}/discover/movie?${api_key}&with_genres=99`,
  );
  return resp.data.results;
};

// Get Movie by ID
export const getMovieById = async (id) => {
  const res = await axios.get(
    `${api_url}/movie/${id}?${api_key}`
  );
  return res.data;
}
