"use client";
import { useState } from "react";
import Footer from "../components/Footer";
import { NavBar } from "../components/NavBar";
import SubText from "../components/UI/SubText";
import TitleText from "../components/UI/TitleText";
import styles from "./styles.module.scss";
import Cover from "../components/UI/Cover";
import Contact from "../components/Contact";

export default function Projects() {
  const residencial = [
    "/assets/projectsImg/img1.png",
    "/assets/projectsImg/img2.png",
    "/assets/projectsImg/img3.png",
    "/assets/projectsImg/img4.png",
    "/assets/projectsImg/img5.png",
    "/assets/projectsImg/img6.png",
  ];
  const corporativo = [
    "/assets/projectsImg/corp1.png",
    "/assets/projectsImg/corp2.png",
    "/assets/projectsImg/corp3.png",
    "/assets/projectsImg/corp4.png",
    "/assets/projectsImg/corp5.png",
    "/assets/projectsImg/corp6.png",
  ];
  const imgDescription = [
    "Decoração Contemporânea para casa no brooklin",
    "Decoração residencial Contemporânea em Braga, Portugal",
    "Decoração de casas de campo em Campos do Jordão",
    "Decoração de casas em Campos de Jordão", 
    "Decoração de casas no Parque dos Príncipes", 
    "Decoração de casas na cidade Jardim"
];
  const imgDescriptionCorp = [
    "Decoração de escritório de Advocacia pequeno",
    "Decoração de escritório de Arquitetura",
    "Decoração de escritório pequeno em Moema",
    "Decoração de escritório Descontraído", 
    "Decoração de escritório Moderno", 
    "Decoração de escritório na Paulista "
];
  const imgSubDescription = ["Casas, Decoração Residencial", "Casas, Decoração Residencial", "Casas", "Casas", "Casas", "Casas"];
  const imgSubDescriptionCorp = ["Decoração Corporativa , Escritórios,", "Decoração Corporativa , Escritórios", "Decoração Corporativa , Escritórios", "Decoração Corporativa , Escritórios", "Escritórios", "Escritórios"];
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [hoveredIndexCorporativo, setHoveredIndexCorporativo] = useState(-1);

  return (
    <>
      <NavBar color="black" />
      <div className={styles.projectsContainer}>
        <div className={styles.title}>
          <TitleText size="64px" text="Portfólio dos projetos" weight="400" />
          <SubText
            size="24px"
            weight="200"
            text="Dê uma olhada nos nossos projetos abaixo. "
          />
        </div>
        <div className={styles.imgContainer}>
          <div className={styles.name}>
            <SubText size="36px" weight="200" text="Residencial" />
          </div>
          <div className={styles.imgs}>
            {residencial.map((img, index) => (
              <div
                className={styles.imgCard}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(-1)}
              >
                {hoveredIndex === index && (
                  <Cover
                    title={imgDescription[index]}
                    subText={imgSubDescription[index]}
                  />
                )}
                <img src={img} key={index} />
              </div>
            ))}
          </div>
          <div className={styles.nameCorp}>
            <SubText size="36px" weight="200" text="Corporativo" />
          </div>
          <div className={styles.imgs}>
            {corporativo.map((img, index) => (
              <div
                className={styles.imgCard}
                onMouseEnter={() => setHoveredIndexCorporativo(index)}
                onMouseLeave={() => setHoveredIndexCorporativo(-1)}
              >
                {hoveredIndexCorporativo === index  && (
                  <Cover
                    title={imgDescriptionCorp[index]}
                    subText={imgSubDescriptionCorp[index]}
                  />
                )}
                <img src={img} key={index + 1} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Contact />
      <Footer />
    </>
  );
}
