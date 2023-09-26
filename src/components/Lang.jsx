import React, { useState, useEffect } from "react";
import lang from "../lang";

const Lang = ({ctx = 'contact_us', format = null}) => {
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
            let theContent = lang[sitelang][ctx];
            if (format !== null) {
                theContent = format(theContent);
            }
            setContent(theContent);
        }
    }, [content, sitelang, ctx]);

    return content
}

export default Lang;