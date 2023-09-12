import styles from "./styles/Contact.module.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Input from "./components/Input";
import Jumbo from "./components/Jumbo";
import { BiMap, BiLogoFacebook, BiLogoInstagram, BiLogoTwitter, BiLogoYoutube, BiCalendar } from "react-icons/bi";
import Lang from "./components/Lang";
import { useEffect } from "react";

const Contact = () => {
    useEffect(() => {
        document.title = "Contact Us - KMTF 2023"
    }, [])
    return (
        <>
            <Header active="contact" />
            <div className="content">
                <Jumbo background="/images/banner_5-2.jpeg" />
                <div style={{height: 50}}></div>
                <div className={styles.Wrapper}>
                    <div className={styles.Left}>
                        <div className={styles.Title}><Lang ctx="meet_us" /></div>
                        <b>Alamat :</b>
                        <div>Wisma GKBI 21th Fl. Suite 2102A</div>
                        <div>Jl. Jend. Sudirman Kav.28 Jakarta 10210, Indonesia</div>

                        <div style={{height: 30}}></div>
                        <b>Jam Kerja :</b>
                        <div>08:00 - 17:00</div>

                        <div style={{height: 30}}></div>

                        <b>Hari Kerja</b>
                        <div>Senin - Jumat (kecuali hari libur nasional)</div>

                        <div className={styles.BoxBar} style={{marginTop: 40}}>
                            <div className={styles.BarIcon}>
                                <BiMap size={20} />
                            </div>
                            <div className={styles.BarText}>Jl. Mayjend Jonosewojo No. 2, Surabaya</div>
                        </div>
                        <div className={styles.BoxBar}>
                            <div className={styles.BarIcon}>
                                <BiCalendar size={20} />
                            </div>
                            <div className={styles.BarText}>27 - 29 <Lang ctx="october" /> 2023</div>
                        </div>
                        {/* <form action="#">
                            <Input label={<Lang ctx="name" />} icon={<BiUser />} />
                            <Input label={<Lang ctx="email" />} icon={<BiEnvelope />} />
                            <Input label={<Lang ctx="message" />} multiline={true} />

                            <div className={styles.FormFooter}>
                                <button className={styles.Button}>
                                    <Lang ctx="send" />
                                </button>
                            </div>
                        </form> */}
                    </div>
                    <div className={styles.Right}>
                        <div className={styles.Title}><Lang ctx="find_us" /></div>
                        <b>No. Telepon :</b>
                        <div>62-21-5785-3030</div>
                        
                        <div style={{height: 30}}></div>

                        <b>No. Fax :</b>
                        <div>62-21-5785-3029</div>

                        <div style={{height: 30}}></div>

                        <b>Email</b>
                        <div>ktojakarta@knto.or.kr</div>

                        <div style={{height: 30}}></div>

                        <b>Website</b>
                        <div>www.visitkorea.or.id</div>

                        <div style={{height: 30}}></div>

                        <div style={{flexDirection: 'row',display: 'flex', gap: 20}}>
                            <a href="https://facebook.com/Koreatourismorganizationindonesiaoffice/" target="_blank" className={`${styles.SocialIcon} ${styles.Facebook}`}>
                                <BiLogoFacebook />
                            </a>
                            <a href="https://twitter.com/ktojakarta?lang=en" target="_blank" className={`${styles.SocialIcon} ${styles.Twitter}`}>
                                <BiLogoTwitter />
                            </a>
                            <a href="https://www.youtube.com/@HealwegoKorea" target="_blank" className={`${styles.SocialIcon} ${styles.Youtube}`}>
                                <BiLogoYoutube />
                            </a>
                            <a href="https://www.instagram.com/ktoid" target="_blank" className={`${styles.SocialIcon} ${styles.Instagram}`}>
                                <BiLogoInstagram />
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{height: 50}}></div>

                <Footer />
            </div>
        </>
    )
}

export default Contact;