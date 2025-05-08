import React, { useState, useEffect } from "react";
// import logo_png from "../../../public/logo_png.webp";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./Header.css";
import { FiChevronDown } from "react-icons/fi";

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

                    <ul className="LinkDaNav">

                        <details name="MenuDetalhe">
                            <summary> Recursos <div className="Icon"><FiChevronDown /></div></summary>
                            <ul className="SubMenu">
                                <li>
                                    <Link to="#" aria-label="Página de XXXX">
                                        <div className="Icon">

                                        </div>
                                        Gerador textos
                                    </Link>
                                </li>

                                <li>
                                    <Link to="#" aria-label="Página de XXXX">
                                        <div className="Icon">

                                        </div>
                                        Gerador de Imagens
                                    </Link>
                                </li>

                                <li>
                                    <Link to="#" aria-label="Página de XXXX">
                                        <div className="Icon">

                                        </div>
                                        Gerador de vídeos
                                    </Link>
                                </li>

                                <li>
                                    <Link to="#" aria-label="Página de XXXX">
                                        <div className="Icon">

                                        </div>
                                        Gerador de trabalhos ciêntificos
                                    </Link>
                                </li>

                            </ul>
                        </details>

                        <li className="MenuList">
                            <Link to="#" aria-label="Página de XXXX"> Preços </Link>
                        </li>

                        <details name="MenuDetalhe">

                            <summary> Páginas <div className="Icon"><FiChevronDown /></div></summary>

                            <ul className="SubMenu">

                                <li>
                                    <Link to="#" aria-label="Página de XXXX">
                                        Sobre nós
                                    </Link>
                                </li>

                                <li>
                                    <Link to="#" aria-label="Página de XXXX">
                                        Tabela de preços
                                    </Link>
                                </li>

                                <li>
                                    <Link to="#" aria-label="Página de XXXX">
                                        Grade de blog
                                    </Link>
                                </li>

                                <li>
                                    <Link to="#" aria-label="Página de XXXX">
                                        Página de blog
                                    </Link>
                                </li>

                                <li>
                                    <Link to="#" aria-label="Página de XXXX">
                                        Entrar
                                    </Link>
                                </li>

                                <li>
                                    <Link to="#" aria-label="Página de XXXX">
                                        Inscrever-se
                                    </Link>
                                </li>

                                <li>
                                    <Link to="#" aria-label="Página de XXXX">
                                        Página de erro
                                    </Link>
                                </li>

                            </ul>

                        </details>

                        <li className="MenuList">
                            <Link to="#" aria-label="Página de XXXX"> Apoiar </Link>
                        </li>

                    </ul>

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

                <ul className="LinkDaNav">

                    <details name="MenuDetalhe">
                        <summary> Recursos <div className="Icon"><FiChevronDown /></div></summary>
                        <ul className="SubMenu">
                            <li>
                                <Link to="#" aria-label="Página de XXXX">
                                    <div className="Icon">

                                    </div>
                                    Gerador textos
                                </Link>
                            </li>

                            <li>
                                <Link to="#" aria-label="Página de XXXX">
                                    <div className="Icon">

                                    </div>
                                    Gerador de Imagens
                                </Link>
                            </li>

                            <li>
                                <Link to="#" aria-label="Página de XXXX">
                                    <div className="Icon">

                                    </div>
                                    Gerador de vídeos
                                </Link>
                            </li>

                            <li>
                                <Link to="#" aria-label="Página de XXXX">
                                    <div className="Icon">

                                    </div>
                                    Gerador de trabalhos ciêntificos
                                </Link>
                            </li>

                        </ul>
                    </details>

                    <li className="MenuList">
                        <Link to="#" aria-label="Página de XXXX"> Preços </Link>
                    </li>

                    <details name="MenuDetalhe">

                        <summary> Páginas <div className="Icon"><FiChevronDown /></div></summary>

                        <ul className="SubMenu">

                            <li>
                                <Link to="#" aria-label="Página de XXXX">
                                    Sobre nós
                                </Link>
                            </li>

                            <li>
                                <Link to="#" aria-label="Página de XXXX">
                                    Tabela de preços
                                </Link>
                            </li>

                            <li>
                                <Link to="#" aria-label="Página de XXXX">
                                    Grade de blog
                                </Link>
                            </li>

                            <li>
                                <Link to="#" aria-label="Página de XXXX">
                                    Página de blog
                                </Link>
                            </li>

                            <li>
                                <Link to="#" aria-label="Página de XXXX">
                                    Entrar
                                </Link>
                            </li>

                            <li>
                                <Link to="#" aria-label="Página de XXXX">
                                    Inscrever-se
                                </Link>
                            </li>

                            <li>
                                <Link to="#" aria-label="Página de XXXX">
                                    Página de erro
                                </Link>
                            </li>

                        </ul>

                    </details>

                    <li className="MenuList">
                        <Link to="#" aria-label="Página de XXXX"> Apoiar </Link>
                    </li>

                </ul>

                <div className="BtnAction">
                    <Link to='#' aria-label="Ver página de XXXX"> Entrar </Link>
                </div>

            </div>

        </header>
    );
}

export default Header;