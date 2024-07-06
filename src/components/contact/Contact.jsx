import "./contact-style.scss";
import Navbar from "../navbar/navbar";
import {useEffect, useState, useMemo} from "react";
import Aos from "aos";
import i18next from "i18next";
import {GOOGLE_MAPS_API_KEY} from "./googleMapsApi";
import {GoogleMap, useLoadScript, MarkerF} from "@react-google-maps/api";
import Loader from "../loader/Loader";
import {useTranslation} from "react-i18next";

const libraries = ["places"];

const Contact = () => {
    const {t} = useTranslation();
    const [center, setCenter] = useState({lat: 41.26011426218339, lng: 69.1974991819678});
    const {isLoaded} = useLoadScript({
        googleMapsApiKey: GOOGLE_MAPS_API_KEY,
        libraries: libraries,
        language: i18next.language,
    });
    useEffect(() => {
        Aos.init({duration: 1000});
    }, []);
    const icon = {url: './img/location-pin.png', scaledSize: {width: 50, height: 55}};

    const options = useMemo(
        () => ({
            disableDefaultUI: false,
            clickableIcons: false
        }),
        []
    );

    const NavigateButton = () => {
        let latitude = 41.26011426218339;
        let longitude = 69.1974991819678;

        const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
        window.open(url, '_blank');
    };


    if (!isLoaded) return <Loader/>;
    return <div className="contact-wrapper">
        <div className="left">
            <Navbar/>
        </div>
        <div className="right">
            <div className="title">
                {t("nav4")}
            </div>
            <div className="body-side">
                <div className="left-box">
                    <div data-aos="zoom-in" className="map-box">
                        <GoogleMap
                            zoom={12}
                            center={center}
                            options={options}
                            mapContainerClassName="map"
                        >

                            <MarkerF
                                position={{lat: 41.26011426218339, lng: 69.1974991819678}}
                                icon={icon}
                            />
                        </GoogleMap>
                    </div>

                    <div className="bottom-left">
                        <div onClick={NavigateButton} className="button-navigator">
                            Navigator
                            <img src="./img/compass.png" alt=""/>
                        </div>
                    </div>
                </div>

                <div className="right-box">
                    <div className="items">
                        <img src="./img/instagram.png" alt=""/>
                        <img src="./img/facebook.png" alt=""/>
                        <img src="./img/youtube.png" alt=""/>
                        <img src="./img/telegram.png" alt=""/>
                        <img src="./img/tik-tok.png" alt=""/>
                        <div className="name">goup_media</div>
                    </div>
                    <div className="phone">
                        <img src="./img/phone.png" alt=""/>
                        +998 95 111-90-20
                    </div>
                    <div className="location">
                        <img src="./img/location1.png" alt=""/>
                        {t("location_name")}
                    </div>
                </div>
            </div>
        </div>
        <div className="circle-sloy-one"></div>
        <div className="circle-sloy-two"></div>
    </div>
};

export default Contact