import styles from './styles.module.scss';

interface SubTextProps{
    text: string;
    size: string;
    weight: string;
}

export default function SubText({text, size, weight}: SubTextProps){
    return(
        <h2 style={{ fontWeight: weight , fontSize: size}} className={styles.h2Item}>
            {text}
        </h2>
    )
}