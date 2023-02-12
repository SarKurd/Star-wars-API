import { Outlet } from "react-router-dom";
import styles from "./App.module.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return (
    <div className={styles.appContainer}>
      <Header />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default App;
