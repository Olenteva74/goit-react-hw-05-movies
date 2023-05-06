import axios from 'axios';

axios.defaults.baseURL = "https://api.themoviedb.org/3";
const API_KEY = "e98410c25baf2ff3de686d97b54c3d86";

export const fetchTrendingMovies = async () => {
    const response = await axios.get("/trending/all/day", {
        params: {
            api_key: API_KEY
        }
    });

    return response.data.results;
};

export const fetchMovieById = async (movie_id) => {
    const response = await axios.get(`/movie/${movie_id}`, {
        params: {
            api_key: API_KEY,
            language: "en-US"
        }
    });
      
    return response.data;
};

export const fetchMovieCast = async (movie_id) => {
    const response = await axios.get(`/movie/${movie_id}/credits`, {
        params: {
            api_key: API_KEY,
            language: "en-US" 
        }
    });
    return response.data.cast;
}

export const fetchMovieReviews = async (movie_id) => {
    const response = await axios.get(`/movie/${movie_id}/reviews`, {
        params: {
            api_key: API_KEY,
            language: "en-US",
            page: 1
        }
    });
    return response.data.results;

}

export const fetchMovieBySearchQuery = async (searchQuery) => {
    const response = await axios.get("/search/movie", {
        params: {
            api_key: API_KEY,
            query: searchQuery,
            language: "en-US",
            page: 1,
            include_adult: false
        }
       
    });
    return response.data.results;
}