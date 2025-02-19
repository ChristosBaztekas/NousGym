import { NavLink } from "react-router";
import NousLogo from "../../assets/Logo.png"; // Import the logo image
import * as Icons from "../../utils/icons.util"; // Import all icons

export const Header = () => {
    return (
        <header>
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

                {/* Button with icon */}
                <span>
                    <button>Βρες το Ψυχολόγο σου</button>
                    <Icons.ArrowIcon />
                </span>
            </div>
        </header>
    );
};