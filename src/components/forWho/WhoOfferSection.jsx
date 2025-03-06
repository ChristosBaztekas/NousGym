import * as Icons from "../../utils/icons.util"; // Import all icons
// Import images
import TopPattern from "../../assets/images/patterns/patternT.png"
import BottomPattern from "../../assets/images/patterns/patternB.png"

export const WhoOfferSection = () => {
    return (
        <main id="offer">
            {/* Overlay Patterns for the process section */}
            <img src={TopPattern} alt="Pattern" className="topPattern" />
            <img src={BottomPattern} alt="Pattern" className="bottomPattern" />


            <h2> Τι προσφέρουμε; </h2>
            <p>Εδώ, κάθε υπηρεσία, κάθε εργαλείο, και κάθε παροχή σχεδιάζεται με επίκεντρο τον Άνθρωπο. Με αυτό ως γνώμονα, σκοπός μας είναι να δημιουργήσουμε ένα υποστηρικτικό περιβάλλον που ενδυναμώνει, παρακινεί και ενισχύει την αυτοπεποίθησή σας για να αντιμετωπίσετε κάθε πρόκληση.</p>

            <div>
                {/* List of services */}
                <ul>
                    <li>
                        <Icons.CheckIcon />
                        Καινοτόμες υπηρεσίες ψυχικής υγείας μέσω της χρήσης σύγχρονης τεχνολογίας.
                    </li>

                    <li>
                        <Icons.CheckIcon />
                        Εξειδικευμένες λύσεις που προσαρμόζονται στις προσωπικές σας ανάγκες.
                    </li>

                    <li>
                        <Icons.CheckIcon />
                        Πρόσβαση από οποιοδήποτε σημείο, οποιαδήποτε στιγμή.
                    </li>

                    <li>
                        <Icons.CheckIcon />
                        Έναν ασφαλή και φιλόξενο χώρο όπου μπορείτε να είστε ο εαυτός σας.
                    </li>
                </ul>
            </div>
        </main>
    )
}
