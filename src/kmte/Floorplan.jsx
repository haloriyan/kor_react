import React, { useEffect } from "react";
import Header from "../components/Header";
import Jumbo from "../components/Jumbo";
import Footer from "../components/Footer";

const Floorplan = () => {
    useEffect(() => {
        document.title = "KMTE Floorplan - KMTF 2023"
    }, [])
    return (
        <>
            <Header active="event" />
            <div className="content">
                <Jumbo
                    background="/images/kmte-bg.jpeg"
                    middleBreadcrumb={'KMTE'}
                    title="Floorplan"
                />

                <div className="wrapper" style={{textAlign: 'center'}}>
                    <img src="/kmte_floorplan.jpg" alt="KMTE Floorplan" style={{width: '100%'}} />
                </div>

                <Footer />
            </div>
        </>
    )
}

export default Floorplan