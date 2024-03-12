import { ButtonMain } from '../ButtonUi';
import styles from './styles.module.scss';
import { FaWhatsapp } from "react-icons/fa6";

export default function WhatsContact(){
    return(
        <>
            <div className={styles.whatsContainer}>
                <ButtonMain 
                    backgroundColor=''
                    icon={<FaWhatsapp />}
                    text=' Entre em contato'
                />
            </div>
        </>
    )
}