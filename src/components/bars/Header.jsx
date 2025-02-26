import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import NousLogo from "../../assets/Logo.png"; // Import the logo image
import * as Icons from "../../utils/icons.util"; // Import all icons

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <header className={`sticky-header ${isScrolled ? "scrolled" : ""}`}>

                <div className="burger-menu" onClick={toggleMenu}>
                    <Icons.BurgerIcon />
                </div>

                {/* Logo of the application */}
                <img src={NousLogo} alt="NousGym Logo" width={86} height={86} />

                <div>
                    <nav>
                        {/* Navigation links */}
                        <NavLink to="./">Αρχική</NavLink>
                        <NavLink to="./ss">Ποιοι Είμαστε</NavLink>
                        <NavLink to="./ss">NousGym+</NavLink>
                        <NavLink to="./ss">Επικοινωνία</NavLink>
                    </nav>

                    {/* Button with icon */}
                    <a href="#appointment" className="group">
                        Βρες το Ψυχολόγο σου
                        <span>
                            <Icons.ArrowIcon />
                        </span>
                    </a>
                </div>
            </header>

            {/* Mobile Sidebar */}
            <nav className={`sidebar z-50 ${menuOpen ? "open" : ""}`}>
                <span className="close-btn" onClick={toggleMenu}><Icons.CloseArrowIcon /></span>
                <img src={NousLogo} alt="NousGym Logo" width={86} height={86} />
                <NavLink to="./">Αρχική</NavLink>
                <NavLink to="./ss">Ποιοι Είμαστε</NavLink>
                <NavLink to="./ss">NousGym+</NavLink>
                <NavLink to="./ss">Επικοινωνία</NavLink>
            </nav>
        </>
    );
};