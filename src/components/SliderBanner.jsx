'use client'
import React, { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import theStyle from "./styles/SlideBanner.module.css";
import Image from "next/image";

const SliderBanner = ({datas, interval = 5000}) => {
    const [index, setIndex] = useState(0);

    const nextSlide = () => {
        if (index === datas.length - 1) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    }

    const prevSlide = () => {
        if (index !== 0) {
            setIndex(index - 1);
        }
    }

    useEffect(() => {
        let intervalId = setInterval(() => {
            nextSlide();
        }, interval);

        return () => clearInterval(intervalId);
    }, [interval]);

    return (
        <>
            <div style={{position: 'relative'}}>
            {
                datas.map((data, d) => {
                    if (d === index) {
                        return (
                            <a href={data.link} className={theStyle.SlideItem} key={d}>
                                <img 
                                    // src={`${config.baseUrl}/storage/banner_images/${data.image}`} alt={`Slide ${d}`} 
                                    src={data.image}
                                    alt={`Slide ${d}`}
                                    className={theStyle.SlideImage}
                                />
                            </a>
                        )
                    }
                    return null;
                })
            }

            <div className={`${theStyle.SlideControl}`} style={{left: '5%'}} onClick={() => prevSlide()}>
                <FaAngleLeft />
                kiricok
            </div>
            <div className={`${theStyle.SlideControl}`} style={{right: '5%'}} onClick={() => nextSlide()}>
                <FaAngleRight />
            </div>

            <div className={theStyle.ControlArea}>
                {
                    datas.map((data, d) => (
                        <div 
                            key={d}
                            className={`${theStyle.ControlItem} ${d === index ? theStyle.Active : ''}`}
                            onClick={e => {
                                setIndex(d);
                            }}
                        >
                            &nbsp;
                        </div>
                    ))
                }
            </div>
        </div>
        </>
    )
}

export default SliderBanner;