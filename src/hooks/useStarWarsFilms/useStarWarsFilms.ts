import { useQuery } from "@tanstack/react-query";
import { STAR_WARS_API_BASE_URL } from "../../services/constants";
import serviceRequest from "../../services/apiService/serviceRequest";
import { REACT_QUERY_CACHE_KEYS } from "../constants";
import type { TStarWarsFilm } from "../useStarWarsFilm/useStarWarsFilm";

export interface TStarWarsFilms {
  count: number;
  results: TStarWarsFilm[];
}

const useStarWarsFilms = () => {
  return useQuery([REACT_QUERY_CACHE_KEYS.STAR_WARS_FILMS], () =>
    serviceRequest<TStarWarsFilms>(
      new URL("/api/films", STAR_WARS_API_BASE_URL)
    )
  );
};

export default useStarWarsFilms;
