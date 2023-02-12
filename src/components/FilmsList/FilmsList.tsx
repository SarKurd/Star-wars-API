import type { TStarWarsFilm } from "@/src/hooks/useStarWarsFilm";
import FilmCard from "../FilmCard";
import styles from "./FilmsList.module.css";

const FilmsList = ({ films }: { films: TStarWarsFilm[] }) => {
  return (
    <div className={styles.filmsListContainer}>
      {films.map(({ title, url, opening_crawl }) => (
        <FilmCard key={url}>
          <FilmCard.Title>{title}</FilmCard.Title>
          <FilmCard.Description>{opening_crawl}</FilmCard.Description>
        </FilmCard>
      ))}
    </div>
  );
};

export default FilmsList;
