import useStarWarsFilmCharacter from "@/src/hooks/useStarWarsFilmCharacter";
import styles from "./CharacterBadge.module.css";

const CharacterBadge = ({ url }: { url: string }) => {
  const { data } = useStarWarsFilmCharacter({ url });
  if (!data) {
    return null;
  }
  return <div className={styles.characterBadge}>{data.name}</div>;
};

export default CharacterBadge;
