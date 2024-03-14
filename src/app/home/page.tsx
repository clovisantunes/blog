import Comments from "../components/Comments";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { NavBar } from "../components/NavBar";
import PageKey from "../components/PageKey";
import styles from "./styles.module.scss";
import texts from "./utils/texts.json";

export default function Home() {
  return (
    <>
      <NavBar />
      <PageKey
        imgUrl="/assets/imgHome.png"
        imgText="/assets/homeImgText.png"
        text="Decoração de casas"
        title="Confira nossas decorações de casas"
        titleItem="Como decoramos as casas"
        paragraphs={[
          texts.paragraphOne,
          texts.paragraphTwo,
          texts.paragraphThree,
        ]}
        
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
        paragraphsTwo={[
          texts.paragraphFour,
          texts.paragraphFive,
          texts.paragraphSix,
          texts.paragraphSeven,
        ]}
        advantages={[
          "Economia",
          "Know-How",
          "Gestão sem dor de cabeça",
          "Valorização do Imóvel",
        ]}
        imgs={[
            "/assets/home-1 1.png",
            "/assets/home2.png",
            "/assets/home3.png",
            "/assets/home4.png",
            "/assets/home5.png",
            "/assets/home6.png",  
        ]}
        imgDescription={[
            "Decoração Contemporânea para casa no brooklin",
            "Decoração residencial  Contemporânea em Braga, Portugal",
            "Decoração de casas de campo em Campos do Jordão",
            "Decoração de casas em Campos de Jordão",
            "Decoração de casas no Parque dos Príncipes",
            "Decoração de casas na cidade Jardim"
        ]}
        imgSubDescription={[
            "Casas, Decoração Residencial",
            "Casas, Decoração Residencial",
            "Casas",
            "Casas",
            "Casas",
            "Casas"
        ]}
      />
        <Comments imgPath="/assets/commentsHome.png" client="Adriana" comment="O trabalho da empresa Lorem Ipsum é maravilhosos!! Já tivemos duas oportunidade de sermos atendidos pela essa empresa maravilhosa para decorar nossos apartamentos. Olho clinico e bom gosto, mas sempre respeitando as preferências do cliente. Com certeza trabalharemos mais vezes juntos.  "/>
        <Contact />
      <Footer />
    </>
  );
}
