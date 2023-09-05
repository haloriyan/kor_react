import React, { useState, useEffect } from "react";
import lang from "../lang";

const Lang = ({ctx = 'contact_us'}) => {
    const [content, setContent] = useState(null);
    const [sitelang, setSitelang] = useState(null);

    useEffect(() => {
        if (sitelang === null) {
            let sl = window.localStorage.getItem('sitelang');
            setSitelang(sl === null ? 'en' : sl);
        }
    }, [sitelang]);

    useEffect(() => {
        if (content === null && sitelang !== null) {
            setContent(
                lang[sitelang][ctx]
            )
        }
    }, [content, sitelang, ctx]);

    return content
}

export default Lang;