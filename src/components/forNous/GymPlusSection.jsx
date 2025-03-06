import * as Icons from "../../utils/icons.util"; // Import all icons
import NousOnline from "@/assets/images/forHome/nousOnline.webp"; // Import the logo image
import { SmoothScrollButton } from "../custom/SmoothScrollButton";
import TopPattern from "@/assets/images/patterns/patternT.png";
import BottomPattern from "@/assets/images/patterns/patternB.png";
// List of services
const services = [
    "Είναι μια πλατφόρμα ψυχικής & πνευματικής ενδυνάμωσης.",
    "Συνδυάζει καθοδηγούμενες συνεδρίες, εργαλεία αυτοβελτίωσης & υποστηρικτική κοινότητα.",
    "Προσφέρει λύσεις για άγχος, αυτοπεποίθηση, ψυχική ανθεκτικότητα και προσωπική εξέλιξη.",
];

export const GymPlusSection = () => {
    return (
        <main id="gym">

            {/* Overlay Patterns for the process section */}
            <img src={TopPattern} alt="Pattern" className="topPattern" />
            <img src={BottomPattern} alt="Pattern" className="bottomPattern" />

            <div>
                {/* Title And Description */}
                <h2>Τι Είναι το NOUSGYM+</h2>
                <p>
                    Το NOUSGYM+ είναι η πρώτη διαδικτυακή κοινότητα που σε βοηθά να γυμνάσεις τον νου σου, όπως ακριβώς φροντίζεις το σώμα σου.
                </p>

                {/* List of services */}
                <ul>
                    {services.map((service, index) => (
                        <li key={index}>
                            <Icons.CheckIcon />
                            {service}
                        </li>
                    ))}
                </ul>

                {/* Button with icon */}
                <SmoothScrollButton href="#appointment" color="bg-[#FF9245] hover:bg-[#469BAF] text-white">
                    Ξεκίνα Τώρα!
                </SmoothScrollButton>
            </div>

            {/* Logo image */}
            <div>
                <img src={NousOnline} alt="NousGym Logo" width={420} height={360} />
            </div>
        </main>
    )
}