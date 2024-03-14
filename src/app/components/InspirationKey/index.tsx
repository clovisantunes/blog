import { ButtonMain } from '../UI/ButtonUi';
import SubText from '../UI/SubText';
import TitleText from '../UI/TitleText';
import styles from './styles.module.scss';

interface inspirationsProps{
    title: string;
    imgPath: string;
    text: string;
    subText: string;
}

export default function InspirationKey({title, imgPath, text, subText}: inspirationsProps) {
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
            </div>
        </>
    )
}