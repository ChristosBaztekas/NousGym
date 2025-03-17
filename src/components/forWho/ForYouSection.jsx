// Import images
import ForU from "@/assets/images/forWho/for.webp";
import TopPattern from "@/assets/images/patterns/patternT.png";
import BottomPattern from "@/assets/images/patterns/patternB.png";
import FloatOPattern from "@/assets/images/patterns/floatingO.svg";
import FloatBPattern from "@/assets/images/patterns/floatingB.svg";

export const ForYouSection = () => {
    return (
        <main id="forU">
            {/* Overlay Patterns for the process section */}
            <img src={TopPattern} alt="Pattern" className="topPattern" />
            <img src={BottomPattern} alt="Pattern" className="bottomPattern" />

            <div>
                {/* Title And Description */}
                <h2>Είναι για σένα;</h2>
                <p>
                    Καθώς οι ψυχολόγοι μας καλύπτουν ένα ευρύ φάσμα θεμάτων, όπως το άγχος, η κατάθλιψη, το τραύμα, οι διαπροσωπικές σχέσεις, και η ψυχική ενδυνάμωση, η προσέγγισή μας είναι πάντα εξατομικευμένη, με βάση τις προτεραιότητες του ατόμου που έχουμε απέναντί μας.
                </p>
                <p>
                    Οπότε είτε θέλεις να αντιμετωπίσεις μια συγκεκριμένη πρόκληση είτε να αναπτύξεις τις δεξιότητές σου, είμαστε εδώ για να σου προσφέρουμε τα κατάλληλα εργαλεία και την υποστήριξη που χρειάζεσαι.
                </p>
            </div>

            {/* Side image with floating patterns */}
            <span className="relative">
                <img src={ForU} alt="NousGym Logo" width={435} height={483} />
                <img className="absolute top-0 left-10 animate-pulse max-sm:w-14" src={FloatOPattern} width={80} height={80} alt="ToolKit Pattern" />
                <img className="absolute bottom-0 sm:bottom-10 right-10 animate-pulse max-sm:w-14" src={FloatBPattern} width={80} height={80} alt="ToolKit Pattern" />
            </span>
        </main>
    )
}