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
        document.title = "KMTM - 2023 Korean Medical Tourism Festival"
    }, [])

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
    
    return (
        <>
            <Header active="exhibition" />
            <div className="content">
                <Jumbo withNavigation={true} title={
                    <>
                        <div>Korean Medical Tourism Mart</div>
                        <div style={{marginTop: 10}}>
                            <a href="/kmtm/register">
                                <button className="JumboButton">
                                    <Lang ctx="pre_reg" />
                                </button>
                            </a>
                        </div>
                    </>
                } breadcrumb={'KMTM'} background="/images/Overlay.png" />
                
                <div className="wrapper">
                    <Section
                        title={''}
                        description={<Lang ctx="kmtm_description" />}
                        image={'/images/1_on_1_meeting.jpeg'}
                        descriptionStyle={{fontSize: 16,lineHeight: '32px'}}
                        separator={false}
                    />

                    <h4 style={{textAlign: 'center',fontSize: 32}}><Lang ctx="our_seller" /></h4>
                    <div className={styles.SellerArea}>
                        {
                            sellers.map((seller, s) => (
                                <div className={styles.SellerItem2}>
                                    <img src={`/images/sellers/${seller.logo}`} alt={seller.logo} className={styles.SellerItemLogo} />
                                    <a href="#" className={styles.SellerItemButton}>
                                        <Lang ctx="download_brochure" />
                                    </a>
                                </div>
                            ))
                        }
                        <div className={styles.SellerItem2} style={{aspectRatio: 1/1}}>
                            <Lang ctx="many_more" format={e => e.toUpperCase()} />
                        </div>
                    </div>

                    <h3 style={{textAlign: 'center',fontSize: 46,marginTop: 80,marginBottom: 0}}>
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

                <Footer />
            </div>
        </>
    )
}

export default BusinessMeeting;