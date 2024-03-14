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

    return (
        <div
            className={styles.navbar_container}
            style={{ backgroundColor: scrollY > 100 ? 'white' : 'transparent' }}
        >
            <NavList textColor={textColor} />
        </div>
    );
}
