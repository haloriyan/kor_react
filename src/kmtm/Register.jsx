import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "../styles/KMTM.module.css";
import Header from "../components/Header";
import Jumbo from "../components/Jumbo";
import Footer from "../components/Footer";
import Input from "../components/Input";
import Lang from "../components/Lang";
import { BiEnvelope, BiPhone, BiUser, BiWindowAlt } from "react-icons/bi";
import lang from "../lang";
import Radio from "../components/Radio";
import config from "../config";
import Chip from "../components/Chip";
import InArray from "../components/InArray";

const KMTMRegister = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [website, setWebsite] = useState('');
    const [reference, setReference] = useState('');
    const [joinType, setJoinType] = useState('company');
    const [interestingSeller, setInterestingSeller] = useState([]);
    const [fromCompany, setFromCompany] = useState('');
    const [lineOfBusiness, setLineOfBusiness] = useState('');
    const [companyEstablished, setCompanyEstablished] = useState('');
    const [siteLang, setSiteLang] = useState(null);
    const [message, setMessage] = useState('');
    const [questions, setQuestions] = useState(null);
    const [answers, setAnswers] = useState(null);
    const [sellers, setSellers] = useState(null);
    const [sellersRaw, setSellersRaw] = useState(null);

    const [isLoading, setLoading] = useState(true);
    const [sellersRec, setSellersRec] = useState([]);

    useEffect(() => {
        document.title = "Register to KMTM - 2023 Korea Medical Tourism Festival";
    });

    useEffect(() => {
        if (questions === null && siteLang !== null) {
            setAnswers(lang[siteLang].b2b_questions);
            setQuestions(lang[siteLang].b2b_questions);
        }
    }, [questions, siteLang, lang]);

    useEffect(() => {
        if (siteLang === null) {
            let sl = window.localStorage.getItem('sitelang');
            setSiteLang(sl === null ? 'en' : sl);
        }
    }, [siteLang]);

    useEffect(() => {
        if (siteLang !== null && sellers === null) {
            setSellers([]);
            axios.get(`${config.baseUrl}/api/seller`)
            .then(response => {
                let res = response.data;
                setSellersRaw(res.sellers);
                let theSellers = [];
                res.sellers.map(sllr => {
                    theSellers.push(sllr.name);
                })
                setSellers(theSellers);
            })
            // let sells = lang[siteLang].exhibitors;
            // let slls = [];
            // let sllsRaw = [];
            // sells.map(sell => {
            //     if (sell.logo !== "") {
            //         slls.push(sell.name)
            //         sllsRaw.push(sell)
            //     }
            // });
            // setSellersRaw(sllsRaw);
            // setSellers(slls);
        }
    }, [siteLang, sellers]);
    
    const payload = (payloads, key) => {
        let toReturn = null;
        key += `_${siteLang}`;
        payloads.map((item, i) => {
            if (item.type === key) {
                toReturn = item.value;
            }
        })
        return toReturn;
    }

    const submit = e => {
        axios.post(`${config.baseUrl}/api/kmtm-register`, {
            name, email, phone, joinType, fromCompany, answers, website, reference,
            lineOfBusiness, companyEstablished,
            lang: siteLang,
            interesting_sellers: interestingSeller
        })
        .then(response => {
            let res = response.data;
            setName('');
            setEmail('');
            setPhone('');
            setWebsite('');
            setLineOfBusiness('');
            setCompanyEstablished('');
            setFromCompany('');
            setMessage(res.message);
            setAnswers(questions);
        })
        e.preventDefault();
    }

    return (
        <>
            <Header active="exhibition" />
            <div className="content">
                <Jumbo background="/images/kmtm-bg.jpg" />
                <div className="wrapper">
                    <form onSubmit={submit} className={styles.Form}>
                        <div className={styles.FormInner}>
                            <h2>Register to Korea Medical Tourism Mart</h2>
                            <Input value={name} label={<Lang ctx="name" />} icon={<BiUser />} onInput={e => setName(e.currentTarget.value)} />
                            <Input value={email} label={<Lang ctx="email" />} icon={<BiEnvelope />} onInput={e => setEmail(e.currentTarget.value)} />
                            <Input value={phone} label={<Lang ctx="phone" />} icon={<BiPhone />} onInput={e => setPhone(e.currentTarget.value)} />
                            <Input value={website} label={<Lang ctx="website_sns" />} icon={<BiWindowAlt />} onInput={e => setWebsite(e.currentTarget.value)} />
                            <div style={{fontSize: 12,color: '#888',marginTop: 20}}><Lang ctx="join_type" /></div>
                            <select name="join_type" id="join_type" onChange={e => {
                                setJoinType(e.currentTarget.value)
                            }}>
                                <option value="company"><Lang ctx="company" /></option>
                                <option value="personal"><Lang ctx="personal" /></option>
                            </select>

                            {
                                (joinType === 'company' || joinType === 'brand') &&
                                <>
                                    <Input value={fromCompany} label={<Lang ctx="from_company" />} onInput={e => setFromCompany(e.currentTarget.value)} />
                                    <Input value={lineOfBusiness} label={<Lang ctx="line_of_business" />} onInput={e => setLineOfBusiness(e.currentTarget.value)} />
                                    <Input value={companyEstablished} label={<Lang ctx="established_year" />} onInput={e => setCompanyEstablished(e.currentTarget.value)} />
                                </>
                            }

                            {
                                (siteLang !== null && questions !== null && joinType === 'company') &&
                                questions.map((b2b_question, bq) => {
                                    if (b2b_question.parent_id === null) return (
                                        <div>
                                            <h3>{b2b_question.body}</h3>
                                            {
                                                b2b_question.type === "option" &&
                                                <div style={{display: 'flex',flexDirection: 'row',gap: 20}}>
                                                    {
                                                        b2b_question.options.map((opt, o) => (
                                                            <Radio active={answers[bq].answer === opt} label={opt} onClick={() => {
                                                                let answrs = [...answers];
                                                                answrs[bq].answer = opt;
                                                                setAnswers(answrs);
                                                            }} />
                                                        ))
                                                    }
                                                </div>
                                            }
                                            {
                                                b2b_question.type === "text" &&
                                                <Input required={b2b_question.required} value={answers[bq].answer} label="" onInput={e => {
                                                    let answrs = [...answers];
                                                    answrs[bq].answer = e.currentTarget.value;
                                                    setAnswers(answrs);
                                                }} />
                                            }

                                            {
                                                questions.map((question, q) => {
                                                    if (question.parent_id === b2b_question.id && question.expected_parent_answer === answers[bq].answer) return (
                                                        <div style={{marginTop: 20}}>
                                                            <Input required={question.required} label={question.body} onInput={e => {
                                                                let answrs = [...answers];
                                                                answrs[q].answer = e.currentTarget.value;
                                                                setAnswers(answrs);
                                                            }} />
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    )
                                })
                            }

                            {
                                joinType === 'personal' &&
                                <>
                                    <Input required={false} label={<Lang ctx="company_referer" />} onInput={e => setReference(e.currentTarget.value)} />

                                    <div style={{fontSize: 12,marginTop: 20,color: '#777'}}>
                                        <Lang ctx="interesting_seller" />
                                    </div>
                                    <Chip
                                        value={interestingSeller}
                                        setValue={setInterestingSeller}
                                        options={sellers}
                                        item={(e, i) => (
                                            <div style={{display: 'flex',flexDirection: 'row',gap: 10,alignItems: 'center'}}>
                                                <img 
                                                    src={`/images/sellers/${sellersRaw[i].logo}`} alt={e} 
                                                    style={{
                                                        height: 40,
                                                        aspectRatio: 1,
                                                        borderRadius: 999,
                                                        objectFit: 'cover'
                                                    }}
                                                />
                                                <div>{e}</div>
                                            </div>
                                        )}
                                        max={2}
                                    />

                                    <div style={{marginTop: 20}}>
                                        *<Lang ctx="interesting_seller_note" />
                                    </div>
                                </>
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