import { useQuery } from "@tanstack/react-query";
import serviceRequest from "../../services/apiService/serviceRequest";
import { REACT_QUERY_CACHE_KEYS } from "../constants";

interface TStarWarsFilmCharacter {
  name: string;
  url: string;
}

const useStarWarsFilmCharacter = ({ url }: { url: string }) => {
  return useQuery([REACT_QUERY_CACHE_KEYS.STAR_WARS_FILM_CHARACTER, url], () =>
    serviceRequest<TStarWarsFilmCharacter>(url)
  );
};

export default useStarWarsFilmCharacter;
