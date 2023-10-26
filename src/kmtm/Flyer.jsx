import React, { useEffect, useState } from "react";
import styles from "../styles/KMTM.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Jumbo from "../components/Jumbo";
import axios from "axios";
import config from "../config";

const Flyer = () => {
    const [sellers, setSellers] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        document.title = "Seller Flyer - 2023 Korea Medical Tourism Indonesia";
    }, [])

    useEffect(() => {
        if (isLoading) {
            setLoading(false);
            axios.get(`${config.baseUrl}/api/seller`)
            .then(response => {
                let res = response.data;
                setSellers(res.sellers);
            });
        }
    }, [isLoading]);
    
    return (
        <>
            <Header />
            <div className="content">
                <Jumbo
                    withNavigation={true}
                    title={
                        <>
                            <div style={{textTransform: 'none'}}>Seller Flyers</div>
                        </>
                    }
                    breadcrumb={'Flyer'} background="/images/Overlay.png"
                />

                <div style={{padding: 25}}>
                    {
                        sellers.length === 0 ?
                            <div className="flex centerize p-5">...</div>
                        :
                        <div className={styles.Form}>
                            <div className={styles.FormInner}>
                                <div className={styles.FlyerArea}>
                                    {
                                        sellers.map((seller, s) => (
                                            <>
                                                <div className={styles.FlyerItem} key={s}>
                                                    <img src={`${config.baseUrl}/storage/seller_logos/${seller.logo}`} alt={seller.name} className={styles.SellerLogo} />
                                                    <h4 style={{margin: 0,display: 'flex',flexGrow: 1}}>{seller.name}</h4>
                                                    <a href={`https://www.kmtf2023.com/SellerFlyers/${seller.name.split(' ').join('_')}.pdf`} target="_blank" className={styles.FlyerButton}>Download</a>
                                                </div>
                                                {
                                                    s !== sellers.length - 1 &&
                                                    <div className={styles.Separator}></div>
                                                }
                                            </>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    }
                </div>
                <div style={{height: 60}}></div>
                <Footer />
            </div>
        </>
    )
}

export default Flyer;