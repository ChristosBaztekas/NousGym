import { useState } from "react";
import { NavLink } from "react-router";
import NousLogo from "../../assets/Logo.png"; // Import the logo image
import * as Icons from "../../utils/icons.util"; // Import all icons

export const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header>

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
                    <NavLink to="./ss">Courses</NavLink>
                    <NavLink to="./ss">Επικοινωνία</NavLink>
                </nav>


                <nav className={`sidebar z-50 ${menuOpen ? "open" : ""}`}>
                    <span className="close-btn" onClick={toggleMenu}><Icons.CloseArrowIcon /></span>
                    <img src={NousLogo} alt="NousGym Logo" width={86} height={86} />
                    <NavLink to="./">Home</NavLink>
                    <NavLink to="./about">About</NavLink>
                    <NavLink to="./services">Services</NavLink>
                    <NavLink to="./portfolio">Portfolio</NavLink>
                    <NavLink to="./contact">Contact</NavLink>
                </nav>

                {/* Button with icon */}
                <button className="group">
                    Βρες το Ψυχολόγο σου
                    <span>
                        <Icons.ArrowIcon />
                    </span>
                </button>
            </div>

            {menuOpen && <div className="overlay z-50" onClick={toggleMenu}></div>}
        </header>
    );
};