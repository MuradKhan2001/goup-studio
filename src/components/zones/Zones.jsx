import "./zones-style.scss";
import Navbar from "../navbar/navbar";
import Aos from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import {useCallback, useContext, useEffect, useRef, useState} from "react";
import {useTranslation} from "react-i18next";
import {store} from "../app/App";
import ImageViewer from 'react-simple-image-viewer';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Zones = () => {
    let value = useContext(store);
    const {t} = useTranslation();
    const [activePhoto, setActivePhoto] = useState("");
    const [zones, setZones] = useState([]);

    const [currentImage, setCurrentImage] = useState(0);
    const [isViewerOpen, setIsViewerOpen] = useState(false);

    const openImageViewer = useCallback((index) => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };

    useEffect(() => {
        axios.get(`${value.url}galary/`).then((response) => {
            setZones(response.data);
        });

        Aos.init({duration: 1000});
    }, []);

    return <div className="zones-wrapper">
        <div className="open-viewer">
            {isViewerOpen && (
                <ImageViewer
                    src={zones.map((item)=>item.image)}
                    currentIndex={ currentImage }
                    disableScroll={ false }
                    closeOnClickOutside={ true }
                    onClose={ closeImageViewer }
                />
            )}
        </div>

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
                <div className="header-body">
                    <div className="title">
                        {t("nav2")}
                    </div>
                </div>

                <div className="photos">
                    {zones.map((item, index) => {
                        return <div key={index} >
                            <div onClick={() => {
                                openImageViewer(index)
                            }}
                                 className={`photo ${activePhoto === item.image ? "active-photo" : ""}`}>

                                <LazyLoadImage
                                    alt={item.image}
                                    effect="blur"
                                    wrapperProps={{style: {transitionDelay: "1s"}}}
                                    src={item.image} />
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