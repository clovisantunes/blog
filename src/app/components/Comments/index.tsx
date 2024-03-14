import { ButtonMain } from '../UI/ButtonUi';
import TitleText from '../UI/TitleText';
import styles from './styles.module.scss';

interface commentsProps{
    imgPath: string;
    client: string;
    comment: string;
}

export default function Comments({imgPath, client, comment}: commentsProps){
    return(
        <>
            <div className={styles.commentsContainer}>
                <div className={styles.title}>
                    <TitleText 
                        size='36px'
                        text='Opiniões dos nossos clientes'
                        weight='400'
                    />
                </div>
                <div className={styles.commentCard}>
                    <img src={imgPath} alt='imagem comentarios'/>
                    <div className={styles.client}>
                        <span className={styles.clientName}>{client}</span>
                        <span className={styles.clientComment}>{comment}</span>
                        <div className={styles.button}>
                        <ButtonMain 
                            backgroundColor='#B9A48C'
                            text='Veja o projeto'
                        />
                        </div>
                    </div>
                </div>
                <div className={styles.circleCard}>
                    <div className={styles.circle} />
                    <div className={styles.circleWhite} />
                    <div className={styles.circleWhite} />
                    <div className={styles.circleWhite} />
                    <div className={styles.circleWhite} />
                    </div>
            </div>
        </>
    )
}