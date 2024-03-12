import SubText from '../UI/SubText';
import styles from './styles.module.scss';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import TitleText from '../UI/TitleText';

export default function Footer(){
    return(
    <>
        <div className={styles.FooterContainer}>
            <div className={styles.logoFooter}>
                <img src='/assets/logo.png' alt='logo footer'/>
            </div>
            <div className={styles.locationContainer}>
                <SubText 
                    size='18px'
                    text='Rio Grande do Sul'
                    weight='400'
                    icon={<FaLocationDot />}
                />
                <SubText 
                    size='18px'
                    text='(51)9xxxx-xxxx | (51)9xxxx-xxxx'
                    weight='400'
                    icon={<FaPhoneAlt />}
                />
                <SubText 
                    size='18px'
                    text='loremipsumcreativeidea@gmail.com'
                    weight='400'
                    icon={<IoMail />}
                />
            </div>
            <div className={styles.decorationsContainer}>
                <TitleText 
                    size='24px'
                    weight='800'
                    text='Decoramos'
                />
                <SubText 
                    size='16px'
                    text='Casas'
                    weight='400'
                />
                <SubText 
                    size='16px'
                    text='Apartamentos'
                    weight='400'
                />
                <SubText 
                    size='16px'
                    text='Escritórios'
                    weight='400'
                />
                <SubText 
                    size='16px'
                    text='Comércios'
                    weight='400'
                />
            </div>
            <div className={styles.inpirationsContainer}>
            <TitleText 
                    size='24px'
                    weight='800'
                    text='Inspirações'
                />
                <SubText 
                    size='16px'
                    text='Cozinha'
                    weight='400'
                />
                <SubText 
                    size='16px'
                    text='Sala de Estar'
                    weight='400'
                />
                <SubText 
                    size='16px'
                    text='Banheiro'
                    weight='400'
                />
                <SubText 
                    size='16px'
                    text='Quarto de Casal'
                    weight='400'
                />
                <SubText 
                    size='16px'
                    text='Quarto Infantil'
                    weight='400'
                />
            </div>
        </div>
        <div className={styles.copyright}>
            <SubText 
                size='16px'
                text='©DevRoom 2024. Todos os direitos reservados.'
                weight='400'
            />
        </div>
    </>
    )
}