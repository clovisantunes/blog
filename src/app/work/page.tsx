import Comments from "../components/Comments";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { NavBar } from "../components/NavBar";
import PageKey from "../components/PageKey";
import styles from "./styles.module.scss";
import texts from "./utils/texts.json";


export default function Work() {
  return (
    <>
      <NavBar />
      <PageKey
        imgUrl="/assets/imgWork.png"
        text={texts.title}
        imgText="/assets/workImgText.png"
        title="Confira nossas decorações de escritórios "
        titleItem="Como decoramos os escritórios"
        titleIcon={[
            texts.title1,
            texts.title2,
            texts.title3,
            texts.title4,
            texts.title5,
            texts.title6
        ]}
        textIcon={[
            texts.text1,
            texts.text2,
            texts.text3,
            texts.text4,
            texts.text5,
            texts.text6
        ]}
        
        paragraphs={[
          texts.paragraphOne,
          texts.paragraphTwo,
          texts.paragraphThree,
          texts.paragraphFour,
        ]}
        paragraphsTwo={[
          texts.paragraphFive,
          texts.paragraphSix,
          texts.paragraphSeven,
          texts.paragraphEight,
        ]}
        advantages={[
          "Economia",
          "Know-How",
          "Gestão sem dor de cabeça",
          "Valorização do Imóvel",
        ]}
        imgs={[
            "/assets/work1.png",
            "/assets/work2.png",
            "/assets/work3.png",
            "/assets/work4.png",
            "/assets/work5.png",
            "/assets/work6.png",
            
        ]}
        imgDescription={[
            "Decoração de escritório de Advocacia pequeno",
            "Decoração de escritório de Arquitetura",
            "Decoração de escritório pequeno em Moema",
            "Decoração de escritório Descontraído",
            "Decoração de escritório Moderno",
            "Decoração de escritório na Paulista "
        ]}
        imgSubDescription={[
            "Decoração Corporativa , Escritórios",
            "Decoração Corporativa , Escritórios",
            "Decoração Corporativa , Escritórios",
            "Decoração Corporativa , Escritórios",
            "Escritórios",
            "Escritórios"
        ]}
      />
        <Comments imgPath="/assets/homeComments.png" client="Maria" comment="Além do evidente bom gosto, a empresa Lorem Ipsum é uma excelente profissional, dedicada, e que soube gerenciar eventuais imprevistos de forma séria e sem transtornos. A equipe de profissionais recomendada por ela é de grande qualidade e confiança. Minha experiência foi muito boa e o resultado atendeu exatamente à minha expectativa: um ambiente simples e, ao mesmo tempo, sofisticado e funcional. Recomendo!"/>
        <Contact />
       <Footer />
    </>
  );
}
