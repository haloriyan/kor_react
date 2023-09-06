import React, { useEffect } from "react";
import Header from "../components/Header";
import Jumbo from "../components/Jumbo";
import Footer from "../components/Footer";
import Lang from "../components/Lang";

const Rundown = () => {
    useEffect(() => {
        document.title = "Rundown KMTE - KMTF 2023";
    }, []);
    return (
        <>
            <Header active="event" />
            <div className="content">
                <Jumbo title="Rundown" middleBreadcrumb={'KMTE'} />
                <div className="wrapper">
                    <h2><Lang ctx="day" /> 1</h2>
                    <img src="/images/KMTE_Day1.png" alt="Day 1 Rundown" style={{width: '100%'}} />
                    <h2><Lang ctx="day" /> 2</h2>
                    <img src="/images/KMTE_Day2.png" alt="Day 2 Rundown" style={{width: '100%'}} />
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Rundown;