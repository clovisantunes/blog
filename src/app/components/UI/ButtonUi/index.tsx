import styles from './styles.module.scss';
import { MdArrowForwardIos } from "react-icons/md";

interface ButtonProps{
    text: string;
    subText: string;
}
interface ButtonMainProps{
    text: string;
    backgroundColor: string;
}

 function ButtonUi({text, subText}: ButtonProps){
    return(
        <>
        <div className={styles.buttonUi}>
            <span>{text}</span>
            <span>{subText}</span>
        </div>

        </>
    )
}
 function ButtonMain({text, backgroundColor}: ButtonMainProps){
    return(
        <>
        <div className={styles.buttonMain} style={{backgroundColor: backgroundColor}}>
            <span>{text}</span>
        </div>

        </>
    )
}
 function ButtonRead({text, backgroundColor}: ButtonMainProps){
    return(
        <>
        <div className={styles.buttonRead} style={{backgroundColor: backgroundColor}}>
            <span>{text} <MdArrowForwardIos /></span>
        </div>

        </>
    )
}


export  { ButtonMain, ButtonUi, ButtonRead };