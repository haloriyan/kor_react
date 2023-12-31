import { BiCalendar, BiMap } from "react-icons/bi";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Jumbo from "./components/Jumbo";
import Section from "./components/Section";
import styles from './styles/Home.module.css';
import Lang from "./components/Lang";
import { useEffect, useState } from "react";
import lang from "./lang";
import Popup from "./components/Popup";
import axios from "axios";
import config from "./config";

const BusinessMeeting = () => {
    useEffect(() => {
        document.title = "KMTM - 2023 Korea Medical Tourism Festival"
    }, [])

    const [sellers, setSellers] = useState(null);
    const [seller, setSeller] = useState(null);
    const [sitelang, setSiteLang] = useState(null);

    const payload = (payloads, key) => {
        let toReturn = null;
        key += `_${sitelang}`;
        payloads.map((item, i) => {
            if (item.type === key) {
                toReturn = item.value;
            }
        })
        return toReturn;
    }

    useEffect(() => {
        if (sitelang === null) {
            let sl = window.localStorage.getItem('sitelang');
            if (sl === null) {
                sl = 'en';
            }
            setSiteLang(sl);
        }
    }, [sitelang]);

    useEffect(() => {
        if (sellers === null && sitelang !== null) {
            setSeller('loading');
            axios.get(`${config.baseUrl}/api/seller`)
            .then(response => {
                let res = response.data;
                let sellers = res.sellers;
                setSellers(sellers);
            });
        }
    }, [sellers, sitelang]);
    
    return (
        <>
            <Header active="exhibition" />
            <div className="content">
                <Jumbo withNavigation={true} title={
                    <>
                        <div>Korea Medical Tourism Mart</div>
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
                        style={{gap: 50}}
                    />

                    <h4 style={{textAlign: 'center',fontSize: 32}}><Lang ctx="our_seller" /></h4>
                    <div className={styles.SellerArea}>
                        {
                            sellers !== null &&
                            <>
                                {
                                    sellers.map((sllr, s) => (
                                        <div className={styles.SellerItem2} key={s}>
                                            <img src={`${config.baseUrl}/storage/seller_logos/${sllr.logo}`} alt={sllr.logo} className={styles.SellerItemLogo} />
                                            <div className={styles.SellerItemButton} onClick={() => {
                                                setSeller(sllr)
                                            }}>
                                                DETAIL
                                            </div>
                                        </div>
                                    ))
                                }
                                <div className={styles.SellerItem2} style={{aspectRatio: 1/1}}>
                                    <Lang ctx="many_more" format={e => e.toUpperCase()} />
                                </div>
                            </>
                        }
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
                                    <div className={styles.BarText}>27 Oct 2023 | Korea Medical Tourism Mart</div>
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

            {
                (seller !== null && seller !== "loading") &&
                <Popup onDismiss={() => setSeller(null)}>
                    <div style={{display: 'flex',flexDirection: 'column',alignItems: 'center',gap: 40}}>
                        <img src={`${config.baseUrl}/storage/seller_logos/${seller.logo}`} alt={seller.name} className={styles.SellerDetailLogo} />
                        <div style={{display: 'flex',flexGrow: 1,flexDirection: 'column'}}>
                            <h3 style={{margin: 0,fontSize: 32}}>{payload(seller.payloads, 'name')}</h3>
                            <pre style={{fontSize: 14,marginTop: 20,lineHeight: '22px',fontFamily: "sans-serif",whiteSpace: 'pre-wrap',wordWrap: 'break-word'}}>{payload(seller.payloads, 'description')}</pre>

                            <div style={{display: 'flex',flexDirection: 'row',gap: 20,borderBottomWidth: 1,borderBottomColor: '#ddd',borderBottomStyle: 'solid',padding: 20,alignItems: 'center'}}>
                                <b>Download Flyers</b>
                                <div>
                                    <a href={`https://www.kmtf2023.com/SellerFlyers/${seller.name.split(' ').join('_')}.pdf`} target="_blank" style={{color: '#eb2f28'}}>
                                        {seller.name.split(' ').join('_')}.pdf
                                    </a>
                                </div>
                            </div>

                            {
                                seller.specialize !== "" &&
                                <div style={{display: 'flex',flexDirection: 'row',gap: 20,borderBottomWidth: 1,borderBottomColor: '#ddd',borderBottomStyle: 'solid',padding: 20,alignItems: 'center'}}>
                                    <b><Lang ctx="specialize" /></b>
                                    <div>{payload(seller.payloads, `specialization`)}</div>
                                </div>
                            }
                            <div style={{display: 'flex',flexDirection: 'row',gap: 20,borderBottomWidth: 1,borderBottomColor: '#ddd',borderBottomStyle: 'solid',padding: 20,alignItems: 'center'}}>
                                <b><Lang ctx="website" /></b>
                                <div>
                                    <a href={seller.website} target="_blank" style={{color: '#eb2f28'}}>
                                        {seller.website}
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{cursor: 'pointer',marginTop: 20,textAlign: 'center',fontWeight: 700}} onClick={() => setSeller(null)}>
                        <Lang ctx="close" />
                    </div>
                </Popup>
            }
        </>
    )
}

export default BusinessMeeting;