import { useState, useEffect } from "react";

function Navbar(){
    const [navActive, setNavActive] = useState(false);

    const toggleNav = () => {
        setNavActive(!navActive)
    }

    const closeMenu = () => {
        setNavActive(false)
    }

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 500) {
                closeMenu
            }
        }

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    })

    return(
        <nav className="navbar">
            <h1 href="/" className="site-title">Flex-Fit</h1>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="about">About</a>
                </li>
                <li>
                    <a href="classes">Classes</a>
                </li>
                <li>
                    <a href="contact">Contact Us</a>
                </li>
            </ul>
        </nav>
    );
}