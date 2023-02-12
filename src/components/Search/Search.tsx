import React, { ChangeEventHandler } from "react";
import styles from "./Search.module.css";
import SearchResult from "./SearchResult";

interface TSearchProps {
  disabled: boolean;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  children?: React.ReactNode;
}

const Search = ({
  disabled = false,
  value,
  onChange,
  children,
}: TSearchProps) => (
  <div className={styles.search}>
    <label className={styles.label} htmlFor="search">
      Search
    </label>
    <input
      disabled={disabled}
      className={styles.input}
      type="text"
      id="search"
      placeholder="Search for a movie"
      value={value}
      onChange={onChange}
    />
    {children}
  </div>
);

Search.Result = SearchResult;
export default Search;
