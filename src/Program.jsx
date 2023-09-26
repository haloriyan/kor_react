import Header from "./components/Header";
import Footer from "./components/Footer";
import Jumbo from "./components/Jumbo";
import Section from "./components/Section";
import Lang from "./components/Lang";
import { useEffect } from "react";

const Program = () => {
    useEffect(() => {
        document.title = "Program - 2023 Korean Medical Tourism Festival"
    }, [])
    
    return (
        <>
            <Header active="program" />
            <div className="content">
                <Jumbo background="/images/kmte-bg.jpg" />

                <Section
                    title={'Talk Show'}
                    description={<Lang ctx="talkshow_description" />}
                    descriptionStyle={{fontSize: 20,lineHeight: '32px'}}
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
                    descriptionStyle={{fontSize: 20,lineHeight: '32px'}}
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
                    descriptionStyle={{fontSize: 20,lineHeight: '32px'}}
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
                    descriptionStyle={{fontSize: 20,lineHeight: '32px'}}
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
                    descriptionStyle={{fontSize: 20,lineHeight: '32px'}}
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