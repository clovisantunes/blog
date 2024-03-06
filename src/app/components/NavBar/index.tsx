import NavList from '../UI/NavList';
import styles from './styles.module.scss';

export function NavBar(){
    return(
        <>
        <div className={styles.navbar_container}>
            <NavList />
        </div>
        </>
    )
}