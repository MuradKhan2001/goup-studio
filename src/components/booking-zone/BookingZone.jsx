import "./booking-style.scss";
import Navbar from "../navbar/navbar";
import Aos from "aos";
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";

const BookingZone = () => {
    const {t} = useTranslation();
    const [name, setName] = useState("");
    const [number, setNumber] = useState("+998");

    useEffect(() => {
        Aos.init({duration: 1000});
    }, []);

    return <div className="booking-wrapper">
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
                    <div className="send-btn">
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