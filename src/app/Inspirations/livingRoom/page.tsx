import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";
import InspirationKey from "@/app/components/InspirationKey";
import { NavBar } from "@/app/components/NavBar";


export default function LivingRoom(){
    return(
        <>
        <NavBar />
        <InspirationKey 
            imgPath="/assets/inspirationsImg/img2.png"
            title="Inspiração de sala de estar "
            text="Decoração de Sala de Estar: só de pensar, ja lhe causa calafrios? "
            subText="Esses projetos muito bem vindos, pois as salas hoje são espaços com usos que vão além do tradicional. Cantos de leitura ou bar, áreas para relaxamento ou jogos e espaço para convivência com a família são algumas das funções hoje atribuídas a esse ambiente."
        />
        <Contact />
        <Footer />
        </>
    )
}