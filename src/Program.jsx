import Header from "./components/Header";
import Footer from "./components/Footer";
import Jumbo from "./components/Jumbo";
import Section from "./components/Section";
import Lang from "./components/Lang";

const Program = () => {
    return (
        <>
            <Header active="program" />
            <div className="content">
                <Jumbo title="Program" />

                <Section
                    image={'/images/mcu.jpg'}
                    title={'Scan Gift Mystery'}
                    description={
                        <Lang ctx="scan_gift_description" />
                    }
                    descriptionStyle={{fontSize: 16}}
                />
                <Section
                    image={'/images/facial.jpg'}
                    title={'Lucky Draw'}
                    description={
                        <Lang ctx="lucky_draw_description" />
                    }
                    descriptionStyle={{fontSize: 16}}
                    reversed={true}
                />
                <Section
                    image={'/images/GATE_1.jpg'}
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