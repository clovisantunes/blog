import React from "react";
import styles from "./styles.module.scss";
import itemsData from "../../Utils/texts.json";
import TitlteText from "../UI/TitleText";
import SubText from "../UI/SubText";
import { ButtonMain, ButtonRead } from "../UI/ButtonUi";

export default function Post() {
  const { items } = itemsData;

  return (
    <>
      <div className={styles.postContainer}>
        <div className={styles.postsCard}>
          {items.map((item) => (
            <div className={styles.postItems} key={item.id}>
              <div className={styles.imgCard}>
                <img src={item.image} alt={`Imagem ${item.id}`} />
              </div>
              <div className={styles.autorCard}>
                <span>Por: {item.autor} | {item.date}</span>
                </div>
              <div className={styles.titleCard}>
                <TitlteText size="18px" text={item.title} weight="600" />
              </div>
              <div className={styles.descriptionCard}>
                <SubText size="16px" text={item.description} weight="200" />
              </div>
              <div className={styles.buttonCard}>
                <ButtonRead
                    backgroundColor="white"
                    text="Veja mais"
                />
               </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
