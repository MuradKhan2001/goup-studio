import "./home-style.scss";
import Navbar from "../navbar/navbar";
import {CSSTransition} from "react-transition-group";
import Aos from "aos";
import {useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useTranslation} from "react-i18next";

const Home = () => {
    const {t} = useTranslation();
    const navigate = useNavigate();
    const nodeRef = useRef(null);
    const [showModal, setShowModal] = useState(false);
    const [showModalVideo, setShowModalVideo] = useState(false);
    const [name, setName] = useState("");
    const [number, setNumber] = useState("+998");
    useEffect(() => {
        Aos.init({duration: 1000});
    }, []);

    return <div className="home-wrapper">
        <CSSTransition
            in={showModal}
            nodeRef={nodeRef}
            timeout={300}
            classNames="alert"
            unmountOnExit
        >
            <div className="modal-sloy">
                <div ref={nodeRef} className="modal-card">
                    <div className="booking-zone">
                        <div className="xbtn">
                            <img onClick={() => setShowModal(false)} src="./img/cross.png" alt=""/>
                        </div>
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
        </CSSTransition>

        <CSSTransition
            in={showModalVideo}
            nodeRef={nodeRef}
            timeout={300}
            classNames="alert"
            unmountOnExit
        >
            <div className="modal-sloy">
                <div ref={nodeRef} className="modal-card">
                    <div className="main-video">
                        <div className="xbtn">
                            <img onClick={() => setShowModalVideo(false)} src="./img/cross.png" alt=""/>
                        </div>
                        <div className="video-main">
                            <video controls autoPlay loop muted src="./img/about-us.mp4"></video>
                        </div>
                    </div>
                </div>
            </div>
        </CSSTransition>

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
                    <a href="https://www.facebook.com/profile.php?id=61562086226102" target="_blank"><img
                        src="./img/facebook.png" alt=""/></a>
                    <a href="https://t.me/+r6T9RsMRhcs4ZTYy" target="_blank"><img src="./img/telegram.png" alt=""/></a>
                    <a href="https://www.tiktok.com/@goup_uz?_t=8nnh70jdfyE&_r=1" target="_blank"><img
                        src="./img/tik-tok.png" alt=""/></a>
                    <a href="https://www.youtube.com/@GoUp_uz" target="_blank"><img src="./img/youtube.png" alt=""/></a>
                </div>
            </div>
            <div className="body-side">
                <div className="home-contents">
                    <div data-aos="zoom-out-up" className="title">{t("home_text1")}</div>
                    <div data-aos="zoom-out-up" className="des">{t("home_text2")}</div>

                    <div data-aos="zoom-out-up" onClick={() => {
                        navigate("/booking-zone")
                        // setShowModal(true)
                    }} className="text-box">
                        <div className="btn btn-white btn-animate">
                            {t("booking")}
                        </div>
                    </div>

                </div>

            </div>
            <div className="footer-side">
                <div className="location">
                    <div className="title">
                        <img src="./img/location1.png" alt=""/>
                        {t("location")}
                    </div>
                    <div className="loc">
                        {t("location_name")}
                    </div>
                </div>
                <div className="location">
                    <div className="title">
                        <img src="./img/phone.png" alt=""/>
                        {t("phone")}
                    </div>
                    <div className="loc">
                        +998 95 111-90-20
                    </div>
                </div>

                <div className="video-box">
                    <img onClick={() => setShowModalVideo(true)} src="./img/play-button.png" alt=""/>
                    <div className="left-text">
                        <div className="title">
                            {t("about_us")}
                        </div>
                        <div className="loc">
                            {t("des_about")}
                        </div>
                    </div>
                </div>
            </div>
            <div className="video-box">

            </div>
        </div>

        <div className="circle-sloy-one"></div>
        <div className="circle-sloy-two"></div>
    </div>
};

export default Home