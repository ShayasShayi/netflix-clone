import { API_KEY } from "./constants/constant";
export const banner_api = `trending/all/week?api_key=${API_KEY}&language=en-US`;
export const originals_api = `discover/tv?api_key=${API_KEY}&with_networks=213`
export const action_api = `discover/movie?api_key=${API_KEY}&with_genres=28`