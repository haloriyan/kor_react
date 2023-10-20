import React, { useEffect } from "react";
import Header from "../components/Header";
import Jumbo from "../components/Jumbo";
import Footer from "../components/Footer";
import Lang from "../components/Lang";

const KMTMRundown = () => {
    useEffect(() => {
        document.title = "Rundown KMTM - 2023 Korea Medical Tourism Festival";
    }, []);
    return (
        <>
            <Header active="event" />
            <div className="content">
                <Jumbo withNavigation={true} title={
                    <div style={{textTransform: 'none'}}>Rundown</div>
                } middleBreadcrumb={'KMTM'} breadcrumb={'Rundown'} background="/images/Overlay.png" />
                <div className="wrapper">
                    <h2><Lang ctx="friday" />, 27 <Lang ctx="october" /> 2023</h2>
                    {/* <img src="/images/KMTM_Rundown.png" alt="KMTM Rundown" style={{width: '100%'}} /> */}
                    <table>
                        <thead>
                            <tr>
                                <th><Lang ctx="time" /></th>
                                <th>PROGRAM</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>10.00 - 12.00</td>
                                <td>Business Matching (B2B)</td>
                            </tr>
                            <tr>
                                <td>12.00 - 13.00</td>
                                <td>Lunch Break</td>
                            </tr>
                            <tr>
                                <td>12.15 - 12.25</td>
                                <td>Preparation & Opening</td>
                            </tr>
                            <tr>
                                <td>12.25 - 12.30</td>
                                <td>Welcoming Speech</td>
                            </tr>
                            <tr>
                                <td>12.30 - 12.55</td>
                                <td>Acoustic Performance</td>
                            </tr>
                            <tr>
                                <td>12.55 - 12.58</td>
                                <td>Closing by MC</td>
                            </tr>
                            <tr>
                                <td>12.58 - 13.00</td>
                                <td>Preparation</td>
                            </tr>
                            <tr>
                                <td>13.00 - 15.30</td>
                                <td>Business Matching (B2B VIP)</td>
                            </tr>
                            <tr>
                                <td>15.30 - 16.00</td>
                                <td>Coffee Break - 2</td>
                            </tr>
                            <tr>
                                <td>16.00 - 17.00</td>
                                <td>Business Matching (B2B VIP)</td>
                            </tr>
                            <tr>
                                <td>17.00 - 17.40</td>
                                <td>Closing</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default KMTMRundown;