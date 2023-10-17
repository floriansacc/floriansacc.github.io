import { useState, useEffect } from 'react';
import styles from './styles_css/buttonStyle.module.css';
import { titleListNavigation, listNavigation, presentation } from './data';
import { useContext } from 'react';

import { QueryContext } from './GlobalBody';

const toCheck = 'https://stackoverflow.com/questions/53158796/get-scroll-position-with-reactjs';

export const ButtonNavigation = (props) => {

    const [scrollPosition, setScrollPosition] = useState(0);
    const [ongletActif, setOngletActif] = useState('');
    const { isBigScreen, isPhone, isTablet } = useContext(QueryContext);

    const handleClick = (e) => {
        const x = e.target.innerHTML
        window.location.href = `#${x}`;
    };

    const handleOnME = (e) => {
        e.target.style.backgroundColor = '#56296e';
        e.target.style.transform = "scale(1.05)"
        e.target.style.cursor = 'pointer';
    };

    const handleOnML = (e) => {
        e.target.style.backgroundColor = '';
        e.target.style.color = '';
        e.target.style.transform = "scale(1)"
    };

    const testValue = () => {
        if(props.lang === 'fr') {
            if (scrollPosition > 195) {
                setOngletActif('Présentation')
            } else if (scrollPosition > 1366) {
                setOngletActif('Education')
            } else if (scrollPosition > 2649) {
                setOngletActif('Expérience Professionnelle')
            } else if (scrollPosition > 3627) {
                setOngletActif('Projets')
            } else {
                setOngletActif('')
            } 
        }
    }

    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if(props.lang === 'fr') {
            if ((scrollPosition > 132) && (scrollPosition < 1265)) {
                setOngletActif(listNavigation[props.lang][0])
            } else if ((scrollPosition > 1265) && (scrollPosition < 2548)) {
                setOngletActif(listNavigation[props.lang][1])
            } else if ((scrollPosition > 2548) && (scrollPosition < 3390)) {
                setOngletActif(listNavigation[props.lang][2])
            } else if (scrollPosition > 3390) {
                setOngletActif(listNavigation[props.lang][3])
            } else {
                setOngletActif('')
            } 
        } else if (props.lang ==='en') {
            if ((scrollPosition > 132) && (scrollPosition < 1265)) {
                setOngletActif(listNavigation[props.lang][0])
            } else if ((scrollPosition > 1265) && (scrollPosition < 2502)) {
                setOngletActif(listNavigation[props.lang][1])
            } else if ((scrollPosition > 2502) && (scrollPosition < 3384)) {
                setOngletActif(listNavigation[props.lang][2])
            } else if (scrollPosition > 3384) {
                setOngletActif(listNavigation[props.lang][3])
            } else {
                setOngletActif('')
            }
        } else {
            if ((scrollPosition > 132) && (scrollPosition < 1265)) {
                setOngletActif(listNavigation[props.lang][0])
            } else if ((scrollPosition > 1265) && (scrollPosition < 2488)) {
                setOngletActif(listNavigation[props.lang][1])
            } else if ((scrollPosition > 2488) && (scrollPosition < 3307)) {
                setOngletActif(listNavigation[props.lang][2])
            } else if (scrollPosition > 3307) {
                setOngletActif(listNavigation[props.lang][3])
            } else {
                setOngletActif('')
            }
        }

        return () => {

        }
    }, [scrollPosition, props.lang])

    return (

        <div style={{
            display: isTablet ? 'none' : isPhone ? 'none' : 'flex'
        }} className={styles.navigator}>
        <h2 style={{display: 'none'}} className={styles.h2Nav}>{scrollPosition}</h2>
            <h2 className={styles.h2Nav}>{titleListNavigation[props.lang]}</h2>
            <ul className={styles.ulNav}>{listNavigation[props.lang].map((x,i) => (
                <li onMouseEnter={handleOnME} onMouseLeave={handleOnML} onClick={handleClick} className={ongletActif === x ? styles.liNavActif : styles.liNav} key={`button${props.lang}${i}`}>{x}</li>
            ))}</ul>
        </div>

    )
}