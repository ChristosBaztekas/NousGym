import * as Icons from "../../utils/icons.util"; // Import all icons
// Import Image
import NousCourse from "../../assets/images/forHome/course.png";
import TopPattern from "../../assets/images/patterns/patternT.png"
import BottomPattern from "../../assets/images/patterns/patternB.png"

export const CoursesSection = () => {
    return (
        <main id="courses">
            {/* Overlay Patterns for the process section */}
            <img src={TopPattern} alt="Pattern" className="absolute left-0 right-0 top-0 z-10 w-full" />
            <img src={BottomPattern} alt="Pattern" className="absolute left-0 right-0 bottom-0 z-10 w-full" />

            {/* Logo image */}
            <img src={NousCourse} alt="NousGym Logo" width={435} height={483} />

            <div>
                {/* Title And Description */}
                <h2>Courses</h2>
                <p>
                    Παρακολούθησε εξειδικευμένα βίντεο από τους κορυφαίους ψυχολόγους μας, σχεδιασμένα για να σε καθοδηγήσουν στο ταξίδι της αυτογνωσίας και της προσωπικής σου ανάπτυξης, <strong>στον δικό σου ρυθμό</strong>, εντελώς ασύγχρονα.
                </p>

                {/* Button with icon */}
                <span>
                    <button>Περισσότερα</button>
                    <Icons.ArrowIcon />
                </span>
            </div>
        </main>
    )
}