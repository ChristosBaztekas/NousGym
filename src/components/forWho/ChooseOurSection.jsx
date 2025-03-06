// Import images
import Choose from "../../assets/images/forHome/course.svg";
import FloatOPattern from "../../assets/images/patterns/floatingO.svg";
import FloatBPattern from "../../assets/images/patterns/floatingB.svg";

export const ChooseOurSection = () => {
    return (
        <main id="choose">

            {/* Toolkit image */}
            <span className="relative">
                <img src={Choose} width={380} height={380} alt="ToolKit" />
                <img className="absolute top-0 left-10 animate-pulse max-sm:w-14" src={FloatOPattern} width={80} height={80} alt="ToolKit Pattern" />
                <img className="absolute bottom-0 right-10 animate-pulse max-sm:w-14" src={FloatBPattern} width={80} height={80} alt="ToolKit Pattern" />
            </span>

            <section>
                <h2>Γιατί να επιλέξετε τους ψυχολόγους μας;</h2>
                <p>
                    Στο NousGym, η ομάδα μας αποτελείται από αυστηρά επιλεγμένους ψυχολόγους και ψυχοθεραπευτές που κατέχουν άδεια άσκησης επαγγέλματος. Η εξειδίκευση του κάθε επαγγελματία ποικίλει με αποτέλεσμα να μπορούμε να καλύψουμε ένα ευρύ φάσμα ζητημάτων που μπορεί να αντιμετωπίζει κάποιος άνθρωπος. Δεν είμαστε μια απρόσωπη υπηρεσία· είμαστε μια ομάδα ανθρώπων που κατανοούν τις ανάγκες σου και εργάζονται μαζί σου για να βρεις τις λύσεις που χρειάζεσαι.
                </p>
                <p className="font-semibold">Οι ψυχολόγοι μας διαθέτουν εμπειρία, ενσυναίσθηση και εξατομικευμένη προσέγγιση, προσφέροντας τη στήριξη που χρειάζεσαι σε κάθε στάδιο της ζωής σου. </p>
                <p>Αυτό που μας διαφοροποιεί είναι η δέσμευσή μας να σου προσφέρουμε ποιοτική φροντίδα με βάση την ανθρώπινη διάσταση.</p>
            </section>
        </main>
    )
}