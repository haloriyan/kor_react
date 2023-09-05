import '../App.css';
import styles from "./styles/Header.module.css";
import { BiChevronDown, BiMenu, BiChevronUp } from "react-icons/bi";
import {Dropdown, Option} from "./Dropdown";
import { useState, useEffect } from "react";
import Lang from "./Lang";

const Header = ({active = ''}) => {
    const [mobileActive, setMobileActive] = useState(false);
    const [sitelang, setSitelang] = useState(null);
    const [showLangOpt, setShowLangOpt] = useState(false);

    useEffect(() => {
        if (sitelang === null) {
            let sl = window.localStorage.getItem('sitelang');
            setSitelang(
                sl === null ? 'en' : sl
            );
        }
    }, [sitelang]);

    useEffect(() => {
        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
    }, []);

    const handleClick = event => {
        if (showLangOpt) {
            setShowLangOpt(false)
        }
    }

    const setLang = l => {
        window.localStorage.setItem('sitelang', l);
        window.location.reload();
    }

    return (
        <header className={styles.Header}>
            <a href="/" className={styles.LogoWrapper}>
                <img
                    src={'/images/logo_no_tagline.png'}
                    height={50}
                    width={150}
                    className={styles.Logo}
                    alt="Logo"
                />
            </a>

            <nav className={styles.Navigation}>
                <a href="/" className={`${styles.NavItem} ${active === '' ? styles.NavItemActive : ''}`}>
                    HOME
                </a>
                <a className={`${styles.NavItem} ${active === 'exhibition' ? styles.NavItemActive : ''}`}>
                    <div>EVENTS</div>
                    <BiChevronDown />
                    <ul>
                        <a href="/kmtm" className={styles.NavSubItem}>
                            KMTM
                        </a>
                        <a href="/kmte" className={styles.NavSubItem}>
                            KMTE
                        </a>
                    </ul>
                </a>
                {/* <a href="/about" className={`${styles.NavItem} ${active === 'about' ? styles.NavItemActive : ''}`}>
                    ABOUT
                </a> */}
                <a href="/program" className={`${styles.NavItem} ${active === 'program' ? styles.NavItemActive : ''}`}>
                    PROGRAM
                </a>
                <a href="/contact" className={`${styles.NavItem} ${active === 'contact' ? styles.NavItemActive : ''}`}>
                    CONTACT
                </a>
            </nav>

            <nav className={`${styles.NavigationMobile} ${mobileActive ? styles.NavigationMobileActive : ''}`}>
                <a href="/" className={`${styles.NavItem} ${active === '' ? styles.NavItemActive : ''}`}>
                    <div style={{flexGrow: 1}}>HOME</div>
                </a>
                <a href="#" className={`${styles.NavItem} ${active === 'exhibition' ? styles.NavItemActive : ''}`}>
                    <div style={{flexGrow: 1}}>EVENTS</div>
                    <BiChevronDown />
                    <ul>
                        <a href="/kmtm" className={styles.NavSubItem}>
                            KMTM
                        </a>
                        <a href="/kmte" className={styles.NavSubItem}>
                            KMTE
                        </a>
                    </ul>
                </a>
                {/* <a href="/about" className={`${styles.NavItem} ${active === 'about' ? styles.NavItemActive : ''}`}>
                    <div style={{flexGrow: 1}}>ABOUT</div>
                </a> */}
                <a href="/program" className={`${styles.NavItem} ${active === 'program' ? styles.NavItemActive : ''}`}>
                    <div style={{flexGrow: 1}}>PROGRAM</div>
                </a>
                <a href="/contact" className={`${styles.NavItem} ${active === 'contact' ? styles.NavItemActive : ''}`}>
                    <div style={{flexGrow: 1}}>CONTACT</div>
                </a>
            </nav>

            <div className={styles.LogoWrapper}>
                <div className={styles.ChooseLangArea} id="ChooseLangArea" onClick={() => setShowLangOpt(!showLangOpt)}>
                    <img 
                        src={`/images/${sitelang}.png`} alt="Sitelang" 
                        className={styles.FlagIcon}
                    />
                    <div style={{display: 'flex',flexGrow: 1}} className='hideOnMobile'><Lang ctx={sitelang} /></div>
                    {
                        showLangOpt ? <BiChevronUp /> : <BiChevronDown />
                    }
                </div>

                {
                    showLangOpt &&
                    <div className={styles.LanguageOptions} id="LanguageOptions">
                        <div className={styles.OptionItem} onClick={() => setLang('id')}>
                            <img 
                                src={`/images/id.png`} alt="ID" 
                                className={styles.FlagIcon}
                            />
                            <div className='hideOnMobile'><Lang ctx="id" /></div>
                        </div>
                        <div className={styles.OptionItem} onClick={() => setLang('en')}>
                            <img 
                                src={`/images/en.png`} alt="EN" 
                                className={styles.FlagIcon}
                            />
                            <div className="hideOnMobile"><Lang ctx="en" /></div>
                        </div>
                    </div>
                }
            </div>

            <div className={styles.MenuToggle} onClick={() => setMobileActive(!mobileActive)}>
                <BiMenu size={28} color="#172c56" />
            </div>
        </header>
    )
}

export default Header;