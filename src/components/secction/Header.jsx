import React, { useState, useEffect } from "react";
// import logo_png from "../../../public/logo_png.webp";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import "./Header.css";

function Header() {
    const [menuAberto, setMenuAberto] = useState(false);
    const [monstrarFundo, setMonstrarFundo] = useState(false);
    const [darkMode, setDarkMode] = useState(() => {
        const temaSalvo = localStorage.getItem("theme");
        return temaSalvo === "dark";
    });

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", darkMode ? "dark" : "light");
    }, [darkMode]);

    const toggleMenu = () => {
        setMenuAberto(!menuAberto);
        setMonstrarFundo(!monstrarFundo);
        window.navigator.vibrate(30);
    };

    const toggleTheme = () => {
        setDarkMode(!darkMode);
        window.navigator.vibrate(30);
    };

    // FUNDO SCROLL NO HEADER (AOENA ISSO A CLASSE E O CSS)
    const [transparente, setTransparente] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setTransparente(true);
            } else {
                setTransparente(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    // 

    return (
        <header className={`Header ${transparente ? 'transparente' : ''}`} data-aos="fade-down">

            <div className={`Fundo ${monstrarFundo ? "AddFundo" : ""}`} onClick={toggleMenu}></div>

            <div className="HeaderDesk">

                <div className="LogoLink">

                    <div className="Logo">
                        <Link to="/" aria-label="Ir para página inicial">
                            {/* <figure>
                                <img src='https://viaplaceholder.co/30x30' width={35} height={35} alt="Logo do Site" loading="lazy" fetchPriority="high" />
                            </figure> */}
                            <h1>SiSO IA</h1>
                        </Link>
                    </div>

                    <div className="LinkDaNav">
                        <Link to="#" aria-label="Página de XXXX"> Doc </Link>
                        <Link to="#" aria-label="Página de XXXX"> Doar </Link>
                    </div>

                    <div className="Btn">

                        <div className="Accao">

                            <Link to="#" aria-label="Página de XXXX"> Entrar </Link>
                        </div>

                        <div className="BtnTogle">

                            <button className="BtnTema" aria-label="Mudar tema" onClick={toggleTheme} >
                                {darkMode ? <IoSunnyOutline /> : <IoMoonOutline />}
                            </button>

                            <button
                                className={`IconMenuMobile ${menuAberto ? "active" : ""}`}
                                onClick={toggleMenu}
                                aria-label="Abrir ou fechar menu"
                            >
                                <span></span>
                                <span></span>
                                <span className="Ultimo"></span>
                            </button>

                        </div>

                    </div>

                </div>

            </div>

            <div className={`HeaderMob ${menuAberto ? "show" : ""}`} id="HeaderMob">


            </div>

        </header>
    );
}

export default Header;