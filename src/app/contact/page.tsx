import Footer from '../components/Footer';
import { NavBar } from '../components/NavBar';
import { ButtonMain } from '../components/UI/ButtonUi';
import TitleText from '../components/UI/TitleText';
import styles from './styles.module.scss';

export default function Contact(){
    const placeholders = [
        { label: 'Seu nome', id: 'name' },
        { label: 'Seu email', id: 'email' },
        { label: 'Seu Telefone', id: 'phone' },
        { label: 'Sua cidade', id: 'city' },
        { label: 'Tipo de imóvel', id: 'propertyType' }
    ];

    return(
        <>
            <NavBar color='black'/>
            <div className={styles.contactContainer}>
                <div className={styles.formContact}>
                    <TitleText 
                        size='36px'
                        weight='300'
                        text='Contate-nos'
                    />
                    {placeholders.map(({ label, id }) => (
                        <input key={id} placeholder={label} />
                    ))}
                    <textarea placeholder='Sua mensagem'/>
                    <div className={styles.button}>
                        <ButtonMain 
                            backgroundColor='black'
                            text='Enviar'
                        />
                    </div>
                </div>
                <img src='/assets/contact/img1.png' alt='Imagem de contato'/>
            </div>
            <Footer />
        </>
    )
}
