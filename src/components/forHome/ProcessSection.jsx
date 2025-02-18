import * as Icons from "../../utils/icons.util"
import TopPattern from "../../assets/images/patterns/processPatternT.png"
import BottomPattern from "../../assets/images/patterns/processPatternB.png"

export const ProcessSection = () => {
    return (
        <main id="process">

            {/* Overlay Patterns for the process section */}
            <img src={TopPattern} alt="Pattern" className="absolute left-0 right-0 top-0 z-10 w-full" />
            <img src={BottomPattern} alt="Pattern" className="absolute left-0 right-0 bottom-0 z-10 w-full" />

            {/* Main heading */}
            <p>
                Ποια είναι η διαδικασία;
                <Icons.WhitePatternIcon />
            </p>
            <h2>Στάδια Επιλογής για το Ψυχολόγο σου</h2>

            {/* Steps */}
            <div>
                <span>
                    <Icons.FormIcon />
                    <h3>Φόρμα</h3>
                    <p>Συμπληρώνεις τη φόρμα επικοινωνίας.</p>
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
            <span>
                <button>Ξεκίνα Τώρα!</button>
                <Icons.ArrowIcon />
            </span>
        </main>
    )
}