"use client"
import styles from './styles.module.scss';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useState } from 'react';

interface navListProps{
    textColor: string;
}

export default function NavList({textColor}: navListProps) {
    const [decoramosDropdownVisible, setDecoramosDropdownVisible] = useState(false);
    const [inspiracoesDropdownVisible, setInspiracoesDropdownVisible] = useState(false);

    const showDecoramosDropdown = () => {
        setDecoramosDropdownVisible(true);
    };

    const hideDecoramosDropdown = () => {
        setDecoramosDropdownVisible(false);
    };

    const showInspiracoesDropdown = () => {
        setInspiracoesDropdownVisible(true);
    };

    const hideInspiracoesDropdown = () => {
        setInspiracoesDropdownVisible(false);
    };

    return (
        <>
                <img src='/assets/logo.png' alt='logo' className={styles.logoImg}/>
            <div className={styles.navList}>
                <ul>
                    <li><a href="/" style={{color: textColor}}>Inicio<span>|</span></a></li>
                    <li
                        onMouseEnter={showDecoramosDropdown}
                        onMouseLeave={hideDecoramosDropdown}
                    >
                        <a href="" style={{color: textColor}}>
                            decoramos<MdOutlineKeyboardArrowDown />
                            <span>|</span></a>
                        {decoramosDropdownVisible && (
                            <ul className={styles.dropdown}>
                                <a href="/home">Casa</a>
                                <a href="/work">Escritório</a>
                            </ul>
                        )}
                    </li>
                    <li><a href="/#"  style={{color: textColor}}>antes e depois<span>|</span></a></li>
                    <li><a href="/projects" style={{color: textColor}}>Projetos<span>|</span></a></li>
                    <li
                        onMouseEnter={showInspiracoesDropdown}
                        onMouseLeave={hideInspiracoesDropdown}
                    >
                        <a href="" style={{color: textColor}}>
                            Inspirações<MdOutlineKeyboardArrowDown />
                            <span>|</span></a>
                        {inspiracoesDropdownVisible && (
                            <ul className={styles.dropdownInspiration}>
                       
                                <a href="/inspiracao1">Cozinha</a>
                                <a href="/inspiracao2">Sala de estar</a>
                            </ul>
                        )}
                    </li>
                    <li><a href="/contact" style={{color: textColor}}>Contato</a></li>
                </ul>
            </div>
        </>
    )
}
