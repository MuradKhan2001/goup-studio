import "./zones-style.scss";
import Navbar from "../navbar/navbar";
import Aos from "aos";
import "aos/dist/aos.css";
import {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";

const Zones = () => {
    const {t} = useTranslation();
    const [activePhoto, setActivePhoto] = useState("");

    useEffect(() => {
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

                        <div onClick={() => setActivePhoto("./img/zone1.jpg")} className={`icon ${activePhoto ? "icon-active" : ""}`}>
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
                    <div data-aos="zoom-in">
                        <div onClick={() => setActivePhoto("./img/zone1.jpg")}
                             className={`photo ${activePhoto === "./img/zone1.jpg" ? "active-photo" : ""}`}>
                            <img src="./img/zone1.jpg" alt=""/>
                        </div>
                    </div>

                    <div data-aos="zoom-in">
                        <div onClick={() => setActivePhoto("./img/zone2.jpeg")}
                             className={`photo ${activePhoto === "./img/zone2.jpeg" ? "active-photo" : ""}`}>
                            <img src="./img/zone2.jpeg" alt=""/>
                        </div>
                    </div>

                    <div data-aos="zoom-in">
                        <div onClick={() => setActivePhoto("./img/zone3.jpg")}
                             className={`photo ${activePhoto === "./img/zone3.jpg" ? "active-photo" : ""}`}>
                            <img src="./img/zone3.jpg" alt=""/>
                        </div>
                    </div>

                    <div data-aos="zoom-in">
                        <div onClick={() => setActivePhoto("./img/zone4.jpg")}
                             className={`photo ${activePhoto === "./img/zone4.jpg" ? "active-photo" : ""}`}>
                            <img src="./img/zone4.jpg" alt=""/>
                        </div>
                    </div>
                    <div data-aos="zoom-in">
                        <div onClick={() => setActivePhoto("./img/zone5.jpg")}
                             className={`photo ${activePhoto === "./img/zone5.jpg" ? "active-photo" : ""}`}>
                            <img src="./img/zone5.jpg" alt=""/>
                        </div>
                    </div>
                    <div data-aos="zoom-in">
                        <div onClick={() => setActivePhoto("./img/zone6.jpg")}
                             className={`photo ${activePhoto === "./img/zone6.jpg" ? "active-photo" : ""}`}>
                            <img src="./img/zone6.jpg" alt=""/>
                        </div>
                    </div>
                    <div data-aos="zoom-in">
                        <div onClick={() => setActivePhoto("./img/zone7.jpg")}
                             className={`photo ${activePhoto === "./img/zone7.jpg" ? "active-photo" : ""}`}>
                            <img src="./img/zone7.jpg" alt=""/>
                        </div>
                    </div>
                    <div data-aos="zoom-in">
                        <div onClick={() => setActivePhoto("./img/zone8.jpg")}
                             className={`photo ${activePhoto === "./img/zone8.jpg" ? "active-photo" : ""}`}>
                            <img src="./img/zone8.jpg" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="circle-sloy-one"></div>
        <div className="circle-sloy-two"></div>
    </div>
};

export default Zones