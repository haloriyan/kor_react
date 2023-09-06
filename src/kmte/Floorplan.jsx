import React from "react";
import Header from "../components/Header";
import Jumbo from "../components/Jumbo";
import Footer from "../components/Footer";

const Floorplan = () => {
    return (
        <>
            <Header active="event" />
            <div className="content">
                <Jumbo
                    middleBreadcrumb={'KMTE'}
                    title="Floorplan"
                />

                <div className="wrapper" style={{textAlign: 'center'}}>
                    <iframe src="/kmte_floorplan.pdf" style={{width: '70%',margin: '0 auto',height: 800}} frameborder="0"></iframe>
                </div>

                <Footer />
            </div>
        </>
    )
}

export default Floorplan