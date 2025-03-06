import * as Icons from "../../utils/icons.util"; // Import all icons
// Import images
import TopPattern from "@/assets/images/patterns/patternT.png";
import BottomPattern from "@/assets/images/patterns/patternB.png";

export const ExistSection = () => {
    return (
        <main id="exist">
            {/* Overlay Patterns for the process section */}
            <img src={TopPattern} alt="Pattern" className="topPattern" />
            <img src={BottomPattern} alt="Pattern" className="bottomPattern" />

            {/* Main heading */}
            <h2>
                Γιατί Υπάρχει το NOUSGYM+;
                <Icons.PraPatternIcon />
            </h2>
            <p>Οι ατομικές συνεδρίες με ψυχολόγο είναι ακριβές.</p>

            {/* Steps */}
            <div>
                <span>
                    <Icons.MoneyIcon />
                    <Icons.CancelIcon />
                    <p>Συμπληρώνεις τη φόρμα επικοινωνίας.</p>
                </span>

                {/* Line Divider */}
                <div></div>

                <span>
                    <Icons.JumpIcon />
                    <Icons.CancelIcon />
                    <p>Δεν ξέρουν από πού να ξεκινήσουν.</p>
                </span>

                {/* Line Divider */}
                <div></div>

                <span>
                    <Icons.PersonIcon />
                    <Icons.CancelIcon />
                    <p>Νιώθουν μόνοι στο ταξίδι της αυτοβελτίωσης.</p>
                </span>
            </div>
        </main>
    )
}