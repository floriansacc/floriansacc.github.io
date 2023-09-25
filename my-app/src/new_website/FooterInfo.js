import { useContext, useState, useEffect } from "react";
import { QueryContext } from "./GlobalBody";
import styles from './styles_css/footerStyle.module.css';
import { footerInfo } from "./data";

export default function FooterInfo(props) {
    const { isPhone, isTablet } = useContext(QueryContext);
    const [windowSize, setWindowSize] = useState([
        window.innerWidth,
        window.innerHeight,
    ]);

    const handleClick = (e) => {
        if (e.target.name === 'kakao') {
            let x = document.getElementById('toAppear');
            if (e.target.style.height === '250px') {
                x.style.display = '';
                x.style.position = '';
                x.style.top = ``;
                x.style.left = ``;

                e.target.style.height = '';
                e.target.style.boxShadow = '';
                document.body.style.overflow = '';
                e.target.style.position = '';
                e.target.style.top = '';
                e.target.style.left = '';
                e.target.style.border = '';
                e.target.style.borderRadius = '';
                x.style.width = '';
                x.style.whiteSpace = '';
            } else {
                x.style.display = 'flex';
                x.style.position = 'fixed';
                x.style.top = isPhone ? `${(windowSize[1] / 5) - 60}px` : `${(windowSize[1] / 5)- 30}px`;
                x.style.left = isPhone ? `${(windowSize[0] / 4)}px` : isTablet ?  `${(windowSize[0] / 4)}px` : `${(windowSize[0] / 3)}px`;
                x.style.width = isTablet ? '55%' : isPhone ? '60%' : '';
                x.style.whiteSpace = isTablet ? 'wrap' : '';

                e.target.style.height = '250px';
                e.target.style.boxShadow = '0px 0px 1px 100vw rgba(0,0,0,0.8)';
                document.body.style.overflow = 'hidden';
                e.target.style.position = 'fixed';
                e.target.style.top = `${(windowSize[1] / 2) - 135}px`;
                e.target.style.left = `${(windowSize[0] / 2) - 135}px`;
                e.target.style.border = '10px solid red';
                e.target.style.borderRadius = '25px';
            }
        }
        if (e.target.name === 'else') {

        }
    }

    const handleOnME = (e) => {
        e.target.style.cursor = 'pointer';
    }


    const toStyleFooterGauche = {
        whiteSpace: isTablet ? 'nowrap' : ''

    }

    const toStyleSubTitles = {
        display: isPhone ? 'none' : '',
    }

    const toStyleDivImg = {
        flexDirection: isPhone ? 'row' : '',
        justifyContent: isPhone ? 'center' : ''
    }

    const toStyleSignature = {
        fontSize: isPhone ? '0.8rem' : ''
    }

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize([window.innerWidth, window.innerHeight]);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    return (
        <div className={styles.footerAll}>
            <div style={toStyleFooterGauche} className={styles.footerGauche}>
                <h2 className={styles.footerH2}>{footerInfo[`${props.lang}footer`][0]}</h2>
                <div className={styles.footerSmallDiv}>
                    <p style={toStyleSubTitles} className={styles.footerP}>{footerInfo[`${props.lang}footer`][1]}</p>
                    <span className={styles.footerSpan}>{footerInfo[`${props.lang}footer`][2]}</span>
                </div>
                <div className={styles.footerSmallDiv}>
                    <p style={toStyleSubTitles} className={styles.footerP}>{footerInfo[`${props.lang}footer`][3]}</p>
                    <span className={styles.footerSpan}>{footerInfo[`${props.lang}footer`][4]}</span>
                </div>
                <div style={toStyleDivImg} className={styles.divImgs}>
                    <div className={styles.footerSmallDiv}>
                        <p style={toStyleSubTitles} className={styles.footerP}>{footerInfo[`${props.lang}footer`][5]}</p>
                        <img alt="kakao QR code" onMouseEnter={handleOnME} onClick={handleClick} name='kakao' className={styles.footerImg} src={footerInfo.kakaoImg} />
                    </div>
                    <div className={styles.footerSmallDiv}>
                        <p id="toAppear" className={styles.toAppear}>{footerInfo[`${props.lang}Appear`]}</p>
                        <p style={toStyleSubTitles} className={styles.footerP}>{footerInfo[`${props.lang}footer`][6]}</p>
                        <a href='https://www.instagram.com/floosaketi/' target='_blank'><img alt="Instagram" className={styles.footerImg} src={footerInfo.instaImg} /></a>
                    </div>
                </div>
            </div>
            <div className={styles.footerDroite}>
                <div className={styles.footerSignature}>
                    <p style={toStyleSignature} className={styles.footerSignatureP}>{footerInfo[`${props.lang}signature`]}</p>
                </div>
            </div>
        </div>
    )
}