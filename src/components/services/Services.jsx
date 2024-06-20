import "./services-style.scss";
import Navbar from "../navbar/navbar";
import Aos from "aos";
import {useTranslation} from "react-i18next";
import {useEffect} from "react";

const Services = () => {
    const {t} = useTranslation();
    useEffect(() => {
        Aos.init({duration: 1000});
    }, []);

    const service = [
        {
            name: "Studio arenda", des: "Studio arenda barcha jixozlar bilan. 1 soatlik narx",
            price: "250 000"
        },
        {
            name: "Mobilogrof", des: "Mobilogrof xizmati. 1 dona video uchun narx",
            price: "250 000"
        },
        {
            name: "Video montaj", des: "Video montaj xizmati. 1 dona video uchun narx",
            price: "250 000"
        },
    ];

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
                    <a href=""><img src="./img/instagram.png" alt=""/></a>
                    <a href=""><img src="./img/facebook.png" alt=""/></a>
                    <a href=""><img src="./img/tik-tok.png" alt=""/></a>
                    <a href=""><img src="./img/youtube.png" alt=""/></a>
                </div>
            </div>
            <div className="body-side">
                <div className="title">
                    {t("nav3")}
                </div>

                <div className="services-box">
                    {service.map((item, index) => {
                        return <div data-aos="flip-left" key={index} className="service">
                            <div className="num-service">0{index + 1}</div>
                            <div className="name">{item.name}</div>
                            <div className="description">
                                {item.des}
                            </div>
                            <div className="price">{item.price}</div>
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