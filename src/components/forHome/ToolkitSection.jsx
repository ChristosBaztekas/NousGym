import * as Icons from "../../utils/icons.util"
import ToolKit from "../../assets/images/forHome/toolkit.png";
import TextPattern from "../../assets/images/patterns/textPattern.png"; // Import the text pattern image

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

                <div className="flex justify-between gap-5 my-6">
                    <input type="text" placeholder="Όνομα" className="w-full max-w-[200px] h-[52px] px-4 rounded-full bg-[#F1F1F1] outline-none" />
                    <div className="flex w-full h-[52px] rounded-full  bg-[#F1F1F1]">
                        <input type="email" placeholder="E-mail" className="px-5 w-full outline-none" />
                        <button className="bg-[#469BAF] w-[120px] h-full rounded-full px-3 text-sm shrink-0 text-white outline-none ">Sign Up</button>
                    </div>
                </div>


                <div className="flex gap-2 items-center text-xs text-[#00000096] px-2" >



                    <div class="checkbox-wrapper-12">
                        <div class="cbx">
                            <input id="cbx-12" type="checkbox" />
                            <label for="cbx-12"></label>
                            <svg width="15" height="14" viewbox="0 0 15 14" fill="none">
                                <path d="M2 8.36364L6.23077 12L13 2"></path>
                            </svg>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
                            <defs>
                                <filter id="goo-12">
                                    <fegaussianblur in="SourceGraphic" stddeviation="4" result="blur"></fegaussianblur>
                                    <fecolormatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -7"
                                        result="goo-12"></fecolormatrix>
                                    <feblend in="SourceGraphic" in2="goo-12"></feblend>
                                </filter>
                            </defs>
                        </svg>
                    </div>

                    Συμπληρώνοντας τη φόρμα αποδέχομαι να λαμβάνω email.
                </div>



            </section>

            <img src={ToolKit} width={580} height={580} alt="ToolKit" />
        </main>
    )
}