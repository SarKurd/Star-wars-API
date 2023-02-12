import FilmsList from "@/src/components/FilmsList";
import useStarWarsFilms from "@/src/hooks/useStarWarsFilms";
import styles from "./Films.module.css";

const Films = () => {
  const { data, isLoading, isError } = useStarWarsFilms();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Something went wrong</div>;
  }

  return (
    <div className={styles.filmsContainer}>
      <FilmsList films={data.results} />
    </div>
  );
};

export default Films;
