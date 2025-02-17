import { NavLink } from "react-router"
import NousLogo from "../../assets/Logo.png"

export const Header = () => {
    return (
        <header>
            <img src={NousLogo} alt="NousGym Logo" width={86} height={86} />

            <div>
                <nav>
                    <NavLink to="./">Αρχική</NavLink>
                    <NavLink to="./ss">Ποιοι Είμαστε</NavLink>
                    <NavLink to="./ss">NousGym+</NavLink>
                    <NavLink to="./ss">Courses</NavLink>
                    <NavLink to="./ss">Επικοινωνία</NavLink>
                </nav>

                <span>
                    <button>Βρες το Ψυχολόγο σου</button>
                </span>
            </div>
        </header>
    )
}