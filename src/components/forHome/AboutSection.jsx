import NousLogo from "../../assets/Logo.png"; // Import the logo image
import * as Icons from "../../utils/icons.util"; // Import all icons from the icons.util file

export const AboutSection = () => {
    return (
        <main id="about">

            <div>
                {/* Title And Description */}
                <h2>Τι είναι το NousGym;</h2>
                <p>
                    Πιστεύουμε ότι η ψυχική υγεία είναι ο θεμέλιος λίθος για μια γεμάτη, ισορροπημένη ζωή. Για αυτό δημιουργήσαμε έναν χώρο που συνδυάζει τη τεχνολογία με την ανθρώπινη επαφή, για να παρέχουμε φροντίδα υψηλής ποιότητας σε κάθε άνθρωπο, ανεξαρτήτως τόπου ή χρόνου.
                </p>
                <p>
                    Το όραμά μας είναι να γκρεμίσουμε τα τείχη που εμποδίζουν την πρόσβαση στις υπηρεσίες ψυχικής υγείας και να καταρρίψουμε το στίγμα που συνεχίζει να υπάρχει γύρω από τον τομέα της.
                </p>
                <p>
                    Κάθε υπηρεσία, κάθε εργαλείο, κάθε παροχή σχεδιάζεται με γνώμονα τον ΑΝΘΡΩΠΟ, γιατί όλοι μας αξίζουμε τη φροντίδα που μας παρακινεί, για να προχωρήσουμε μπροστά.
                </p>

                {/* List of services */}
                <ul>
                    <li>
                        <Icons.CheckIcon />
                        Για Ενήλικες
                    </li>
                    <li>
                        <Icons.CheckIcon />
                        Ατομικές Συνεδρίες
                    </li>
                </ul>
                <ul>
                    <li>
                        <Icons.CheckIcon />
                        Για Ανήλικους
                    </li>
                    <li>
                        <Icons.CheckIcon />
                        Ομαδικές Συνεδρίες
                    </li>
                </ul>
            </div>

            {/* Logo image */}
            <img src={NousLogo} alt="NousGym Logo" width={493} height={497} />
        </main>
    )
}
