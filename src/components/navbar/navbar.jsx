import "./style-navbar.scss"
import {useNavigate, NavLink} from "react-router-dom";
import i18next from "i18next";
import {useState} from "react";
import {useTranslation} from "react-i18next";

const Navbar = () => {
    const {t} = useTranslation();
    const navigate = useNavigate();
    const [activeMenu, setActiveMenu] = useState(window.innerWidth > 768 ? true : false);
    const menues = [
        {
            name: t("nav1"),
            url: "/",
            img: "../images/admin/dashboard.png"
        },
        {
            name: t("nav2"),
            url: "/zones",
            img: "../images/admin/dashboard.png"
        }, {
            name: t("nav3"),
            url: "/services",
            img: "../images/admin/dashboard.png"
        },
        {
            name: t("nav4"),
            url: "/contacts",
            img: "../images/admin/dashboard.png"
        },
    ];

    const language = [
        {
            code: "uz",
            name: "UZ",
            country_code: "uz",
        },
        // {
        //     code: "en",
        //     name: "EN",
        //     country_code: "en",
        // },
        {
            code: "ru",
            name: "RU",
            country_code: "ru",
        },
    ];

    const changeLanguage = (code) => {
        localStorage.setItem("lng", code);
        i18next.changeLanguage(code);
    };

    return <div className="navbar-wrapper">
        <div className="left-side">
            <div className="logo">
                <img onClick={() => navigate("/")} src="./img/logo1.png" alt=""/>
            </div>

            {
                activeMenu && <div className="menu-list">
                    <div onClick={() => setActiveMenu(false)} className="cancel-btn">
                        <img src="./img/close.png" alt=""/>
                    </div>
                    {
                        menues.map((item, index) => {
                            return <NavLink to={item.url} key={index}
                                            className={`item-menu ${({isActive}) => isActive ? "active" : ""}`}>
                                <span>{item.name}</span>

                                <div className="icon">
                                    <div className={`circle ${({isActive}) => isActive ? "active-circle" : ""}`}></div>
                                </div>

                            </NavLink>
                        })
                    }

                    <div onClick={() => {
                        navigate("/booking-zone")
                    }} className="text-box">
                        <div className="btn btn-white btn-animate">
                            {t("booking")}
                        </div>
                    </div>

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
                </div>
            }

            <div className="button-broking">
                {window.location.pathname !== "/" && window.location.pathname !== "/booking-zone" &&
                <div onClick={() => {
                    navigate("/booking-zone")
                }} className="text-box">
                    <div className="btn btn-white btn-animate">
                        {t("booking")}
                    </div>
                </div>}
            </div>

            <div className="language-wrapper">
                {language.map(({code, name, country_code}) => (
                    <div
                        key={country_code}
                        onClick={() => changeLanguage(code)}
                        className={`title ${i18next.language === code ? "title-active" : ""}`}
                    >
                        {name}
                    </div>
                ))}
            </div>

            <div onClick={() => setActiveMenu(true)} className="burger-menu">
                <img src="./img/burger.png" alt=""/>
            </div>
        </div>
    </div>
};

export default Navbar