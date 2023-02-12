import CharacterBadge from "@/src/components/CharacterBadge";
import useStarWarsFilm from "@/src/hooks/useStarWarsFilm";
import { Navigate, useParams } from "react-router-dom";
import styles from "./Film.module.css";

const Film = () => {
  const { filmId } = useParams();
  const { data, isLoading, isError } = useStarWarsFilm(filmId);

  if (!filmId) {
    return <Navigate to="/" />;
  }
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something went wrong</div>;
  }

  return (
    <div className={styles.filmContainer}>
      <div className={styles.filmWrapper}>
        <h1 className={styles.title}>{data.title}</h1>
        <p className={styles.description}>{data.opening_crawl}</p>
        <div className={styles.charactersContainer}>
          <h3>Characters: </h3>
          <div className={styles.characters}>
            {data.characters.map((url) => (
              <CharacterBadge key={url} url={url} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Film;
