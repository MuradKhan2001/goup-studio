import "./zones-style.scss";
import Navbar from "../navbar/navbar";
import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import {useContext, useEffect, useRef, useState} from "react";
import {useTranslation} from "react-i18next";
import {store} from "../app/App";
import {CSSTransition} from "react-transition-group";

const Zones = () => {
    let value = useContext(store);
    const nodeRef = useRef(null);
    const [showModal, setShowModal] = useState(false);
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
        <CSSTransition
            in={showModal}
            nodeRef={nodeRef}
            timeout={300}
            classNames="alert"
            unmountOnExit
        >
            <div className="modal-sloy">
                <div ref={nodeRef} className="modal-card">
                    <div className="main-video">
                        <div className="xbtn">
                            <img onClick={() => setShowModal(false)} src="./img/cross.png" alt=""/>
                        </div>
                        <div className="photo-main">
                            <img src={activePhoto} alt={activePhoto}/>
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
                    <a href=""><img src="./img/instagram.png" alt=""/></a>
                    <a href=""><img src="./img/facebook.png" alt=""/></a>
                    <a href=""><img src="./img/tik-tok.png" alt=""/></a>
                    <a href=""><img src="./img/youtube.png" alt=""/></a>
                </div>
            </div>
            <div className="body-side">
                <div className="header-body">
                    <div className="title">
                        {t("nav2")}
                    </div>
                </div>

                <div className="photos">
                    {zones.map((item, index) => {
                        return <div key={index} data-aos="zoom-in">
                            <div onClick={() => {
                                setActivePhoto(item.image)
                                setShowModal(true)
                            }}
                                 className={`photo ${activePhoto === item.image ? "active-photo" : ""}`}>
                                <img src={item.image} alt=""/>
                                {console.log(item.image)}
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