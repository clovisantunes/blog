import styles from './styles.module.scss';
interface titleTextProps{
    text: string;
    size: string;
    weight: string;
}

export default function TitlteText({text, size, weight}: titleTextProps){
    return(
        <h1 style={{ fontWeight: weight}} className={styles.titleH1}>
            {text}
        </h1>
    )
}