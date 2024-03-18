import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";
import InspirationKey from "@/app/components/InspirationKey";
import { NavBar } from "@/app/components/NavBar";
import text from './utils/text.json';
import { TbArrowsDiff } from "react-icons/tb";
import { IoMdHome } from "react-icons/io";
import { FaRegLightbulb } from "react-icons/fa";
import { RiPaintBrushFill } from "react-icons/ri";

export default function LivingRoom(){
    return(
        <>
        <NavBar />
        <InspirationKey 
            imgPath="/assets/inspirationsImg/img2.png"
            title="Inspiração de sala de estar "
            text="Decoração de Sala de Estar: só de pensar, ja lhe causa calafrios? "
            subText="Esses projetos muito bem vindos, pois as salas hoje são espaços com usos que vão além do tradicional. Cantos de leitura ou bar, áreas para relaxamento ou jogos e espaço para convivência com a família são algumas das funções hoje atribuídas a esse ambiente."
            mainText="Dicas de decoração de Sala de Estar"
            titleMain={[
                text.titles.title1,
                text.titles.title2,
                text.titles.title3,
                text.titles.title1
            ]}
            textMain={[
                text.texts.texts1,
                text.texts.texts2,
                text.texts.texts3,
                text.texts.texts1
            ]}
            icon={[
                <TbArrowsDiff />,
                <IoMdHome />,
                <FaRegLightbulb />,
                <RiPaintBrushFill/>
            ]}
            images={[
                '/assets/afterImg/img12.png',
                '/assets/afterImg/img13.png',
                '/assets/afterImg/img14.png',
                '/assets/afterImg/img15.png',
                '/assets/afterImg/img16.png',
                '/assets/afterImg/img17.png',
                '/assets/afterImg/img18.png',
                '/assets/afterImg/img19.png',
                '/assets/afterImg/img20.png'
            ]}
        />
        <Contact />
        <Footer />
        </>
    )
}