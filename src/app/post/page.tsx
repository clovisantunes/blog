import About from '../components/About';
import Footer from '../components/Footer';
import Mail from '../components/Mail';
import { NavBar } from '../components/NavBar';
import TitleText from '../components/UI/TitleText';
import styles from './styles.module.scss';

export default function post(){
    const imgPost = 'assets/img1.png';
    return(
        <>
        <NavBar color='black'/>
            <div className={styles.postContainer}>
                <div className={styles.title}>
                    <TitleText 
                        size='28px'
                        text='Decoração de alto padrão: O que não pode faltar na decoração de luxo'
                        weight='400'
                    />
                    <div className={styles.line} />

                </div>
                <div className={styles.postCard}>
                <div className={styles.postItens}>
                    <img src={imgPost} />
                </div>
                <div className={styles.components}>

                <About />
                <Mail />
                </div>
                </div>
            </div>
            <Footer />
        </>
    )
}