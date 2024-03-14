import { ButtonMain } from "../UI/ButtonUi";
import SubText from "../UI/SubText";
import TitleText from "../UI/TitleText";
import styles from "./styles.module.scss";

export default function Contact() {
  return (
    <>
      <div className={styles.contactContainer}>
        <div className={styles.title}>
          <TitleText size="36px" weight="300" text="Agende uma reunião" />
          <SubText
            size="24px"
            weight="300"
            text="Quer que seu sonho de decoração saia do papel?"
          />
          <SubText
            size="24px"
            weight="300"
            text="Venha tomar um cafezinho com a gente!"
          />
          <SubText
            size="24px"
            weight="300"
            text="Preencha o formulário ao lado e retornaremos assim que possível."
          />
        </div>
        <div className={styles.form}>
          <div className={styles.inputPair}>
            <input type="text" placeholder="Seu nome" />
            <input type="text" placeholder="Seu email" />
          </div>
          <div className={styles.inputPair}>
            <input type="text" placeholder="Seu telefone" />
            <input type="text" placeholder="Sua cidade" />
          </div>
          <div className={styles.textareaContainer}>
            <textarea placeholder="descreva sua necessidade"></textarea>
          </div>
          <div className={styles.button}>
            <ButtonMain 
                backgroundColor="#222222"
                text="enviar para agendamento"
            />
          </div>
        </div>
      </div>
    </>
  );
}
