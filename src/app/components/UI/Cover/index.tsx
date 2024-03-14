import styles from './styles.module.scss';

interface coverProps{
    title: string;
    subText: string;
}

export default function Cover({title, subText}: coverProps){
    return(
        <div className={styles.coverContainer}>
            <div className={styles.coverScreen}>
            </div>    
                <span className={styles.span}>{title}</span>
                <span className={styles.spanSub}>{subText}</span>
                <span className={styles.line1} />
                <span className={styles.line2} />
                <span className={styles.line3} />
                <span className={styles.line4} />
        </div>
    )
}