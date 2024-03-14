"use client"
import { ReactNode, useState } from "react";
import SubText from "../UI/SubText";
import TitleText from "../UI/TitleText";
import styles from "./styles.module.scss";
import { IoMdCheckmark } from "react-icons/io";
import { TfiPencilAlt } from "react-icons/tfi";
import { FaPencilRuler } from "react-icons/fa";
import { PiMathOperationsBold } from "react-icons/pi";
import { LuClipboardCheck } from "react-icons/lu";
import { IoIosBrush } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import Cover from "../UI/Cover";

interface PageKeyProps {
  imgUrl: string;
  text: string;
  paragraphs: string[];
  paragraphsTwo: string[];
  advantages: string[];
  imgText: string;
  title: string;
  imgs: string[];
  titleItem: string;
  imgDescription: string[];
  imgSubDescription: string[];
  titleIcon: string[];
  textIcon: string[];
}

export default function PageKey({
  imgUrl,
  text,
  paragraphs,
  paragraphsTwo,
  advantages,
  imgText,
  title,
  imgs,
  titleItem,
  imgDescription,
  imgSubDescription,
  titleIcon,
  textIcon,
}: PageKeyProps) {
  const icons = [
    <TfiPencilAlt />,
    <FaPencilRuler />,
    <PiMathOperationsBold />,
    <LuClipboardCheck />,
    <IoIosBrush />,
    <CiHeart />,
  ];
  const [hoveredIndex, setHoveredIndex] = useState(-1);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.main}>
        <img src={imgUrl} alt={text} />
        <TitleText size="48px" weight="400" text={text} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.textCard}>
          {paragraphs.map((paragraph, index) => (
            <div className={styles.paragraph} key={index}>
              <SubText size="22px" text={paragraph} weight="200" />
            </div>
          ))}
        </div>
        <div className={styles.checklist}>
          <div className={styles.titleCard}>
            <TitleText
              size="36px"
              text="Vantagens do nosso escritório"
              weight="300"
            />
          </div>
          <div className={styles.SubTextCard}>
            {advantages.map((advantage, index) => (
              <SubText
                size="24px"
                text={advantage}
                weight="300"
                icon={<IoMdCheckmark key={index} />}
                key={index}
              />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.cardTwo}>
        <div className={styles.imgCard}>
          <img src={imgText} />
        </div>
        <div className={styles.paragraphTwo}>
          {paragraphsTwo.map((paragraphTwo, index) => (
            <div className={styles.paragraph} key={index}>
              <SubText size="22px" text={paragraphTwo} weight="200" />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.session}>
        <div className={styles.tittleComponent}>
          <TitleText size="36px" text={title} weight="400" />
        </div>
        <div className={styles.images}>
          {imgs.map((img, index) => (
            <div
              className={styles.imgItem}
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(-1)}
            >
              {hoveredIndex === index && <Cover title={imgDescription[index]} subText={imgSubDescription[index]} />}
              <img src={img} key={index} />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.sessionTwo}>
        <div className={styles.tittleComponent}>
          <TitleText size="36px" text={titleItem} weight="400" />
        </div>
        <div className={styles.itemContainer}>
          {titleIcon.map((title, index) => (
            <div className={styles.itemCard} key={index}>
              <div className={styles.iconCard} key={title}>
                {icons[index]}
              </div>
              <div className={styles.titleItemCard}>
                <span>{title}</span>
              </div>
              <div className={styles.itemText}>
                <span>{textIcon[index]}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
