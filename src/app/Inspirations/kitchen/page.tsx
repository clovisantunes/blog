import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";
import InspirationKey from "@/app/components/InspirationKey";
import { NavBar } from "@/app/components/NavBar";


export default function Kitchen(){
    return(
        <>
            <NavBar />
            <InspirationKey 
                imgPath="/assets/inspirationsImg/img1.png"
                title="Inspiração de cozinha"
                text="Decoração de Cozinha: só de pensar, ja lhe causa calafrios? Sua cozinha está ultrapassada, mas você tem medo de iniciar uma reforma?"
                subText="Veja a seguir, nossas dicas para planejar essa empreitada e reformar a  cozinha sem estresse."
            />
            <Contact />
            <Footer />
        </>
    )
}