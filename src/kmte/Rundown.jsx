import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Jumbo from "../components/Jumbo";
import Footer from "../components/Footer";
import Lang from "../components/Lang";
import styles from "../styles/Rundown.module.css";

const Rundown = () => {
    useEffect(() => {
        document.title = "Rundown KMTE - 2023 Korea Medical Tourism Festival";
    }, []);
    const [tab, setTab] = useState('day1');

    return (
        <>
            <Header active="event" />
            <div className="content">
                {/* <Jumbo title="Rundown" middleBreadcrumb={'KMTE'} background="/images/Overlay.png" /> */}
                <Jumbo withNavigation={true} title={
                    <div style={{textTransform: 'none'}}>Rundown</div>
                } middleBreadcrumb={'KMTE'} breadcrumb={'Rundown'} background="/images/Overlay.png" />
                <div className="wrapper">
                    <div className={styles.tab}>
                        <div className={`${styles.TabItem} ${tab === 'day1' ? styles.TabActive : ''}`} onClick={() => setTab('day1')}>
                            <Lang ctx="day" /> 1 - <Lang ctx="saturday" />, 28 <Lang ctx="october" /> 2023
                        </div>
                        <div className={`${styles.TabItem} ${tab === 'day2' ? styles.TabActive : ''}`} onClick={() => setTab('day2')}>
                            <Lang ctx="day" /> 2 - <Lang ctx="sunday" />, 29 <Lang ctx="october" /> 2023
                        </div>
                    </div>
                    {/* <img src="/images/KMTE_Day1.png" alt="Day 1 Rundown" style={{width: '100%'}} /> */}
                    {
                        tab === 'day1' &&
                        <table>
                            <thead>
                                <tr>
                                    <th><Lang ctx="time" /></th>
                                    <th>PROGRAM</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>13.00 - 14.00</td>
                                    <td>Opening Ceremony & Press Conference</td>
                                </tr>
                                <tr>
                                    <td>19.00 - 20.00</td>
                                    <td>Wellness Talk</td>
                                </tr>
                                <tr>
                                    <td>20.30 - 21.15</td>
                                    <td>Live Acoustic</td>
                                </tr>
                            </tbody>
                        </table>
                    }
                    {
                        tab === 'day2' &&
                        <table>
                            <thead>
                                <tr>
                                    <th><Lang ctx="time" /></th>
                                    <th>PROGRAM</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>12.00 - 13.00</td>
                                    <td>Korea Medical Beauty</td>
                                </tr>
                                <tr>
                                    <td>16.00 - 17.00</td>
                                    <td>Sharing Wow Korea Supporters 2023 Session</td>
                                </tr>
                                <tr>
                                    <td>18.00 - 19.00</td>
                                    <td>K-Make Over (Personal Color Curator)</td>
                                </tr>
                                <tr>
                                    <td>20.00 - 20.30</td>
                                    <td>Announcement Winner (Lucky Draw & Instagram Challenge)</td>
                                </tr>
                                <tr>
                                    <td>20.30 - 21.15</td>
                                    <td>Live Acoustic</td>
                                </tr>
                            </tbody>
                        </table>
                    }

                    <div style={{height: 40}}></div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Rundown;