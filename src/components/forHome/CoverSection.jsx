import * as Icons from "../../utils/icons.util"; // Import all icons
// Import images
import TextPattern from "../../assets/images/patterns/textPattern.png";

export const CoverSection = () => {
    return (
        <main id="cover">

            <h2> Οι Ψυχολόγοι μας καλύπτουν </h2>
            <h2>
                κάθε ανάγκη σου!
                {/* Text pattern image */}
                <img src={TextPattern} width={140} alt="Pattern" />
            </h2>

            <div>
                {/* List of services */}
                <ul>
                    <li>
                        <Icons.CheckIcon />
                        Άγχος
                    </li>

                    <li>
                        <Icons.CheckIcon />
                        Κρίσεις Πανικού
                    </li>

                    <li>
                        <Icons.CheckIcon />
                        Τραύμα
                    </li>

                    <li>
                        <Icons.CheckIcon />
                        Κατάθλιψη
                    </li>

                    <li>
                        <Icons.CheckIcon />
                        Ενδοοικογενειακή βία
                    </li>

                    <li>
                        <Icons.CheckIcon />
                        Συμβουλευτική Ζεύγους
                    </li>

                    <li>
                        <Icons.CheckIcon />
                        Αυτοτραυματισμός
                    </li>

                    <li>
                        <Icons.CheckIcon />
                        Προβλήματα ύπνου
                    </li>

                    <li>
                        <Icons.CheckIcon />
                        Δυσκολίες προσοχής και συγκέντρωσης
                    </li>

                    <li>
                        <Icons.CheckIcon />
                        Ενδοσχολική βία και εκφοβισμός
                    </li>

                    <li>
                        <Icons.CheckIcon />
                        Πένθος και απώλεια
                    </li>

                    <li>
                        <Icons.CheckIcon />
                        Σεξουαλική κακοποίηση
                    </li>
                </ul>
            </div>
        </main>
    )
}