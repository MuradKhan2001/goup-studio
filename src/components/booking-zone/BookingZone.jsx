import "./booking-style.scss";
import Navbar from "../navbar/navbar";
import Aos from "aos";
import axios from "axios";
import {useContext, useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {store} from "../app/App";

const BookingZone = () => {
    let value = useContext(store);
    const [success, setSuccess] = useState(false)
    const {t} = useTranslation();
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");

    useEffect(() => {
        Aos.init({duration: 1000});
    }, []);

    const Booking = () => {
        if (name.trim().length > 0 && number.trim().length > 0) {
            let user = {
                name,
                phone: number
            };
            axios.post(`${value.url}client/`, user).then((response) => {
                setName("");
                setNumber("");
                setSuccess(true)
                setTimeout(() => {
                    setSuccess(false)
                }, 4000)
            })
        }
    };

    return <div className="booking-wrapper">
        {
            success && <div className="alert">
                <div className="left-side">
                    <img src="./img/green.svg" alt=""/>
                </div>
                <div className="right-side">
                    {t("sent-text")}
                </div>
                <div className="xbtn">
                    <img onClick={() => setSuccess(false)} src="./img/x-button.png" alt=""/>
                </div>
            </div>
        }

        <div className="left">
            <Navbar/>
        </div>
        <div className="right">
            <div className="header-side">
                <div className="follow-us">
                    {t("social_media")}
                    <div className="line"></div>
                </div>
                <div className="icons-social">
                    <a href=""><img src="./img/instagram.png" alt=""/></a>
                    <a href=""><img src="./img/facebook.png" alt=""/></a>
                    <a href=""><img src="./img/tik-tok.png" alt=""/></a>
                    <a href=""><img src="./img/youtube.png" alt=""/></a>
                </div>
            </div>
            <div className="body-side">
                <div className="booking-card">
                    <div className="title">
                        {(t("booking"))}
                    </div>
                    <div className="des">
                        {t("des")}
                    </div>
                    <div className="form-box">
                        <input onChange={(e) => setName(e.target.value)} value={name} placeholder={t("name")}
                               type="text"/>
                        <input onChange={(e) => setNumber(e.target.value)} value={number} placeholder={t("phone")}
                               type="number"/>
                    </div>
                    <div onClick={Booking} className="send-btn">
                        {t("send")}
                    </div>
                </div>
            </div>
        </div>
        <div className="circle-sloy-one"></div>
        <div className="circle-sloy-two"></div>
    </div>
};

export default BookingZone