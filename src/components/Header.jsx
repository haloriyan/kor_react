import '../App.css';
import styles from "./styles/Header.module.css";
import { BiChevronDown, BiMenu, BiChevronUp, BiCaretLeft, BiChevronLeft, BiChevronRight } from "react-icons/bi";
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
            <a href="/" className={`${styles.LogoWrapper} ${styles.LogoDesktop}`}>
                <img
                    src={'/images/Logo_Inline.png'}
                    height={50}
                    width={'100%'}
                    className={`${styles.Logo}`}
                    alt="Logo"
                />
            </a>
            <a href="/" className={`${styles.LogoWrapper} ${styles.LogoMobile}`}>
                <img
                    src={'/images/logo_no_tagline.png'}
                    height={50}
                    width={150}
                    className={`${styles.Logo}`}
                    alt="Logo"
                />
            </a>

            <nav className={styles.Navigation} style={{maxWidth: '50%'}}>
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
                            <div style={{position: 'relative'}}>
                                KMTE <BiChevronRight />
                                <ul className={styles.SubSubMenu}>
                                    <a href="/kmte">
                                        Overview
                                    </a>
                                    <a href="/kmte/floorplan">
                                        Floorplan
                                    </a>
                                    <a href="/kmte/rundown">
                                        Rundown
                                    </a>
                                    <a href="/kmte/program">
                                        Activity Program
                                    </a>
                                </ul>
                            </div>
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
                    CONTACT US
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
                        <a href="/kmte" className={`${styles.NavSubItem} ${styles.SubSubItemMobile}`}>
                            Overview
                        </a>
                        <a href="/kmte/floorplan" className={`${styles.NavSubItem} ${styles.SubSubItemMobile}`}>
                            Floorplan
                        </a>
                        <a href="/kmte/rundown" className={`${styles.NavSubItem} ${styles.SubSubItemMobile}`}>
                            Rundown
                        </a>
                        <a href="/kmte/program" className={`${styles.NavSubItem} ${styles.SubSubItemMobile}`}>
                            Activity Program
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
                    <div style={{flexGrow: 1}}>CONTACT US</div>
                </a>
            </nav>

            <div className={styles.LogoWrapper}>
                <div className={styles.ChooseLangArea} id="ChooseLangArea" onClick={() => setShowLangOpt(!showLangOpt)}>
                    <div style={{display: 'flex',flexDirection: 'column',flexGrow: 1}}>
                        <div className={styles.ChooseLangLabel}><Lang ctx='lang' /></div>
                        <div style={{display: 'flex',flexGrow: 1}} className='hideOnMobile'><Lang ctx={sitelang} /></div>
                    </div>
                    {
                        showLangOpt ? <BiChevronUp /> : <BiChevronDown />
                    }
                </div>

                {
                    showLangOpt &&
                    <div className={styles.LanguageOptions} id="LanguageOptions">
                        <div className={styles.OptionItem} onClick={() => setLang('id')}>
                            <div><Lang ctx="id" /></div>
                        </div>
                        <div className={styles.OptionItem} onClick={() => setLang('en')}>
                            <div><Lang ctx="en" /></div>
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