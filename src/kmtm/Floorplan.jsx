import React, { useEffect } from "react";
import Header from "../components/Header";
import Jumbo from "../components/Jumbo";
import Footer from "../components/Footer";

const KMTMFloorplan = () => {
    useEffect(() => {
        document.title = "KMTE Floorplan - KMTF 2023"
    }, [])
    
    return (
        <>
            <Header active="event" />
            <div className="content">
                <Jumbo
                    background="/images/kmtm-bg.jpeg"
                    middleBreadcrumb={'kmtm'}
                    title="KMTMFloorplan"
                />

                <div className="wrapper" style={{textAlign: 'center'}}>
                    <img src="/kmtm_floorplan.jpg" alt="kmtm Floorplan" style={{width: '100%'}} />
                </div>

                <Footer />
            </div>
        </>
    )
}

export default KMTMFloorplan