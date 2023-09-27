import React, { useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Jumbo from "./components/Jumbo";
import Section from "./components/Section";
import Lang from "./components/Lang";
import config from "./config";
import styles from './styles/Home.module.css';
import { BiMap, BiCalendar } from "react-icons/bi";

const Exhibition = () => {
    useEffect(() => {
        document.title = "KMTE - 2023 Korean Medical Tourism Festival"
    }, [])
    return (
        <>
            <Header active="exhibition" />
            <div className="content">
                {/* <Jumbo breadcrumb={'KMTE'} background="/images/kmte-bg.jpg" /> */}
                <Jumbo withNavigation={true} title={
                    <>
                        <div>Korean Medical Tourism Expo</div>
                        {
                            config.kmte_open &&
                            <div style={{marginTop: 10}}>
                                <a href="/kmte/register">
                                    <button className="JumboButton">Register</button>
                                </a>
                            </div>
                        }
                    </>
                } breadcrumb={'KMTE'} background="/images/Overlay.png" />
                <div style={{padding: 50}}>
                    <Section
                        title={''}
                        description={<Lang ctx="kmte_description" />}
                        image={'/images/kto_booth.jpeg'}
                        descriptionStyle={{fontSize: 16,lineHeight: '32px'}}
                        separator={false}
                    />

<Section
                        reversed={true}
                        title={<Lang ctx="find_location" />}
                        description={
                            <>
                                <div className={styles.BoxBar}>
                                    <div className={styles.BarIcon}>
                                        <BiMap size={20} />
                                    </div>
                                    <div className={styles.BarText}>Pakuwon Mall, Jl. Mayjend Jonosewojo No. 2, Surabaya</div>
                                </div>
                                <div className={styles.BoxBar}>
                                    <div className={styles.BarIcon}>
                                        <BiCalendar size={20} />
                                    </div>
                                    <div className={styles.BarText}>27 Oct 2023 | Korean Medical Tourism Mart</div>
                                </div>
                            </>
                        }
                    />
                </div>

                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.574626985207!2d112.6731483751275!3d-7.289141392718268!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fc364741c0c3%3A0xba3176bca0f4205a!2sPakuwon%20Mall%20Surabaya!5e0!3m2!1sen!2sid!4v1695722124029!5m2!1sen!2sid"
                    style={{border: 0}}
                    allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                    className={styles.MapFrame}
                ></iframe>

                <Footer />
            </div>
        </>
    )
}

export default Exhibition;