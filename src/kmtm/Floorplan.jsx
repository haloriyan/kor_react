import React, { useEffect } from "react";
import Header from "../components/Header";
import Jumbo from "../components/Jumbo";
import Footer from "../components/Footer";

const KMTMFloorplan = () => {
    useEffect(() => {
        document.title = "KMTE Floorplan - 2023 Korean Medical Tourism Festival"
    }, [])
    
    return (
        <>
            <Header active="event" />
            <div className="content">
                {/* <Jumbo
                    background="/images/kmtm-bg.jpg"
                    middleBreadcrumb={'kmtm'}
                    title="KMTMFloorplan"
                /> */}
                <Jumbo withNavigation={true} title={
                    <div style={{textTransform: 'none'}}>KMTM Floorplan</div>
                } middleBreadcrumb={'KMTM'} breadcrumb={'Floorplan'} background="/images/Overlay.png" />

                <div className="wrapper" style={{textAlign: 'center'}}>
                    <img src="/kmtm_floorplan.jpg" alt="kmtm Floorplan" style={{width: '100%'}} />
                </div>

                <Footer />
            </div>
        </>
    )
}

export default KMTMFloorplan