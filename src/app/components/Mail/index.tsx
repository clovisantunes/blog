import { ButtonMain } from '../UI/ButtonUi';
import TitleText from '../UI/TitleText';
import styles from './styles.module.scss';

export default function Mail(){
    return(
        <>
            <div className={styles.mailContainer}>
                <div className={styles.mailCard}>
                    <div className={styles.titleText}>
                        <TitleText 
                            size='22px'
                            text='Receba nossas dicas por e-mail '
                            weight='400'
                        />
                    </div>
                    <form>
                        <input placeholder='Insira seu nome'/>
                        <input placeholder='Insira seu email'/>
                    </form>
                    <div className={styles.cardButton}>
                        <ButtonMain 
                            backgroundColor='#B9A48C'
                            text='Enviar'
                        />
                    </div>
                </div>
            
            </div>
        </>
    )
}