import { useState, useEffect, useContext } from 'react';
import styles from './styles_css/mainStyle.module.css';
import { listNavigation, presentation } from './data';
import { useTransition, animated } from 'react-spring';
import { QueryContext } from './GlobalBody';

export default function PresentationPhoto(props) {
    const [currentMe, setCurrentMe] = useState(0);
    const { isBigScreen, isPhone, isTablet } = useContext(QueryContext);

    const handleHME = (e) => {
        e.target.style.transform = "";
    };

    const handleML = (e) => {
        e.target.style.transform = '';
    };

    const handleBullet = (e) => {
        setCurrentMe(e.target.innerHTML);
    };

    const transitions = useTransition(presentation[props.lang].src[currentMe], {
        from: { opacity: 0, transform: 'scale(1.2)' },
        enter: { opacity: 1, transform: 'scale(1)' },
        leave: { opacity: 0, transform: 'scale(0.9)' },
    });

    const toStyleContent1 = {
        height: isPhone ? '30rem' : '',
        left: isBigScreen ? '-10%' : '',

    }

    const toStyleH2 = {
        width: isPhone ? '80%' : '',
        left: isPhone ? '5%' : '',
        textAlign: isPhone ? 'center' : '',
    }

    useEffect(() => {
        const intervalID = setInterval(() => {
            setCurrentMe(prev => {
                const nextMe = prev + 1
                return nextMe % presentation[props.lang].src.length
            });
        }, 5000);
        return () => clearInterval(intervalID);
    }, [currentMe])

    return (
        <div className={styles.content1}>
            <h1 id={listNavigation[props.lang][0]} className={styles.content1Title}>{listNavigation[props.lang][0]}</h1>
            <p className={styles.content1Nom}>{presentation[props.lang].name}</p>
            <ul className={styles.bulletUL}>
                {presentation[props.lang].src.map((x, i) => (
                    <li onClick={handleBullet} className={`${styles.bulletLi} ${currentMe % presentation[props.lang].src.length === i ? styles.bulletLiOn : ''}`}>{i}</li>
                ))}
            </ul>
            <div style={toStyleContent1} id={`img${currentMe}`} className={styles.content1PhotoBox}>
                {transitions((styles, item) => (
                    <animated.img style={{
                        ...styles,
                        position: 'absolute',
                        top: isPhone ? '' : isBigScreen ? '-15rem' : '-10rem',
                        left: '0',
                        width: '100%',
                        height: 'auto',
                        willChange: 'opacity',
                    }} src={item} onMouseEnter={handleHME} onMouseLeave={handleML} key={presentation[props.lang].src[currentMe]} alt="photo de moi" />
                ))}

            </div>
            <div>
                <h2 style={toStyleH2} className={styles.content1H2}>{presentation[props.lang].intro1}</h2>
                <h2 style={toStyleH2} className={styles.content1H2}>{presentation[props.lang].intro2}</h2></div>
        </div>
    )
}