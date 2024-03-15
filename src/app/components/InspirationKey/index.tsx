import { ReactNode } from 'react';
import { ButtonMain } from '../UI/ButtonUi';
import SubText from '../UI/SubText';
import TitleText from '../UI/TitleText';
import styles from './styles.module.scss';

interface inspirationsProps{
    title: string;
    imgPath: string;
    text: string;
    subText: string;
    mainText: string;
    titleMain: string[];
    textMain: string[];
    icon: ReactNode[];
}

export default function InspirationKey({title, imgPath, text, subText, mainText, icon, titleMain, textMain }: inspirationsProps) {
    return (
        <>
            <div className={styles.inspirationContainer}>
                <div className={styles.title}>
                    <TitleText size="64px" text={title} weight="400" />
                    <img src={imgPath} />
                </div>
                <div className={styles.description}>
                    <SubText 
                        size='18px'
                        weight='200'
                        text={text}
                    />
                    <SubText 
                        size='18px'
                        weight='200'
                        text={subText}
                    />
                    <div className={styles.buttonCard}>
                        <div className={styles.buttonItem}>
                            <ButtonMain 
                                backgroundColor='#000000'
                                text='dicas de decoração'
                            />
                        </div>
                        <div className={styles.buttonItem}>
                        <ButtonMain 
                                backgroundColor='#FFFFFF'
                                text='agende uma reunião'
                            />
                        </div>
                    </div>
                </div>
                <div className={styles.main}>
                    <div className={styles.mainTitle}>
                        <TitleText 
                            size='36px'
                            text={mainText}
                            weight='300'
                        />
                    </div>
                    {icon.map((iconElement, index) => (
                    <div className={styles.cardMain}>
                            
                                <div className={styles.icon}>
                                    {iconElement}
                                </div>
                                <div className={styles.text}>
                                   <TitleText 
                                    size='28px'
                                    text={titleMain[index]}
                                    weight='300'
                                   />
                                   <SubText 
                                    size='18px'
                                    weight='300'
                                    text={textMain[index]}
                                   />
                                </div>
                       
                    </div>
                        ))}
                </div>
            </div>
        </>
    )
}