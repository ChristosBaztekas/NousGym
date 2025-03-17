import * as Icons from "../../utils/icons.util"; // Import all icons
// Import images
import TextPattern from "@/assets/images/patterns/textPattern.png";

// List of services covered by the psychologists
const services = [
    "Άγχος",
    "Κρίσεις Πανικού",
    "Τραύμα",
    "Κατάθλιψη",
    "Συμβουλευτική Ζεύγους",
    "Προβλήματα ύπνου",
    "Δυσκολίες προσοχής και συγκέντρωσης",
    "Ενδοσχολική βία και εκφοβισμός",
    "Πένθος και απώλεια",
];

export const CoverSection = () => {
    return (
        <main id="cover">
            {/* Section Title */}
            <h2> Οι Ψυχολόγοι μας καλύπτουν </h2>
            <h2>
                κάθε ανάγκη σου!
                {/* Text pattern image */}
                <img src={TextPattern} width={140} alt="Pattern" />
            </h2>

            <div>
                {/* List of services */}
                <ul>
                    {services.map((service, index) => (
                        <li key={index}>
                            <Icons.CheckIcon />
                            {service}
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    )
}