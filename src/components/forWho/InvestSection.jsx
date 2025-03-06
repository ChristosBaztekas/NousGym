import { SmoothScrollButton } from "../"
// Import images
import TopPattern from "@/assets/images/patterns/patternT.png"
import BottomPattern from "@/assets/images/patterns/patternB.png"

export const InvestSection = () => {
    return (
        <main id="invest">
            {/* Overlay Patterns for the process section */}
            <img src={TopPattern} alt="Pattern" className="topPattern" />
            <img src={BottomPattern} alt="Pattern" className="bottomPattern" />

            <h3>Επένδυσε στην καλύτερη εκδοχή του εαυτού σου!</h3>

            {/* Button with icon */}
            <SmoothScrollButton href="#appointment" color="bg-white hover:bg-gray-300 text-[#2B2C2E]">
                Ξεκίνα Τώρα!
            </SmoothScrollButton>
        </main>
    )
}