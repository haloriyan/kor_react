import React, { useEffect } from "react";
import Header from "../components/Header";
import Jumbo from "../components/Jumbo";
import Footer from "../components/Footer";
import Lang from "../components/Lang";

const KMTMRundown = () => {
    useEffect(() => {
        document.title = "Rundown KMTM - 2023 Korean Medical Tourism Festival";
    }, []);
    return (
        <>
            <Header active="event" />
            <div className="content">
                <Jumbo title="Rundown" middleBreadcrumb={'KMTM'} background="/images/kmtm-bg.jpeg" />
                <div className="wrapper">
                    <h2><Lang ctx="friday" />, 27 <Lang ctx="october" /> 2023</h2>
                    <img src="/images/KMTM_Rundown.png" alt="KMTM Rundown" style={{width: '100%'}} />
                </div>
                <Footer />
            </div>
        </>
    )
}

export default KMTMRundown;