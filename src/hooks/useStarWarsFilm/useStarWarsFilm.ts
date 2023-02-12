import { useQuery } from "@tanstack/react-query";
import { STAR_WARS_API_BASE_URL } from "../../services/constants";
import serviceRequest from "../../services/apiService/serviceRequest";
import { REACT_QUERY_CACHE_KEYS } from "../constants";

export interface TStarWarsFilm {
  title: string;
  opening_crawl: string;
  release_date: string;
  characters: string[];
  url: string;
}

const useStarWarsFilm = (filmId: string | undefined) => {
  return useQuery([REACT_QUERY_CACHE_KEYS.STAR_WARS_FILMS, filmId], () =>
    serviceRequest<TStarWarsFilm>(
      new URL(`/api/films/${filmId}`, STAR_WARS_API_BASE_URL)
    )
  );
};

export default useStarWarsFilm;
