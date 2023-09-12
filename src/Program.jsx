import Header from "./components/Header";
import Footer from "./components/Footer";
import Jumbo from "./components/Jumbo";
import Section from "./components/Section";
import Lang from "./components/Lang";
import { useEffect } from "react";

const Program = () => {
    useEffect(() => {
        document.title = "Program - KMTF 2023"
    }, [])
    
    return (
        <>
            <Header active="program" />
            <div className="content">
                <Jumbo background="/images/kmte-bg.jpeg" />

                <Section
                    image={'/images/scan-gift-mystery.png'}
                    imageStyle={{
                        aspectRatio: 1/1,
                        width: 'auto',
                        height: 250
                    }}
                    title={'Scan Gift Mystery'}
                    description={
                        <Lang ctx="scan_gift_description" />
                    }
                    descriptionStyle={{fontSize: 16}}
                />
                <Section
                    image={'/images/lucky-draw.png'}
                    imageStyle={{
                        width: 'auto',
                        height: 250,
                        aspectRatio: 1/1,
                    }}
                    title={'Lucky Draw'}
                    description={
                        <Lang ctx="lucky_draw_description" />
                    }
                    descriptionStyle={{fontSize: 16}}
                    reversed={true}
                />
                <Section
                    image={'/images/instagram-challenge.png'}
                    imageStyle={{
                        aspectRatio: 1/1,
                        width: 'auto',
                        height: 250
                    }}
                    title={'Instagram Challenge'}
                    description={
                        <Lang ctx="instagram_challenge_description" />
                    }
                    descriptionStyle={{fontSize: 16}}
                />

                <Footer />
            </div>
        </>
    )
}

export default Program;