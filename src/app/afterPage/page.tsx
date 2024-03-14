import Footer from "../components/Footer";
import { NavBar } from "../components/NavBar";
import SubText from "../components/UI/SubText";
import TitleText from "../components/UI/TitleText";
import styles from "./styles.module.scss";

export default function After() {
    const images = [
        { type: "imgs1", paths: ["/assets/afterImg/img1.png", "/assets/afterImg/img2.png"], text: "A decoração deste quarto de casal foi atualizada e ganhou aconchego com o painel de madeira ripada e cabeceira estofada. Projeto de design de interiores para reforma de apartamento." },
        { type: "imgs2", paths: ["/assets/afterImg/img3.png", "/assets/afterImg/img4.png"], text: "A decoração desta varanda gourmet foi feita a partir da integração com a sala. Para criar mais sofisticação e aconchego, a madeira foi usada como elemento principal no design. Projeto de design de interiores para reforma de apartamento."},
        { type: "imgs3", paths: ["/assets/afterImg/img5.png", "/assets/afterImg/img6.png"], text: "A decoração de sala de estar foi feita a partir da integração com a varanda. Para criar mais sofisticação e aconchego, a madeira foi usada como elemento principal no design, aplicada em paineis e no forro do teto.  Projeto de design de interiores para reforma de apartamento."},
        { type: "imgs4", paths: ["/assets/afterImg/img7.png", "/assets/afterImg/img8.png"], text: "A decoração deste home office foi atualizada e ganhou modernidade com as estantes com nichos em mesa em madeira. Projeto de design de interiores para reforma de apartamento."},
        { type: "imgs5", paths: ["/assets/afterImg/img9.png", "/assets/afterImg/img10.png"], text: "A decoração de lavabo deixou o espaço moderno e atual. O uso de porcelanato padrão mármore no tampo da bancada trouxeram elegância e praticidade. Projeto de design de interiores para reforma de apartamento."},
        { type: "imgs6", paths: ["/assets/afterImg/img11.png", "/assets/afterImg/img12.png"], text: "Sem reformas estruturais, essa varanda ganhou cara nova com a marcenaria planejada e os pendentes industriais. Dessa forma, móveis despojados deixaram o ambiente acolhedor e a decoração mais aconchegante."},
        { type: "imgs7", paths: ["/assets/afterImg/img13.png", "/assets/afterImg/img14.png"], text: "O home office estava ultrapassado e precisava de uma reforma. Por isso, desenvolvemos um projeto de marcenaria, que deixou o ambiente mais funcional e moderno."},
     
    ];

    return (
        <>
            <NavBar color="black" />
            <div className={styles.afterContainer}>
                <div className={styles.title}>
                    <TitleText size="64px" text="Antes e Depois" weight="400" />
                    <SubText
                        size="24px"
                        weight="200"
                        text="Inspire-se nas transformações que realizamos nesses projetos de decoração. Alguns ambientes ficaram irreconhecíveis! Que tal uma transformação assim na sua casa?"
                    />
                </div>
                <div className={styles.items}>
                    {images.map((imageSet, index) => (
                        <div className={styles.imgCard}>
                        <div key={index} className={styles.Imgs}>
                            {imageSet.paths.map((path, idx) => (
                                <img key={idx} src={path} alt={`Imagem ${idx + 1}`} />
                            ))}
                        </div>
                            <div className={styles.description}>
                                <span>{imageSet.text}</span>
                            </div>
                            </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}
