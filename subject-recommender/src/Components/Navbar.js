import {FaBars, FaTimes} from "react-icons/fa"
import { useRef } from "react";
import "../Styles/nav.css"


function Navbar() {
    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    return (
        <header>
            <img src="/default-monochrome-white.svg" alt="logo" />
            <nav ref={navRef}>
                <a className="hoverText" href="/#">Home</a>
                <a className="hoverText" href="/#">My work</a>
                <a className="hoverText" href="/#">Blog</a>
                <a className="hoverText" href="/#">About me</a>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav> 
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    );
}

export default Navbar;