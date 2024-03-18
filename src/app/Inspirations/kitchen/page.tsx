import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";
import InspirationKey from "@/app/components/InspirationKey";
import { NavBar } from "@/app/components/NavBar";
import text from './utils/text.json';
import { IoIosHome } from "react-icons/io";
import { RiHomeGearFill } from "react-icons/ri";
import { FaMoneyBillWave } from "react-icons/fa";
import { MdOutlineDateRange } from "react-icons/md";

export default function Kitchen(){
    return(
        <>
            <NavBar />
            <InspirationKey 
                imgPath="/assets/inspirationsImg/img1.png"
                title="Inspiração de cozinha"
                text="Decoração de Cozinha: só de pensar, ja lhe causa calafrios? Sua cozinha está ultrapassada, mas você tem medo de iniciar uma reforma?"
                subText="Veja a seguir, nossas dicas para planejar essa empreitada e reformar a  cozinha sem estresse."
                mainText="Dicas de decoração de cozinha"
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
                    <IoIosHome />,
                    <RiHomeGearFill />,
                    <FaMoneyBillWave />,
                    <MdOutlineDateRange />
                ]}
                images={[
                    '/assets/afterImg/img3.png',
                    '/assets/afterImg/img4.png',
                    '/assets/afterImg/img5.png',
                    '/assets/afterImg/img6.png',
                    '/assets/afterImg/img7.png',
                    '/assets/afterImg/img8.png',
                    '/assets/afterImg/img9.png',
                    '/assets/afterImg/img10.png',
                    '/assets/afterImg/img11.png'
                ]}
            />
            <Contact />
            <Footer />
        </>
    )
}