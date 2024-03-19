import About from "../components/About";
import Footer from "../components/Footer";
import Mail from "../components/Mail";
import { NavBar } from "../components/NavBar";
import TitleText from "../components/UI/TitleText";
import styles from "./styles.module.scss";
import itemsData from "./utils/text.json";

export default function post() {
  const imgPost = "assets/img1.png";
  return (
    <>
      <NavBar color="black" />
      <div className={styles.postContainer}>
        <div className={styles.title}>
          <TitleText
            size="28px"
            text="Decoração de alto padrão: O que não pode faltar na decoração de luxo"
            weight="400"
          />
          <div className={styles.line} />
        </div>
        <div className={styles.postCard}>
          <div className={styles.postItens}>
            <img src={imgPost} className={styles.imgItems} />
            <div className={styles.autor}>
              <span>
                Por: Nome Sobrenome | Dicas Imperdíveis de Decoração |
                XX/Fevereiro/XXXX
              </span>
            </div>
            <div className={styles.span}>
              <span>{itemsData.sections[0].title}</span>
              <TitleText size="24px" text={itemsData.title} weight="400" />
              <span className={styles.spanFirst}>
                {itemsData.sections[0].content}
              </span>
              <TitleText
                size="24px"
                text={itemsData.sections[1].subtitle}
                weight="400"
              />
              <span className={styles.spanFirst}>
                {itemsData.sections[1].content}
              </span>
              <span className={styles.spanFirst}>
                {itemsData.sections[1].subContent}
              </span>
              <img
                className={styles.imgPost}
                src="/assets/post/img1.png"
                alt="Imagem post"
              />
              <span className={styles.spanFirst}>
                {itemsData.sections[1].sub}
              </span>
            </div>
          </div>
          <div className={styles.components}>
            <About />
            <Mail />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
