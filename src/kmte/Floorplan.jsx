import React, { useEffect } from "react";
import Header from "../components/Header";
import Jumbo from "../components/Jumbo";
import Footer from "../components/Footer";

const Floorplan = () => {
    useEffect(() => {
        document.title = "KMTE Floorplan - 2023 Korea Medical Tourism Festival"
    }, [])
    return (
        <>
            <Header active="event" />
            <div className="content">
                <Jumbo withNavigation={true} title={
                    <div style={{textTransform: 'none'}}>KMTE Floorplan</div>
                } middleBreadcrumb={'KMTE'} breadcrumb={'Floorplan'} background="/images/Overlay.png" />

                <div className="wrapper" style={{textAlign: 'center'}}>
                    <img src="/kmte_floorplan.jpg" alt="KMTE Floorplan" style={{width: '100%'}} />
                </div>

                <Footer />
            </div>
        </>
    )
}

export default Floorplan