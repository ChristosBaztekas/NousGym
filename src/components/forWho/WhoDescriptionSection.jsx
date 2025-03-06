import * as Icons from "../../utils/icons.util" // Import all icons
// Images
import BottomPattern from "../../assets/images/patterns/patternB.png";

export const WhoDescriptionSection = () => {
    return (
        <main id="description">
            {/* Overlay Patterns for the process section */}
            <img src={BottomPattern} alt="Pattern" className="bottomPattern" />

            <section>
                <p>Στο NousGym, πιστεύουμε ακράδαντα ότι η ψυχική υγεία δεν είναι απλώς ένα μέρος της ζωής μας – είναι η βάση πάνω στην οποία χτίζουμε τα όνειρά μας, τις σχέσεις μας, και την ευτυχία μας. </p>
                <p>Για αυτόν τον λόγο, δημιουργήσαμε έναν πρωτοποριακό χώρο, όπου η τεχνολογία συναντά την ανθρώπινη επαφή, προσφέροντας υπηρεσίες φροντίδας ψυχικής υγείας που προσαρμόζονται στις ανάγκες κάθε ανθρώπου.</p>

                {/* Button with icon */}
                <a href="#appointment" className="group bg-[#FF9245] hover:bg-[#469BAF] mx-auto text-white mt-4 sm:mt-7">
                    Ξεκίνα Τώρα!
                    <span>
                        <Icons.ArrowIcon />
                    </span>
                </a>
            </section>
        </main>
    )
}