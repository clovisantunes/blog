import { ButtonMain, ButtonUi } from '../UI/ButtonUi';
import SubText from '../UI/SubText';
import TitlteText from '../UI/TitleText';
import styles from './styles.module.scss';

export default function About(){
    return(
        <>
            <div className={styles.about_container}>
                <div className={styles.titleText}>
                    <TitlteText 
                        size='24px'
                        text='Conheça o escritório Lorem Ipsum Creative idea  '
                        weight='400'
                    />
                </div>
                <div className={styles.ImgCard}>
                    <img src='/assets/aboutImage.png' />
                </div>
                <div className={styles.textCard}>
                    <SubText 
                        size='16px'
                        text='Morar bem significa viver em um ambiente que reflita a personalidade, os gostos e as memórias de seus moradores. Por isso, o projeto de uma casa deve ir além da preocupação com a aparência e concretizar os desejos de forma a tornar o dia a dia funcional e a vida mais gostosa.'
                        weight='300'
                    />
                </div>
                <div className={styles.textCard}>
                <SubText 
                        size='16px'
                        text='Pensando nisso, o escritório Ipsum Lorem Creative idea desenvolve projetos que materializam esses sonhos, através de uma leitura minuciosa das necessidades e expectativas dos clientes.'
                        weight='300'
                    />
                </div>
                <div className={styles.button_container}>
                <div className={styles.buttonCard}>
                    <ButtonMain 
                        backgroundColor='#B9A48C'
                        text='Saiba mais'
                    />
                </div>
                </div>
            </div>
        </>
    )
}