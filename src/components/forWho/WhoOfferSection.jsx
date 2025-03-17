import * as Icons from "../../utils/icons.util"; // Import all icons
// Import images
import TopPattern from "@/assets/images/patterns/patternT.png";
import BottomPattern from "@/assets/images/patterns/patternB.png";

// Array of services
const services = [
    "Καινοτόμες υπηρεσίες ψυχικής υγείας μέσω της χρήσης σύγχρονης τεχνολογίας.",
    "Εξειδικευμένες λύσεις που προσαρμόζονται στις προσωπικές σας ανάγκες.",
    "Πρόσβαση από οποιοδήποτε σημείο, οποιαδήποτε στιγμή.",
    "Έναν ασφαλή και φιλόξενο χώρο όπου μπορείτε να είστε ο εαυτός σας."
];

export const WhoOfferSection = () => {
    return (
        <main id="offer">
            {/* Overlay Patterns for the process section */}
            <img src={TopPattern} alt="Pattern" className="topPattern" />
            <img src={BottomPattern} alt="Pattern" className="bottomPattern" />

            {/* Section Title & Description */}
            <h2>Τι προσφέρουμε</h2>
            <p>
                Εδώ, κάθε υπηρεσία, κάθε εργαλείο, και κάθε παροχή σχεδιάζεται με επίκεντρο τον Άνθρωπο. Με αυτό ως γνώμονα, σκοπός μας είναι να δημιουργήσουμε ένα υποστηρικτικό περιβάλλον που ενδυναμώνει, παρακινεί και ενισχύει την αυτοπεποίθησή σας για να αντιμετωπίσετε κάθε πρόκληση, μέσα από:
            </p>

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
    );
};