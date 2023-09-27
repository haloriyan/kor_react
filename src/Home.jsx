import { MdEast } from "react-icons/md";
import Header from "./components/Header";
import Footer from "./components/Footer";
import styles from './styles/Home.module.css';
import Section from "./components/Section";
import { BiCalendar, BiMap, BiSpeaker, BiVolumeFull } from "react-icons/bi";
import Lang from "./components/Lang";
import { useEffect, useRef, useState } from "react";
import config from "./config";
import Popup from "./components/Popup";

const Home = () => {
    const videoRef = useRef(null);
    const [headerOpacity, setHeaderOpacity] = useState(0.05);
    const [kmtePopup, setKmtePopup] = useState(false);

    const sellers = [
        {logo: "bedah_plastik_view.png"},
        {logo: "hershe.png"},
        {logo: "jane_dmc.png"},
        {logo: "jaseng.png"},
        {logo: "medical_korea_service.png"},
        {logo: "ruby_plastic_surgery.png"},
        {logo: "seoul-tourism.png"},
        {logo: "stantop.png"},
        {logo: "wonjin.png"},
    ];

    const handleScroll = e => {
        let pos = window.scrollY;
        if (pos <= 18000) {
            let calculate = pos / 18000 * 100;
            if (calculate > 0.05) {
                setHeaderOpacity(calculate);
            }
        }
    }

    useEffect(() => {
        document.title = "2023 Korean Medical Tourism Festival";
        videoRef.current.play()
    }, []);

    useEffect(() => {
        document.addEventListener('scroll', handleScroll);
        return () => document.removeEventListener('scroll', handleScroll);
    })

    return (
        <>
            <Header opacity={1} />
            <div className="content">
                <img src="/images/kmtf-bg.jpg" alt="Top Banner" style={{
                    width: '100%',
                    objectFit: 'cover'
                }} />

                <Section
                    // image={'/images/slide_banner.jpeg'}
                    left={
                        <div style={{flexBasis: window.screen.width < 480 ? '100%' : '100%'}}>
                            <video ref={videoRef} width={'100%'} muted playsInline onEnded={() => {
                                videoRef.current.currentTime = 0;
                                videoRef.current.play()
                            }}>
                                <source src="/bumper.mp4" type="video/mp4" />
                            </video>
                            {
                                videoRef.current !== null &&
                                <div style={{cursor: 'pointer',display: 'flex',alignItems: 'center',gap: 10,marginTop: 10,fontSize: 14}} onClick={(e) => {
                                    videoRef.current.muted = false;
                                    e.currentTarget.remove()
                                }}>
                                    <BiVolumeFull size={18} />
                                    <Lang ctx="enable_sound" />
                                </div>
                            }
                        </div>
                    }
                    title={'2023 Korean Medical Tourism Festival'}
                    description={<Lang ctx="kmtf_description" />}
                    descriptionStyle={{fontSize: 15}}
                    action={
                        <div className={styles.RegisterArea}>
                            <a href="/kmtm/register" className={styles.RegisterButton} target="_blank">
                                <Lang ctx="pre_reg_kmtm" />
                            </a>
                            <button className={styles.RegisterButton} onClick={() => {
                                if (!config.kmte_open) {
                                    setKmtePopup(true);
                                } else {
                                    window.location.href = "https://app.kmtf2023.com";
                                }
                            }}>
                                <Lang ctx="register_kmte_button" />
                            </button>
                        </div>
                    }
                />

                <h4 style={{textAlign: 'center',fontSize: 32,marginTop: 0}}><Lang ctx="our_seller" /></h4>
                <div className={styles.SellerArea}>
                    {
                        sellers.map((seller, s) => (
                            <div key={s} className={styles.SellerItem} style={{
                                backgroundImage: `url('/images/sellers/${seller.logo}')`,
                                backgroundSize: 'cover'
                            }}></div>
                        ))
                    }
                    <div className={styles.SellerItem}>
                        <Lang ctx="many_more" format={e => e.toUpperCase()} />
                    </div>
                </div>

                <Section
                    reversed={true}
                    title={<Lang ctx="find_location" />}
                    description={
                        <>
                            <div className={styles.BoxBar}>
                                <div className={styles.BarIcon}>
                                    <BiMap size={20} />
                                </div>
                                <div className={styles.BarText}>Jl. Mayjend Jonosewojo No. 2, Surabaya</div>
                            </div>
                            <div className={styles.BoxBar}>
                                <div className={styles.BarIcon}>
                                    <BiCalendar size={20} />
                                </div>
                                <div className={styles.BarText}>27 Oct 2023 | Korean Medical Tourism Mart | The Westin Hotel</div>
                            </div>
                            <div className={styles.BoxBar}>
                                <div className={styles.BarIcon}>
                                    <BiCalendar size={20} />
                                </div>
                                <div className={styles.BarText}>28 - 29 Oct 2023 | Korean Medical Tourism Expo | Grand Atrium Pakuwon Mall</div>
                            </div>
                        </>
                    }
                />

                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.5736780871334!2d112.67336147512744!3d-7.2892487927181495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fc498f1cffc5%3A0xc0718e958df80ba0!2sThe%20Westin%20Surabaya!5e0!3m2!1sen!2sid!4v1692679511189!5m2!1sen!2sid" 
                    style={{border: 0}}
                    allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                    className={styles.MapFrame}
                ></iframe>

                <Footer />
            </div>

            {
                kmtePopup &&
                <Popup onDismiss={() => setKmtePopup(false)}>
                    <Lang ctx="kmte_warning" />
                    <div style={{textAlign: 'center',marginTop: 20,color: '#72c56',fontWeight: 700,cursor: 'pointer'}} onClick={() => {
                        setKmtePopup(false)
                    }}>
                        <Lang ctx="close" />
                    </div>
                </Popup>
            }
        </>
    )
}

export default Home;