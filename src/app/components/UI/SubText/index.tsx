import { ReactNode } from 'react';
import styles from './styles.module.scss';

interface SubTextProps{
    text?: string;
    size: string;
    weight: string;
    icon?: ReactNode;
}

export default function SubText({text, size, weight, icon}: SubTextProps){
    return(
        <h2 style={{ fontWeight: weight , fontSize: size}} className={styles.h2Item}>
            {icon}{text}
        </h2>
    )
}