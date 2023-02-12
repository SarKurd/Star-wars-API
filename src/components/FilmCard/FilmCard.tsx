import React from "react";
import styles from "./FilmCard.module.css";

const CardTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className={styles.title}>{children}</h2>
);
const CardDescription = ({ children }: { children: React.ReactNode }) => (
  <p className={styles.description}>{children}</p>
);

const FilmCard = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.cardContainer}>{children}</div>;
};

FilmCard.Title = CardTitle;
FilmCard.Description = CardDescription;

export default FilmCard;
