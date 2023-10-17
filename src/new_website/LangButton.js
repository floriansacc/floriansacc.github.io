import { useContext } from 'react';
import styles from './styles_css/buttonStyle.module.css';
import { useTheme } from './useTheme';
import { useSpring, animated, easings } from 'react-spring';
import { QueryContext } from './GlobalBody';

export const LangButton = (props) => {
    const { isDarkTheme, onToggleTheme } = useTheme();

    const { isPhone, isTablet } = useContext(QueryContext);

    const handleMouseEnter = (e) => {
        e.preventDefault();
        if (e.target.innerHTML === 'Light' || e.target.innerHTML === 'Dark') {
            return
        } else {
            e.target.style.backgroundColor = '#c9c9c9';
            e.target.style.filter = 'brightness(1.3)';
            e.target.style.transform = 'scale(1.1)';
        }

    }

    const handleMouseLeave = (e) => {
        e.preventDefault();
        if (e.target.innerHTML === 'Light' || e.target.innerHTML === 'Dark') {
            return
        } else {
            e.target.style.backgroundColor = '';
            e.target.style.filter = '';
            e.target.style.transform = '';
        }

    }

    const testSpring = useSpring({
        backgroundColor: isDarkTheme ? 'whitesmoke' : '#282828',
        width: isDarkTheme ? '0%' : '100%',
        left: isDarkTheme ? '25%' : '0%',
        color: isDarkTheme ? '#282828' : '#2b81ff',
        config: {
            duration: 400,
            easing: easings.easeInCirc
        },

    })


    return (
        <div style={{justifyContent: isTablet ? 'space-around' : isPhone ? 'space-between' : ''}} className={styles.bDroite}>
            <div className={styles.bSpringTest} >
                <animated.p style={{
                    color: testSpring.color,
                    width: testSpring.width,
                    backgroundColor: testSpring.backgroundColor
                }} key='themeSwitch' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={onToggleTheme} className={styles.bTheme}>{isDarkTheme ? 'Light' : 'Dark'}</animated.p>
            </div>
            <div className={styles.bLangBox}>
                <button className={props.lang === 'fr' ? styles.bLangActive : styles.bLang} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} name="fr" onClick={props.getChange}>Francais</button>
                <button className={props.lang === 'en' ? styles.bLangActive : styles.bLang} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} name="en" onClick={props.getChange}>Anglais</button>
                <button className={props.lang === 'kr' ? styles.bLangActive : styles.bLang} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} name="kr" onClick={props.getChange}>한국어</button>
            </div>
        </div>
    )
}