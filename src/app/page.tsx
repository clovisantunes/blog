import styles from "./styles/styles.module.scss";
import About from "./components/About";
import Main from "./components/Main/Index";
import { NavBar } from "./components/NavBar";
import Post from "./components/Post";
import Mail from "./components/Mail";
import WhatsContact from "./components/UI/WhatsContact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <Main />
        <div className={styles.components}>
          <Post />
          <div className={styles.aboutMail}>
            <About />
            <Mail />
          </div>
        </div>
        <WhatsContact />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
