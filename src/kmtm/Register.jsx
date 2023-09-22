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

const KMTMRegister = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [website, setWebsite] = useState('');
    const [reference, setReference] = useState('');
    const [joinType, setJoinType] = useState('personal');
    const [interestingSeller, setInterestingSeller] = useState('');
    const [fromCompany, setFromCompany] = useState('');
    const [lineOfBusiness, setLineOfBusiness] = useState('');
    const [companyEstablished, setCompanyEstablished] = useState('');
    const [siteLang, setSiteLang] = useState(null);
    const [message, setMessage] = useState('');
    const [questions, setQuestions] = useState(null);
    const [answers, setAnswers] = useState(null);
    const [sellers, setSellers] = useState([]);

    const [isLoading, setLoading] = useState(true);
    const [sellersRec, setSellersRec] = useState([]);

    useEffect(() => {
        document.title = "Register to KMTM - 2023 Korean Medical Tourism Festival";
    });

    useEffect(() => {
        if (questions === null && siteLang !== null) {
            setAnswers(lang[siteLang].b2b_questions);
            setQuestions(lang[siteLang].b2b_questions);
        }
    }, [questions, siteLang, lang]);

    useEffect(() => {
        if (isLoading) {
            setLoading(false);
            axios.get(`${config.baseUrl}/api/exhibitor`)
            .then(response => {
                let res = response.data;
                setSellers(res.exhibitors);
            });
        }
    }, [isLoading]);

    useEffect(() => {
        if (siteLang === null) {
            let sl = window.localStorage.getItem('sitelang');
            setSiteLang(sl === null ? 'en' : sl);
        }
    }, [siteLang]);

    const submit = e => {
        axios.post(`https://app.kmtf2023.com/api/kmtm-register`, {
        // axios.post(`http://127.0.0.1:8001/api/kmtm-register`, {
            name, email, phone, joinType, fromCompany, answers, website, reference,
            lineOfBusiness, companyEstablished,
            lang: siteLang
        })
        .then(response => {
            let res = response.data;
            console.log(res);
            setName('');
            setEmail('');
            setPhone('');
            setWebsite('');
            setLineOfBusiness('');
            setCompanyEstablished('');
            setJoinType('company');
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
                            <h2>Register to Korean Medical Tourism Mart</h2>
                            <Input value={name} label={<Lang ctx="name" />} icon={<BiUser />} onInput={e => setName(e.currentTarget.value)} />
                            <Input value={email} label={<Lang ctx="email" />} icon={<BiEnvelope />} onInput={e => setEmail(e.currentTarget.value)} />
                            <Input value={phone} label={<Lang ctx="phone" />} icon={<BiPhone />} onInput={e => setPhone(e.currentTarget.value)} />
                            <Input value={website} label={<Lang ctx="website" />} icon={<BiWindowAlt />} onInput={e => setWebsite(e.currentTarget.value)} />
                            <div style={{fontSize: 12,color: '#888',marginTop: 20}}><Lang ctx="join_type" /></div>
                            <select name="join_type" id="join_type" value={joinType} onChange={e => setJoinType(e.currentTarget.value)}>
                                <option value="company"><Lang ctx="company" /></option>
                                <option value="brand"><Lang ctx="brand" /></option>
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
                                joinType === 'personal' &&
                                sellers.length > 0 &&
                                <>
                                    <Input value={interestingSeller} label={<Lang ctx="interesting_seller" />} onInput={e => setInterestingSeller(e.currentTarget.value)} />

                                    {/*
                                        sellers.map((seller, s) => (
                                            <div className={styles.SellerItem}>
                                                <img 
                                                    src={`${config.baseUrl}/storage/exhibitor_icons/${seller.icon}`} alt={seller.name} 
                                                    className={styles.SellerIcon}
                                                />
                                                <div style={{display: 'flex',flexGrow: 1}}>{seller.name}</div>
                                                <div className={styles.SellerItemButton} onClick={e => {
                                                    // 
                                                }}>Pilih</div>
                                            </div>
                                        ))
                                    */}
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
                                <Input required={false} label={<Lang ctx="company_referer" />} onInput={e => setReference(e.currentTarget.value)} />
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