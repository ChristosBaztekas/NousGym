import * as Icons from "../../utils/icons.util"; // Import all icons
import { CheckBox } from "../custom/CheckBox"; // Import CheckBox component
// Import images
import ToolKit from "../../assets/images/forHome/toolkit.png";
import TextPattern from "../../assets/images/patterns/textPattern.png";

export const ToolkitSection = () => {
    return (
        <main id="toolkit">
            <section>
                {/* Main heading */}
                <p>
                    ΕΝΤΕΛΩΣ ΔΩΡΕΑΝ
                    <Icons.PraPatternIcon />
                </p>
                <h2>
                    Εργαλειοθήκη Ψυχικής Ευεξίας
                    {/* Text pattern image */}
                    <img src={TextPattern} width={230} alt="Pattern" className="ml-auto" />
                </h2>
                <p>
                    Ενίσχυσε την ψυχική σου υγεία με δωρεάν εργαλεία ψυχικής ευεξίας! Συμπλήρωσε το email σου για να λαμβανεις <strong>εντελώς ΔΩΡΕΑΝ</strong> eBooks, καθοδηγούμενους διαλογισμούς και πρακτικούς οδηγούς, σχεδιασμένα όλα για να σε υποστηρίζουν καθημερινά.
                </p>

                {/* Input fields for name and email */}
                <form>
                    <input type="text" placeholder="Όνομα" />
                    <div>
                        <input type="email" placeholder="E-mail" />
                        <button>Sign Up</button>
                    </div>
                </form>

                {/* Custom CheckBox */}
                <CheckBox>
                    Συμπληρώνοντας τη φόρμα αποδέχομαι να λαμβάνω email.
                </CheckBox>
            </section>

            {/* Toolkit image */}
            <img src={ToolKit} width={580} height={580} alt="ToolKit" />
        </main>
    );
};