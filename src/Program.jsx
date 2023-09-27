import Header from "./components/Header";
import Footer from "./components/Footer";
import Jumbo from "./components/Jumbo";
import Section from "./components/Section";
import Lang from "./components/Lang";
import { useEffect } from "react";

const Program = () => {
    useEffect(() => {
        document.title = "Program - 2023 Korea Medical Tourism Festival"
    }, [])

    const descriptionStyle = {fontSize: 20,lineHeight: '32px'};
    
    return (
        <>
            <Header active="program" />
            <div className="content">
                <Jumbo withNavigation={true} title={
                    <div style={{textTransform: 'none'}}>Activity Program</div>
                } middleBreadcrumb={'KMTE'} breadcrumb={'Activity Program'} background="/images/Overlay.png" />

                <div className="wrapper">
                    <h3 style={{textAlign: 'center',fontSize: 46,marginTop: 25,marginBottom: 0}}>
                        <Lang ctx="kmte_title" />
                    </h3>
                </div>

                <Section
                    title={'Scan Gift Mystery'}
                    description={<Lang ctx="scan_gift_description" />}
                    descriptionStyle={descriptionStyle}
                    left={
                        <div className="CardItem">
                            <img src="/images/scan-gift-mystery.png" alt="Scan Gift Mystery" className="CardImage" />
                        </div>
                    }
                />
                <Section
                    title={'Lucky Draw'}
                    description={<Lang ctx="lucky_draw_description" />}
                    descriptionStyle={descriptionStyle}
                    left={
                        <div className="CardItem">
                            <img src="/images/lucky-draw.png" alt="Lucky Draw" className="CardImage" />
                        </div>
                    }
                />
                <Section
                    title={'Instagram Challenge'}
                    description={<Lang ctx="instagram_challenge_description" />}
                    descriptionStyle={descriptionStyle}
                    left={
                        <div className="CardItem">
                            <img src="/images/instagram-challenge.png" alt="Instagram Challenge" className="CardImage" />
                        </div>
                    }
                />

                <Section
                    title={'Talk Show'}
                    description={<Lang ctx="talkshow_description" />}
                    descriptionStyle={descriptionStyle}
                    image={'/images/talk-show.png'}
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
                    descriptionStyle={descriptionStyle}
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
                    descriptionStyle={descriptionStyle}
                    image={'/images/make-your-own-candle.png'}
                    imageStyle={{
                        aspectRatio: 1/1,
                        width: 250,
                        height: 250,
                    }}
                    reversed={true}
                />
                <Section
                    title={<Lang ctx="teatype_title" />}
                    description={<Lang ctx="teatype_description" />}
                    descriptionStyle={descriptionStyle}
                    image={'/images/whats-your-tea-type.png'}
                    imageStyle={{
                        aspectRatio: 1/1,
                        width: 250,
                        height: 250,
                    }}
                    reversed={true}
                />
                <Section
                    title={"K-Nail Art"}
                    description={<Lang ctx="knail_description" />}
                    descriptionStyle={descriptionStyle}
                    image={'/images/k-nail.png'}
                    imageStyle={{
                        aspectRatio: 1/1,
                        width: 250,
                        height: 250,
                    }}
                    reversed={true}
                />
                <Section
                    title={"K-Beauty"}
                    description={<Lang ctx="kmake_description" />}
                    descriptionStyle={descriptionStyle}
                    image={'/images/k-beauty.png'}
                    imageStyle={{
                        aspectRatio: 1/1,
                        width: 250,
                        height: 250,
                    }}
                    reversed={true}
                />
                <Section
                    title={"Techno Area"}
                    description={<Lang ctx="techno_description" />}
                    descriptionStyle={descriptionStyle}
                    image={'/images/techno-booth.jpg'}
                    imageStyle={{
                        aspectRatio: 1/1,
                        width: 250,
                        height: 250,
                    }}
                    reversed={true}
                />

                <Footer />
            </div>
        </>
    )
}

export default Program;