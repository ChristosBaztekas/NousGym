import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { SmoothScrollButton } from "../";
import * as Icons from "../../utils/icons.util"; // Import all icons
import NousLogo from "@/assets/Logo.png"; // Import the logo image

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    // Function to toggle the mobile menu
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        // Function to handle scroll event
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <>
            <header className={`sticky-header ${isScrolled ? "scrolled" : ""}`}>
                {/* Burger menu icon for mobile view */}
                <div className="burger-menu" onClick={toggleMenu}>
                    <Icons.BurgerIcon />
                </div>

                {/* Logo of the application */}
                <img src={NousLogo} alt="NousGym Logo" width={86} height={86} />

                <div>
                    <nav>
                        {/* Navigation links */}
                        <NavLink to="/">Αρχική</NavLink>
                        <NavLink to="/who-we">Ποιοι Είμαστε</NavLink>
                        <NavLink to="/nous-gym">NousGym+</NavLink>
                        <SmoothScrollButton href="#testimonial">
                            Τι Λένε Για Εμάς
                        </SmoothScrollButton>
                        <a href="#widget">Επικοινωνία</a>
                    </nav>

                    {/* Button with icon */}
                    <SmoothScrollButton href="#appointment">
                        Βρες το Ψυχολόγο σου
                        <span>
                            <Icons.ArrowIcon />
                        </span>
                    </SmoothScrollButton>
                </div>
            </header>

            {/* Mobile Sidebar */}
            <nav className={`sidebar z-50 ${menuOpen ? "open" : ""}`}>
                <span className="close-btn" onClick={toggleMenu}><Icons.CloseArrowIcon /></span>
                <img src={NousLogo} alt="NousGym Logo" width={86} height={86} />
                <NavLink to="/">Αρχική</NavLink>
                <NavLink to="/who-we">Ποιοι Είμαστε</NavLink>
                <NavLink to="/nous-gym">NousGym+</NavLink>
                <SmoothScrollButton href="#testimonial">
                    Τι Λένε Για Εμάς
                </SmoothScrollButton>
                <a href="#widget">Επικοινωνία</a>
            </nav>
        </>
    );
};