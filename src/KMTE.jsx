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
                        image={'/images/kto_booth.jpg'}
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
                                    <div className={styles.BarText}>The Westin Hotel, Jl. Mayjend Jonosewojo No. 2, Surabaya</div>
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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.5736780871334!2d112.67336147512744!3d-7.2892487927181495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fc498f1cffc5%3A0xc0718e958df80ba0!2sThe%20Westin%20Surabaya!5e0!3m2!1sen!2sid!4v1692679511189!5m2!1sen!2sid" 
                    style={{border: 0}}
                    allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
                    className={styles.MapFrame}
                ></iframe>

                <div style={{padding: 50}}>
                    <h3 style={{textAlign: 'center',fontSize: 46,marginTop: 75,marginBottom: 75}}>
                        <Lang ctx="kmte_title" />
                    </h3>

                    <div className="CardArea">
                        <div className="CardItem">
                            <img src="/images/scan-gift-mystery.png" alt="Scan Gift" className="CardImage" />
                        </div>
                        <div className="CardItem">
                            <img src="/images/lucky-draw.png" alt="Lucky Draw" className="CardImage" />
                        </div>
                        <div className="CardItem">
                            <img src="/images/instagram-challenge.png" alt="Instagram Challenge" className="CardImage" />
                        </div>
                        <div className="CardItem">
                            <div className="CardTitle">AND MORE...</div>
                        </div>
                    </div>

                    <Section
                        title={'Talk Show'}
                        description={<Lang ctx="talkshow_description" />}
                        descriptionStyle={{fontSize: 20,lineHeight: '32px'}}
                        image={'/images/talk-show.png'}
                        imageStyle={{
                            aspectRatio: 1/1,
                            width: 250,
                            height: 250,
                        }}
                        reversed={true}
                    />
                    <Section
                        title={<Lang ctx={'claw_machine_title'} />}
                        description={<Lang ctx="claw_machine_description" />}
                        descriptionStyle={{fontSize: 20,lineHeight: '32px'}}
                        image={'/images/claw-machine.jpg'}
                        imageStyle={{
                            aspectRatio: 1/1,
                            width: 250,
                            height: 250,
                        }}
                        reversed={true}
                    />
                    <Section
                        title={<Lang ctx="make_candle_title" />}
                        description={<Lang ctx="make_candle_description" />}
                        descriptionStyle={{fontSize: 20,lineHeight: '32px'}}
                        image={'/images/make-your-own-candle.png'}
                        imageStyle={{
                            aspectRatio: 1/1,
                            width: 250,
                            height: 250,
                        }}
                        reversed={true}
                    />
                    <Section
                        title={<Lang ctx="teatype_title" />}
                        description={<Lang ctx="teatype_description" />}
                        descriptionStyle={{fontSize: 20,lineHeight: '32px'}}
                        image={'/images/whats-your-tea-type.png'}
                        imageStyle={{
                            aspectRatio: 1/1,
                            width: 250,
                            height: 250,
                        }}
                        reversed={true}
                    />
                    <Section
                        title={"K-Nail Art"}
                        description={<Lang ctx="knail_description" />}
                        descriptionStyle={{fontSize: 20,lineHeight: '32px'}}
                        image={'/images/k-nail.png'}
                        imageStyle={{
                            aspectRatio: 1/1,
                            width: 250,
                            height: 250,
                        }}
                        reversed={true}
                    />
                    <Section
                        title={"K-Make Over"}
                        description={"Experience the simple Korean looks from the Make Up Experts."}
                        descriptionStyle={{fontSize: 20,lineHeight: '32px'}}
                        image={'/images/k-beauty.png'}
                        imageStyle={{
                            aspectRatio: 1/1,
                            width: 250,
                            height: 250,
                        }}
                        reversed={true}
                    />
                    <Section
                        title={"Techno Area"}
                        description={<Lang ctx="techno_description" />}
                        descriptionStyle={{fontSize: 20,lineHeight: '32px'}}
                        image={'/images/techno-booth.jpg'}
                        imageStyle={{
                            aspectRatio: 1/1,
                            width: 250,
                            height: 250,
                        }}
                        reversed={true}
                    />
                    
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Exhibition;