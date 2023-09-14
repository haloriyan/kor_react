import { BiCalendar, BiMap } from "react-icons/bi";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Jumbo from "./components/Jumbo";
import Section from "./components/Section";
import styles from './styles/Home.module.css';
import Lang from "./components/Lang";
import { useEffect } from "react";

const BusinessMeeting = () => {
    useEffect(() => {
        document.title = "KMTM - KMTF 2023"
    }, [])
    
    return (
        <>
            <Header active="exhibition" />
            <div className="content">
                <Jumbo title={
                    <div style={{textAlign: 'center'}}>
                        <a href="/kmtm/register">
                            <button className="JumboButton">Register</button>
                        </a>
                    </div>
                } breadcrumb={'KMTM'} background="/images/kmtm-bg.jpg" />
                {/* <img src="/images/kmtm-bg.jpeg" alt="KMTM-bg" style={{
                    width: '100%'
                }} /> */}
                <div style={{padding: 50}}>
                    <Section
                        title={''}
                        description={<Lang ctx="kmtm_description" />}
                        image={'/images/1_on_1_meeting.jpg'}
                        descriptionStyle={{fontSize: 16,lineHeight: '32px'}}
                        separator={false}
                    />

                    <h3 style={{textAlign: 'center',fontSize: 46,marginTop: 20,marginBottom: 0}}>
                        <Lang ctx="kmtm_title" />
                    </h3>

                    <Section
                        reversed={true}
                        title={<Lang ctx="find_location" />}
                        description={
                            <>
                                <div className={styles.BoxBar}>
                                    <div className={styles.BarIcon}>
                                        <BiMap size={20} />
                                    </div>
                                    <div className={styles.BarText}>The Westin Hotel, Jl. Mayjend Jonosewojo No. 2, Surabaya</div>
                                </div>
                                <div className={styles.BoxBar}>
                                    <div className={styles.BarIcon}>
                                        <BiCalendar size={20} />
                                    </div>
                                    <div className={styles.BarText}>28 - 29 Oct 2023 | Korean Medical Tourism Mart</div>
                                </div>
                            </>
                        }
                    />
                </div>
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.5736780871334!2d112.67336147512744!3d-7.2892487927181495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fc498f1cffc5%3A0xc0718e958df80ba0!2sThe%20Westin%20Surabaya!5e0!3m2!1sen!2sid!4v1692679511189!5m2!1sen!2sid" 
                    style={{border: 0}}
                    allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                    className={styles.MapFrame}
                ></iframe>

                <Footer />
            </div>
        </>
    )
}

export default BusinessMeeting;