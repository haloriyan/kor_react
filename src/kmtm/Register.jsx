import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "../styles/KMTM.module.css";
import Header from "../components/Header";
import Jumbo from "../components/Jumbo";
import Footer from "../components/Footer";
import Input from "../components/Input";
import Lang from "../components/Lang";
import { BiEnvelope, BiPhone, BiUser } from "react-icons/bi";

const KMTMRegister = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [joinType, setJoinType] = useState('personal');
    const [fromCompany, setFromCompany] = useState('');
    const [siteLang, setSiteLang] = useState(null);
    const [message, setMessage] = useState('');

    useEffect(() => {
        document.title = "Register to KMTM - Korean Medical Tourism Festival 2023";
    });

    useEffect(() => {
        if (siteLang === null) {
            let sl = window.localStorage.getItem('sitelang');
            setSiteLang(sl === null ? 'en' : sl);
        }
    }, [siteLang]);

    const submit = e => {
        axios.post(`https://app.kmtf2023.com/api/kmtm-register`, {
            name, email, phone, joinType, fromCompany,
            lang: siteLang
        })
        .then(response => {
            let res = response.data;
            setName('');
            setEmail('');
            setPhone('');
            setJoinType('');
            setMessage(res.message);
        })
        e.preventDefault();
    }

    return (
        <>
            <Header active="exhibition" />
            <div className="content">
                <Jumbo background="/images/kmtm-bg.jpeg" />
                <div className="wrapper">
                    <form onSubmit={submit} className={styles.Form}>
                        <div className={styles.FormInner}>
                            <h2>Register to Korean Medical Tourism Mart</h2>
                            <Input label={<Lang ctx="name" />} icon={<BiUser />} onInput={e => setName(e.currentTarget.value)} />
                            <Input label={<Lang ctx="email" />} icon={<BiEnvelope />} onInput={e => setEmail(e.currentTarget.value)} />
                            <Input label={<Lang ctx="phone" />} icon={<BiPhone />} onInput={e => setPhone(e.currentTarget.value)} />
                            <div style={{fontSize: 12,color: '#888',marginTop: 20}}><Lang ctx="join_type" /></div>
                            <select name="join_type" id="join_type" value={joinType} onChange={e => setJoinType(e.currentTarget.value)}>
                                <option value="company"><Lang ctx="company" /></option>
                                <option value="brand"><Lang ctx="brand" /></option>
                                <option value="personal"><Lang ctx="personal" /></option>
                            </select>

                            {
                                (joinType === 'company' || joinType === 'brand') &&
                                <Input label={<Lang ctx="from_company" />} onInput={e => setFromCompany(e.currentTarget.value)} />
                            }

                            {
                                message !== "" &&
                                <div style={{backgroundColor: '#2ecc71',padding: 15,borderRadius: 5,color: '#fff',marginTop: 20,fontSize: 14}}>
                                    {message}
                                </div>
                            }

                            <button className={styles.Button}>REGISTER</button>
                        </div>
                    </form>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default KMTMRegister;