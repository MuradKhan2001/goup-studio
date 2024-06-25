import "./zones-style.scss";
import Navbar from "../navbar/navbar";
import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import {useContext, useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {store} from "../app/App";

const Zones = () => {
    let value = useContext(store);
    const {t} = useTranslation();
    const [activePhoto, setActivePhoto] = useState("");
    const [zones, setZones] = useState([]);

    useEffect(() => {
        axios.get(`${value.url}galary/`).then((response) => {
            setZones(response.data);
        });

        Aos.init({duration: 1000});
    }, []);

    return <div className="zones-wrapper">
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
                <div className="header-body">
                    <div className="galery-icons">
                        <div onClick={() => setActivePhoto("")} className={`icon ${!activePhoto ? "icon-active" : ""}`}>
                            <img src="./img/galery1.png" alt=""/>
                        </div>

                        <div onClick={() => zones.length > 0 && setActivePhoto(zones[0].image)}
                             className={`icon ${activePhoto ? "icon-active" : ""}`}>
                            <img src="./img/galery2.png" alt=""/>
                        </div>
                    </div>
                    <div className="title">
                        {t("nav2")}
                    </div>
                    <div></div>
                </div>
                {activePhoto && <div className="active-photo-card">
                    <img src={activePhoto} alt=""/>
                    <div className="download-photo">
                        <img src="./img/download.png" alt=""/>
                    </div>
                </div>}

                <div className={`photos ${activePhoto ? "active" : ""}`}>
                    {zones.map((item, index) => {
                        return <div key={index} data-aos="zoom-in">
                            <div onClick={() => setActivePhoto(item.image)}
                                 className={`photo ${activePhoto === item.image ? "active-photo" : ""}`}>
                                <img src={item.image} alt=""/>
                            </div>
                        </div>
                    })}
                </div>
            </div>
        </div>
        <div className="circle-sloy-one"></div>
        <div className="circle-sloy-two"></div>
    </div>
};

export default Zones