import { BiCopyright, BiLogoFacebook, BiLogoInstagram, BiLogoTwitter, BiLogoYoutube } from "react-icons/bi";
import styles from "./styles/Footer.module.css";

const Footer = () => {
    return (
        <footer className={styles.Footer}>
            <div className={styles.FooterCenter}>
                <div style={{
                    color: '#777',
                }}>
                    <i><BiCopyright /> KTO Jakarta - 2023</i>
                </div>
            </div>
            <div className={styles.FooterRight}>
                <a href="https://facebook.com/Koreatourismorganizationindonesiaoffice/" className={`${styles.RightItem} ${styles.Facebook}`} target="_blank">
                    <BiLogoFacebook size={24} />
                </a>
                <a href="https://www.instagram.com/ktoid" className={`${styles.RightItem} ${styles.Instagram}`} target="_blank">
                    <BiLogoInstagram size={24} />
                </a>
                <a href="https://www.youtube.com/@HealwegoKorea" className={`${styles.RightItem} ${styles.Youtube}`} target="_blank">
                    <BiLogoYoutube size={24} />
                </a>
                <a href="https://twitter.com/ktojakarta" className={`${styles.RightItem} ${styles.Twitter}`} target="_blank">
                    <BiLogoTwitter size={24} />
                </a>
            </div>
        </footer>
    )
}

export default Footer;