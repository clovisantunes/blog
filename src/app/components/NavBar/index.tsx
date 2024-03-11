"use client"
import React, { useEffect, useState } from 'react';
import NavList from '../UI/NavList';
import styles from './styles.module.scss';


export function NavBar() {
    const [scrollY, setScrollY] = useState(0);
    const [ textColor, setTextColor ] = useState('white')
    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        setTextColor(scrollY > 60 ? 'white' : 'black');
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div
                className={styles.navbar_container}
                style={{ backgroundColor: scrollY > 100 ? 'white' : 'transparent' }}
            >
                <NavList  textColor={scrollY > 100 ? textColor : 'white'}/>
            </div>
        </>
    );
}
