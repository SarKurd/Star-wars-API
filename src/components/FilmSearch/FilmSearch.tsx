import { useState } from "react";
import useStarWarsFilms from "@/src/hooks/useStarWarsFilms";
import { getIdFromSwapiURL } from "@/src/lib/utils";
import Search from "../Search";

// Start wars API doesn't have an endpoint to retrieve the results in realtime so the best i could is preload all the data beforehand
const FilmSearch = () => {
  const { data, isLoading, isError } = useStarWarsFilms();
  const [searchValue, setSearchValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const searchResult = searchValue
    ? data?.results.filter((film) =>
        film.title.toLowerCase().includes(searchValue.toLowerCase())
      )
    : [];

  return (
    <div>
      <Search
        disabled={isLoading || isError}
        value={searchValue}
        onChange={handleInputChange}
      >
        {searchResult && searchResult.length > 0 ? (
          <Search.Result>
            {searchResult.map(({ title, url }) => (
              <Search.Result.Item
                key={url}
                path={`/films/${getIdFromSwapiURL(url)}`}
              >
                {title}
              </Search.Result.Item>
            ))}
          </Search.Result>
        ) : null}
      </Search>
    </div>
  );
};

export default FilmSearch;
