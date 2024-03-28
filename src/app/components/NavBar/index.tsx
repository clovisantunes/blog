"use client"
import React, { useEffect, useState } from 'react';
import NavList from '../UI/NavList';
import styles from './styles.module.scss';

interface NavbarProps {
    color?: string;
}

export function NavBar({ color }: NavbarProps) {
    const [scrollY, setScrollY] = useState(0);
    const [textColor, setTextColor] = useState(color ? 'black' : 'white');
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [ display, setDisplay ] = useState("flex")
    const [ displayMobile, setDisplayMobile ] = useState("none")

    const toggleMobileMenu = () => {
      setMobileMenuOpen(!isMobileMenuOpen);
      if (isMobileMenuOpen) {
          setDisplayMobile("none")
        } else {
        setDisplayMobile("flex")
    }
    };
    useEffect(() => {
        const handleScroll = () => {
            const newScrollY = window.scrollY;
            setScrollY(newScrollY);
            setTextColor(newScrollY > 60 || color ? 'black' : 'white');
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); 
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setDisplay("none");
            } else {
                setDisplay("flex");
                setDisplayMobile("none")
            }
        };

        window.addEventListener('resize', handleResize);

        if (window.innerWidth <= 768) {
            setDisplay("none");
        }

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div
            className={`${styles.navbar_container} ${
                isMobileMenuOpen ? styles.mobileMenuOpen : ""
              }`}
            style={{ backgroundColor: scrollY > 100 ? 'white' : 'transparent' }}
        >
            <NavList textColor={textColor} display={display} />
            <div
        className={`${styles.navBurgerCard} ${
          isMobileMenuOpen ? styles.burgerClicked : ""
        }`}
        onClick={toggleMobileMenu}
      >
        <div className={styles.navBurger1}></div>
        <div className={styles.navBurger2}></div>
        <div className={styles.navBurger3}></div>
      </div>
      <div className={styles.mobileMenu} style={{display: displayMobile}}>
        <span>inicio</span>
        <span>Decoramos</span>
        <span>antes e depois</span>
        <span>Projetos</span>
        <span>Inspirações</span>
        <span>Contato</span>
      </div>
        </div>
    );
}
