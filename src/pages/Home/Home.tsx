import FilmSearch from "@/src/components/FilmSearch";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <FilmSearch />
    </div>
  );
};

export default Home;
