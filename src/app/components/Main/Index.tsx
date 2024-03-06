import SubText from '../UI/SubText';
import TitlteText from '../UI/TitleText';
import styles from './styles.module.scss';

export default function Main(){
    return(
        <>
            <div className={styles.main_container}>
                <TitlteText 
                    size='36px'
                    text='Blog de Decoração e Design de Interiores'
                    weight='400'
                />
                <SubText 
                    size='32px'
                    text='Tenha a casa que você sempre sonhou morar'
                    weight='400'
                />
                <div className={styles.line} />
            </div>
        </>
    )
}