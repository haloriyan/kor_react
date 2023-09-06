import React, { useEffect } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Jumbo from "./components/Jumbo";
import Section from "./components/Section";
import Lang from "./components/Lang";

const Exhibition = () => {
    useEffect(() => {
        document.title = "KMTE - KMTF 2023"
    }, [])
    return (
        <>
            <Header active="exhibition" />
            <div className="content">
                {/* <Jumbo title="Korean Medical Tourism Exhibition" breadcrumb={'KMTE'} /> */}
                <img src="/images/kmte-bg.jpeg" alt="KMTE-bg" style={{
                    width: '100%'
                }} />
                <div style={{padding: 50}}>
                    <Section
                        title={''}
                        description={<Lang ctx="kmte_description" />}
                        image={'/images/ill.jpg'}
                        descriptionStyle={{fontSize: 16,lineHeight: '32px'}}
                        separator={false}
                    />

                    <h3 style={{textAlign: 'center',fontSize: 46,marginTop: 75,marginBottom: 75}}>
                        <Lang ctx="kmte_title" />
                    </h3>

                    <Section
                        title={'Talk Show'}
                        description={<Lang ctx="talkshow_description" />}
                        descriptionStyle={{fontSize: 20,lineHeight: '32px'}}
                        image={'/images/ill.jpg'}
                        imageStyle={{
                            aspectRatio: 1/1,
                            width: 250,
                            height: 250,
                        }}
                        reversed={true}
                    />
                    <Section
                        title={<Lang ctx={'claw_machine_title'} />}
                        description={<Lang ctx="claw_machine_description" />}
                        descriptionStyle={{fontSize: 20,lineHeight: '32px'}}
                        image={'/images/claw-machine.jpg'}
                        imageStyle={{
                            aspectRatio: 1/1,
                            width: 250,
                            height: 250,
                        }}
                        reversed={true}
                    />
                    <Section
                        title={<Lang ctx="make_candle_title" />}
                        description={<Lang ctx="make_candle_description" />}
                        descriptionStyle={{fontSize: 20,lineHeight: '32px'}}
                        image={'/images/candle.jpg'}
                        imageStyle={{
                            aspectRatio: 1/1,
                            width: 250,
                            height: 250,
                        }}
                        reversed={true}
                    />
                    <Section
                        title={"What's Your Tea Type"}
                        description={"What’s Your Tea Type kiosk, Visitors can choose what’s your tea type recommendation in easy way. "}
                        descriptionStyle={{fontSize: 20,lineHeight: '32px'}}
                        image={'/images/candle.jpg'}
                        imageStyle={{
                            aspectRatio: 1/1,
                            width: 250,
                            height: 250,
                        }}
                        reversed={true}
                    />
                    <Section
                        title={"K-Nail Art"}
                        description={"Experience and choose your own favorite colour for your pretty nails."}
                        descriptionStyle={{fontSize: 20,lineHeight: '32px'}}
                        image={'/images/candle.jpg'}
                        imageStyle={{
                            aspectRatio: 1/1,
                            width: 250,
                            height: 250,
                        }}
                        reversed={true}
                    />
                    <Section
                        title={"K-Make Over"}
                        description={"Experience the simple Korean looks from the Make Up Experts."}
                        descriptionStyle={{fontSize: 20,lineHeight: '32px'}}
                        image={'/images/candle.jpg'}
                        imageStyle={{
                            aspectRatio: 1/1,
                            width: 250,
                            height: 250,
                        }}
                        reversed={true}
                    />
                    <Section
                        title={"Techno Area"}
                        description={"Experiences a fun games Throwing ball & Arrow using Virtual Reality at Techno Booth, get more points and get following exchange gifts. "}
                        descriptionStyle={{fontSize: 20,lineHeight: '32px'}}
                        image={'/images/candle.jpg'}
                        imageStyle={{
                            aspectRatio: 1/1,
                            width: 250,
                            height: 250,
                        }}
                        reversed={true}
                    />
                    
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Exhibition;