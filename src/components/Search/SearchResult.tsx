import React from "react";
import { Link } from "react-router-dom";
import styles from "./SearchResult.module.css";

const Item = ({
  path,
  children,
}: {
  path: string;
  children: React.ReactNode;
}) => (
  <li className={styles.item}>
    <Link to={path} className={styles.itemLink}>
      {children}
    </Link>
  </li>
);

const SearchResult = ({ children }: { children: React.ReactNode }) => (
  <ul className={styles.searchResultContainer}>{children}</ul>
);

SearchResult.Item = Item;

export default SearchResult;
