import Footer from '../components/Footer'
import { NavBar } from '../components/NavBar'
import SubText from '../components/UI/SubText'
import TitleText from '../components/UI/TitleText'
import styles from './styles.module.scss'


export default function Projects(){
    return(
        <>
        <NavBar color='black' />
            <div className={styles.projectsContainer}>
                <div className={styles.title}>
                    <TitleText 
                    size='64px'
                    text='Portfólio dos projetos'
                    weight='400'
                        />
                        <SubText 
                            size='24px'
                            weight='200'
                            text='Dê uma olhada nos nossos projetos abaixo. '
                        />
                </div>
            </div>
        <Footer />
        </>
    )
}