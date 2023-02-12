import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.headerNav}>
        <ul className={styles.navList}>
          <li className={styles.listItem}>
            <Link className={styles.navLink} to="/">
              Home
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link className={styles.navLink} to="/films">
              Films
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
