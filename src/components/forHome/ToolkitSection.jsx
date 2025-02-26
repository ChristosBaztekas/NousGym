import * as Icons from "../../utils/icons.util"; // Import all icons
import { CheckBox } from "../custom/CheckBox"; // Import CheckBox component
// Import images
import ToolKit from "../../assets/images/forHome/toolkit.svg";
import TextPattern from "../../assets/images/patterns/textPattern.png";
import FloatOPattern from "../../assets/images/patterns/floatingO.svg";
import FloatBPattern from "../../assets/images/patterns/floatingB.svg";

export const ToolkitSection = () => {
    return (
        <main id="toolkit">
            <section>
                {/* Main heading */}
                <p>
                    ΕΝΤΕΛΩΣ ΔΩΡΕΑΝ
                    <Icons.PraPatternIcon />
                </p>

                <h2>Εργαλειοθήκη
                    <span>
                        Ψυχικής Ευεξίας
                        {/* Text pattern image */}
                        <img src={TextPattern} width={230} alt="Pattern" className="ml-auto" />
                    </span>
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
            <span className="relative">
                <img src={ToolKit} width={580} height={580} alt="ToolKit" />
                <img className="absolute top-0 sm:top-5 left-10 animate-pulse max-sm:w-14" src={FloatOPattern} width={80} height={80} alt="ToolKit Pattern" />
                <img className="absolute bottom-0 sm:bottom-10 right-10 animate-pulse max-sm:w-14" src={FloatBPattern} width={80} height={80} alt="ToolKit Pattern" />
            </span>
        </main>
    );
};