"use client"
import styles from './styles.module.scss';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useState } from 'react';

export default function NavList() {
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
            <div className={styles.navList}>
                <ul>
                    <li><a href="/">Inicio</a></li>
                    <li
                        onMouseEnter={showDecoramosDropdown}
                        onMouseLeave={hideDecoramosDropdown}
                    >
                        <a href="">
                            decoramos<MdOutlineKeyboardArrowDown />
                        </a>
                        {decoramosDropdownVisible && (
                            <ul className={styles.dropdown}>
                                <a href="/casa">Casa</a>
                                <a href="/escritorio">Escritório</a>
                            </ul>
                        )}
                    </li>
                    <li><a href="/#">antes e depois</a></li>
                    <li><a href="/#">Projetos</a></li>
                    <li
                        onMouseEnter={showInspiracoesDropdown}
                        onMouseLeave={hideInspiracoesDropdown}
                    >
                        <a href="">
                            Inspirações<MdOutlineKeyboardArrowDown />
                        </a>
                        {inspiracoesDropdownVisible && (
                            <ul className={styles.dropdownInspiration}>
                       
                                <a href="/inspiracao1">Cozinha</a>
                                <a href="/inspiracao2">Sala de estar</a>
                            </ul>
                        )}
                    </li>
                    <li><a href="/contact">Contato</a></li>
                </ul>
            </div>
        </>
    )
}
