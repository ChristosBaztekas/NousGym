import { SmoothScrollButton } from "../"; // Import the SmoothScrollButton component
import * as Icons from "../../utils/icons.util"; // Import all icons
// Import images
import TopPattern from "@/assets/images/patterns/patternT.png";
import BottomPattern from "@/assets/images/patterns/patternB.png";

export const ProcessSection = () => {
    return (
        <main id="process">
            {/* Overlay Patterns for the process section */}
            <img src={TopPattern} alt="Pattern" className="topPattern" />
            <img src={BottomPattern} alt="Pattern" className="bottomPattern" />

            {/* Main heading */}
            <p>
                Ποια είναι η διαδικασία;
                <Icons.PraPatternIcon />
            </p>
            <h2>Στάδια Επιλογής για τον Ψυχολόγο σου</h2>

            {/* Steps */}
            <div>
                <span>
                    <Icons.FormIcon />
                    <h3>Δωρεάν Συνεδρία</h3>
                    <p>Κλείνεις δωρεάν αναγνωριστική συνεδρία.</p>
                </span>

                {/* Line Divider */}
                <div></div>

                <span>
                    <Icons.CommunicationIcon />
                    <h3>Επικοινωνία</h3>
                    <p>Σε καλούμε για να κατανοήσουμε τις ανάγκες σου.</p>
                </span>

                {/* Line Divider */}
                <div></div>

                <span>
                    <Icons.ProgrammingIcon />
                    <h3>Προγραμματισμός</h3>
                    <p>Σε συνδέουμε με τον κατάλληλο ψυχολόγο της ομάδας μας.</p>
                </span>
            </div>

            {/* Button with icon */}
            <SmoothScrollButton href="#appointment" color="bg-[#FF9245] hover:bg-[#469BAF] mx-auto text-white">
                Ξεκίνα Τώρα!
                <span>
                    <Icons.ArrowIcon />
                </span>
            </SmoothScrollButton>
        </main>
    );
};