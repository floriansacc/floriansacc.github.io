import styles from './styles_css/mainStyle.module.css'
import './styles_css/fontStyle.css';
import { schoolDetails } from "./data";
import { useContext } from 'react';
import { QueryContext } from './GlobalBody';

export default function PresentationSchool(props) {
    const { isPhone, isTablet } = useContext(QueryContext);

    const toStyleContent2 = {
        width: isTablet ? '95%' : isPhone ? '95%' : '',
        gridTemplateColumns: isPhone ? '100%' : '',
        justifycontent: isPhone ? 'stretch' : '',
        gridAutoRows: isPhone ? 'maxContent' : ''
    };

    const toStyleLsy = {
        width: isPhone ? '50px' : '',
        padding: isPhone ? '0.5rem' : ''
    };

    const toStyleDivImg = {
        flexFlow: isTablet ? '' : isPhone ? 'row wrap' : '',
        justifyContent: isTablet ? '' : isPhone ? 'space-between' : ''
    };

    const toStyleImg = {
        width: isTablet ? '100px' : isPhone ? '100px' : '',
        left: isTablet ? '' : isPhone ? '1%' : ''
    };

    const toStyleTitle = {
        margin: isPhone ? '0' : '',
        padding: isPhone ? '0.75rem 0 0 1rem' : '',
        borderLeft: isPhone ? 'none' : ''
    }

    const toStyleMajor = {
        borderLeft: isPhone ? 'none' : '',
        textAlign: isPhone ? 'left' : '',
        position: isPhone ? 'relative' : '',
        left: isPhone ? '1%' : ''
    }

    const toStyleLi = {
        width: isTablet ? '100%' : isPhone ? '100%' : '',
    };

    const toStyleProf = {
        width: isTablet ? '100%' : isPhone ? '100%' : '',
        textAlign: isPhone ? '' : 'left'
    };


    return (
        <div style={toStyleContent2} className={styles.content2}>
            <div style={toStyleDivImg} className={styles.testDiv} >
                <p style={toStyleLsy} className={styles.pLsy}>{schoolDetails[`${props.lang}${props.name}`][0]}</p>
                <img alt={schoolDetails[`${props.name}img`]} style={toStyleImg} src={schoolDetails[`${props.name}img`]} className={styles.pLsyImg} />
            </div>
            <ul className={styles.ulSchoolWork}>
                {schoolDetails[`${props.lang}${props.name}`].filter(x =>
                    !x.includes('20')).map((y, i) => (
                        <li style={i === 0 ? toStyleTitle : i === 1 ? toStyleMajor : i === 6 ? toStyleProf : toStyleLi} className={i === 0 ? styles.liTitleSchool : i === 1 ? styles.liMajorSchool : i === 6 ? styles.liProf : styles.liSchool} key={`${props.name}${i}`}>{y}</li>
                    ))}
            </ul>

        </div>


    )
}