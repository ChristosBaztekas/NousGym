import * as Icons from "../../utils/icons.util"; // Import all icons
// Import images
import TopPattern from "@/assets/images/patterns/patternT.png"
import BottomPattern from "@/assets/images/patterns/patternB.png"


export const BecomeSection = () => {
    return (
        <main id="become">
            {/* Overlay Patterns for the process section */}
            <img src={TopPattern} alt="Pattern" className="topPattern" />
            <img src={BottomPattern} alt="Pattern" className="bottomPattern" />

            <h3>Γίνε μέλος σήμερα και επένδυσε στην καλύτερη εκδοχή του εαυτού σου!</h3>

            {/* Button with icon */}
            <a href="#price" className="group bg-white hover:bg-gray-300 text-[#2B2C2E]">
                Ξεκίνα Τώρα!
                <span>
                    <Icons.ArrowIcon />
                </span>
            </a>
        </main>
    )
}