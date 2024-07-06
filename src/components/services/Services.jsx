import "./services-style.scss";
import Navbar from "../navbar/navbar";
import Aos from "aos";
import {useTranslation} from "react-i18next";
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {store} from "../app/App";
import i18next from "i18next";

const Services = () => {
    let value = useContext(store);
    const {t} = useTranslation();
    const [services, setServices] = useState([]);

    useEffect(() => {
        axios.get(`${value.url}service/`).then((response) => {
            setServices(response.data);
        });
        Aos.init({duration: 1000});
    }, []);

    return <div className="services-wrapper">
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
                    <a href="https://www.instagram.com/goup_uz/" target="_blank"><img src="./img/instagram.png" alt=""/></a>
                    <a href="https://www.facebook.com/profile.php?id=61562086226102" target="_blank"><img src="./img/facebook.png" alt=""/></a>
                    <a href="https://t.me/+r6T9RsMRhcs4ZTYy" target="_blank"><img src="./img/telegram.png" alt=""/></a>
                    <a href="https://www.tiktok.com/@goup_uz?_t=8nnh70jdfyE&_r=1" target="_blank"><img src="./img/tik-tok.png" alt=""/></a>
                    <a href=""><img src="./img/youtube.png" alt=""/></a>
                </div>
            </div>
            <div className="body-side">
                <div className="title">
                    {t("nav3")}
                </div>

                <div className="services-box">
                    {services.map((item, index) => {
                        return <div data-aos="flip-left" key={index} className="service">
                            <div className="num-service">0{index + 1}</div>
                            <div className="name">{item.translations[i18next.language].name}</div>
                            <div className="description">
                                {item.translations[i18next.language].description}
                            </div>
                            <div className="price">{item.cost} {t("price")}</div>
                        </div>
                    })}
                </div>

            </div>
        </div>
        <div className="circle-sloy-one"></div>
        <div className="circle-sloy-two"></div>
    </div>
};

export default Services