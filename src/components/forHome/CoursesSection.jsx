import * as Icons from "../../utils/icons.util"; // Import all icons
// Import Image
import NousCourse from "../../assets/images/forHome/course.svg";
import TopPattern from "../../assets/images/patterns/patternT.png"
import BottomPattern from "../../assets/images/patterns/patternB.png"
import FloatOPattern from "../../assets/images/patterns/floatingO.svg";
import FloatBPattern from "../../assets/images/patterns/floatingB.svg";

export const CoursesSection = () => {
    return (
        <main id="courses">
            {/* Overlay Patterns for the process section */}
            <img src={TopPattern} alt="Pattern" className="topPattern" />
            <img src={BottomPattern} alt="Pattern" className="bottomPattern" />

            {/* side image */}
            <span className="relative">
                <img src={NousCourse} alt="NousGym Logo" width={435} height={483} />
                <img className="absolute top-0 left-10 animate-pulse max-sm:w-14" src={FloatOPattern} width={80} height={80} alt="ToolKit Pattern" />
                <img className="absolute bottom-0 sm:bottom-10 right-10 animate-pulse max-sm:w-14" src={FloatBPattern} width={80} height={80} alt="ToolKit Pattern" />
            </span>

            <div>
                {/* Title And Description */}
                <h2>Courses</h2>
                <p>
                    Παρακολούθησε εξειδικευμένα βίντεο από τους κορυφαίους ψυχολόγους μας, σχεδιασμένα για να σε καθοδηγήσουν στο ταξίδι της αυτογνωσίας και της προσωπικής σου ανάπτυξης, <strong>στον δικό σου ρυθμό</strong>, εντελώς ασύγχρονα.
                </p>

                {/* Button with icon */}
                <button className="group bg-[#469BAF] hover:bg-[#FF9245] mt-5 text-white">
                    Περισσότερα
                    <span>
                        <Icons.ArrowIcon />
                    </span>
                </button>
            </div>
        </main>
    )
}